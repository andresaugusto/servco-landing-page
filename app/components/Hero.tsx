import React from 'react'
import Copy from './Copy'
import FadeIn from './animators/FadeIn'
import ContactForm from './ContactForm'
import { sections } from '@/definitions'

const Hero: React.FC = () => {
  return (
    <div
      id={sections[0].type}
      className="h-screen mx-lg flex flex-col-reverse 2xl:flex-row space-y-xl 2xl:space-x-md items-center justify-center"
    >
      <div className="2xl:max-w-1/2 m-lg text-center space-y-md 2xl:space-y-sm 2xl:text-start">   
        <FadeIn whileInView fromBottom>
          <Copy variant="h1">{sections[0].contents[0].mainProductVRT}</Copy>
        </FadeIn>
        <FadeIn whileInView fromBottom>
          <Copy variant="h5-hl">{sections[0].contents[0].howMainProductVRT}</Copy>
        </FadeIn>
        <br />
        <FadeIn whileInView fromBottom className="hidden lg:flex flex-row justify-center 2xl:justify-start">
          <ContactForm />
        </FadeIn>
        <FadeIn whileInView fromBottom className="flex lg:hidden flex-row justify-center 2xl:justify-start">
          <a
            aria-label="Get in touch"
            href={`#${sections[4].type}`}
            type="submit"
            className="btn btn-primary btn-md border shadow-md shadow-primary/20 border-base-content/10 rounded-lg"
          >
            <Copy variant="h4">Contact Us</Copy>
          </a>
        </FadeIn>
      </div>
      <FadeIn whileInView fromBottom className="2xl:w-1/2 p-lg text-center">
        <Copy variant="body">{sections[0].contents[0].heroVisualProperties.component()}</Copy>
      </FadeIn>
    </div>
  )
}

export default Hero