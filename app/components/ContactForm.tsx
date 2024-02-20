'use client'
import React from 'react'
import Card from './Card'
import Copy from './Copy'
import FadeIn from './animators/FadeIn'
import { sections } from '@/definitions'
import { landingPageSpecs, inputsClassNames, placeholdersClassNames } from '@/definitions/landingPage'

import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ContactFormSchema } from '@/lib/schema'
import { sendEmail } from '@/app/_actions'
import { toast } from 'sonner'

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

// const inputsClassNames = `bg-transparent py-[.5vmin] px-[1vmin] border shadow-inner shadow-primary/05 border-base-content/10 rounded-md`
// const placeholdersClassNames = `placeholder:text-base-content/25 placeholder:leading-tight placeholder:font- placeholder:text-[.75rem] placeholder:md:text-[.90rem]`


const ContactForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<ContactFormInputs> = async ( data: ContactFormInputs ) => {
    
    const result = await sendEmail(data)
    
    if (result?.success) {
      console.log({ data: result.data })
      toast.success('Email sent!')
      reset()
      return
    }

    console.log(result?.error)
    toast.error("Something went wrong!")
  }

  return (
    <FadeIn 
      fromBottom
      whileInView
      className="flex flex-col justify-center items-center space-y-[2.5vmin] sm:space-y-[1vmin]"
    >
      <Card variant="sm">
        <form
          className="grow flex flex-col space-y-[2vmin] sm:space-y-[1vmin] p-[4vmin] md:p-[1rem]"
          onSubmit={handleSubmit(processForm)}
        >
          {/* <div className="grow text-center 2xl:justify-end py-[2vmin] lg:py-[1rem]">
            <Copy variant="caption">{sections[4].contents[0].form.label}</Copy>
          </div> */}
          <input
            placeholder={sections[4].contents[0].form.name}
            className={`${placeholdersClassNames} ${inputsClassNames}`}
            {...register('name')}
          />
          {errors.name?.message && (
            <p className= "ml-1 mt-1 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
          <input
            placeholder={sections[4].contents[0].form.email}
            className={`${placeholdersClassNames} ${inputsClassNames}`}
            {...register('email')}
          />
          {errors.email?.message && (
            <p className= "ml-1 mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
          <textarea
            rows={2}
            cols={5}
            placeholder={sections[4].contents[0].form.message}
            className={`${placeholdersClassNames} ${inputsClassNames}`}
            {...register('message')}
          />
          {errors.message?.message && (
            <p className= "ml-1 mt-1 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
          <button
            // type="submit"
            disabled={isSubmitting}
            className="btn btn-primary btn-md border shadow-md shadow-primary/20 border-base-content/10 rounded-md"
            >
            {
              isSubmitting
              ? <Copy variant="h4">{sections[4].contents[0].form.ctaSubmittingCopy}</Copy>
              : <Copy variant="h4">{sections[4].contents[0].form.ctaCopy}</Copy>
            }
          </button>
          <div className="grow text-center 2xl:justify-end py-[2vmin] lg:py-[1rem]">
            <Copy variant="caption">{sections[4].contents[0].form.ctaSecuritySubtext}</Copy>
          </div>
        </form>
      </Card>
      <FadeIn whileInView className="flex flex-row py-md md:py-sm justify-center 2xl:justify-start">
        <Copy variant="body">
          {sections[0].contents[0].relevantThirdPartyReview.component()}
        </Copy>
      </FadeIn>
    </FadeIn>
  )
}

export default ContactForm