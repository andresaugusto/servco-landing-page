import React from 'react'
import { FadeIn } from './animators/FadeIn'
import { sections } from '@/definitions'
import { Copy } from './Copy'
import Card from './Card'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <div
      id={sections[1].type}
      className="h-screen relative m-sm flex flex-col text-center md:text-left md:flex-row justify-evenly mx-auto items-center"
    >
      <FadeIn whileInView fromBottom once
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
                  <figure className="w-full flex justify-center rounded-tl-md rounded-tr-md">
                    <Image
                      className="rounded-tl-2xl rounded-tr-2xl overflow-hidden"
                      src={benefit.benefitVisualProperties.source}
                      alt={benefit.benefitVisualProperties.title}
                      height={1000}
                      width={1000}
                    />
                  </figure>
                  <div className="card-body space-y-sm">
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
      </FadeIn>
    </div>
  )
}

export default About