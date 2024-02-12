'use client'
import { sections } from '@/definitions'
import React from 'react'
import {useState } from "react"
import { Copy } from './Copy'
import { FadeIn } from './animators/FadeIn'
import Card from './Card'
import toast from 'react-hot-toast'

const ContactForm: React.FC = () => {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("data:", name, email, message);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, message}),
      });

      const data = await response.json();
      if (data?.success) {
        toast.success(data?.message, {
            duration: 7000,
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
        });
        setName("")
        setEmail("")
        setMessage("")
      } else if (data?.success == false) {
        toast.error(data?.message, {
          duration: 7000,
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
      });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  const formPlaceholderClassNames = `placeholder:text-base-content/25 placeholder:leading-tight placeholder:font- placeholder:text-[.75rem] placeholder:md:text-[.90rem]`



  type section = {
    [key: string]: any;
    mainProductVRT?: string;
    howMainProductVRT?: string;
    contactForm?: Record<any, any>;
    relevantThirdPartyReview?: string;
    heroVisualProperties?: string;
  };

  return (
    <FadeIn 
      fromBottom
      whileInView
      className="flex flex-col justify-center items-center space-y-[2.5vmin] sm:space-y-[1vmin]"
    >
      <Card variant="sm">
        <form
          className="grow flex flex-col space-y-[2vmin] sm:space-y-[1vmin]"
          onSubmit={(e: React.FormEvent) => onSubmit(e)}
        >
          <div className="grow text-center 2xl:justify-end py-[2vmin] lg:py-[1rem]">
            <Copy variant="caption">{sections[0].contents[0].contactForm.label}</Copy>
          </div>
          <input
            value={name}
            name="nameStringFromForm"
            id="nameStringFromForm"
            onChange={(e: React.FormEvent) => setName((event!.target as HTMLInputElement)!.value)}
            type="text"
            placeholder={sections[0].contents[0].contactForm.name}
            className={`${formPlaceholderClassNames}  bg-transparent py-[.5vmin] px-[1vmin] border shadow-inner shadow-primary/05 border-base-content/10 rounded-md`}
          />
          <input
            value={email}
            name="emailStringFromForm"
            id="emailStringFromForm"
            onChange={(e: React.FormEvent) => setEmail((event!.target as HTMLInputElement)!.value)}
            type="text"
            placeholder={sections[0].contents[0].contactForm.email}
            className={`${formPlaceholderClassNames}  bg-transparent py-[.5vmin] px-[1vmin] border shadow-inner shadow-primary/10 border-base-content/10 rounded-md`}
          />
          <textarea
            value={message}
            name="messageStringFromForm"
            id="messageStringFromForm"
            onChange={(e: React.FormEvent) => setMessage((event!.target as HTMLInputElement)!.value)}
            placeholder={sections[0].contents[0].contactForm.message}
            className={`${formPlaceholderClassNames}  bg-transparent py-[.5vmin] px-[1vmin] border shadow-inner shadow-primary/10 border-base-content/10 rounded-md`}
          />
          <button
            type="submit"
            className="btn btn-primary btn-md border shadow-md shadow-primary/20 border-base-content/10 rounded-md"
            >
            <Copy variant="h4">{sections[0].contents[0].contactForm.ctaCopy}</Copy>
          </button>
          <div className="grow text-center 2xl:justify-end py-[2vmin] lg:py-[1rem]">
            <Copy variant="caption">{sections[0].contents[0].contactForm.ctaSecuritySubtext}</Copy>
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