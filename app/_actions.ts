'use server'

import { productName } from '@/definitions/product'
import { landingPageSpecs } from '@/definitions/landingPage'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, FormDataSchema } from '@/lib/schema'
import ContactFormEmail from '@/emails/ContactFormEmail'

type Inputs = z.infer<typeof FormDataSchema>

// server action
export async function addEntry(data: Inputs) {
  const result = FormDataSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(`${process.env.RESEND_ONBOARDING_API_KEY}`)

// server action
export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)
  console.log("result log from _actions.ts:", result)

  if (result.success) {
    const { name, email, message } = result.data
    try {
      const data = await resend.emails.send({
        from: `The ${productName} team <${landingPageSpecs.cta.form.addresses.from}>`,
        to: [email],
        bcc: landingPageSpecs.cta.form.addresses.bcc,
        subject: `Thanks for contacting us, ${name}!`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message }),
      })
      return { success: true, data: result }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format(), data: data.message}
  }
}