import React from 'react'
import FadeIn from './animators/FadeIn'
import { sections } from '@/definitions'
import Copy from './Copy'
import Card from './Card'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <div
      id={sections[1].type}
      className="h-screen relative m-sm flex flex-col text-center md:text-left md:flex-row justify-evenly mx-auto items-center"
    >
      <div
        className="w-full flex space-x-md overflow-x-scroll snap-x snap-mandatory px-xl py-lg"
      >
        {
          sections[1].contents.map((benefit: Record<any, any>, key: React.Key) => {
            return (
              <div
                key={key}
                className="snap-center"
              >
                <Card variant="lg">
                  <figure className="grow bg-red-100 w-full flex justify-center rounded-tl-md rounded-tr-md">
                    <Image
                      className="rounded-tl-2xl rounded-tr-2xl"
                      src={benefit.benefitVisualProperties.source}
                      alt={benefit.benefitVisualProperties.title}
                      height={1000}
                      width={1000}
                    />
                  </figure>
                  <div className="card-body space-y-[2vmin] sm:space-y-[1vmin]">
                    <div className="card-title">
                      <Copy variant="h2">
                        {benefit.additionalVRT}
                      </Copy>
                    </div>
                      <Copy variant="h6-hl">
                        {benefit.benefitDeliveringAdditionalVRT}
                      </Copy>
                  </div>
                </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default About