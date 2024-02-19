import React from 'react'
import ContactForm from './ContactForm'
import FadeIn from './animators/FadeIn'
import Copy from './Copy'
import { sections } from '@/definitions'
import { Signature } from './Signature'

const CTA: React.FC = () => {
  return (
    <div
      id={sections[4].type}
      className="h-screen relative m-sm flex flex-col text-center justify-stretch mx-auto items-center"
    >
      <div className="grow flex flex-col justify-center 2xl:max-w-1/2 m-lg text-center space-y-sm">
        <FadeIn whileInView fromBottom className="pb-lg">
          <Copy variant="h2">{sections[4].contents[0].superDirectCTAHeadline}</Copy>
        </FadeIn>
        <FadeIn fromBottom whileInView once className="flex justify-center">
          <ContactForm />
        </FadeIn>
      </div>
      <Signature />
    </div>
  )
}

export default CTA