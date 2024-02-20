import React from 'react'
import FadeIn from './animators/FadeIn'
import Copy from './Copy'
import { sections } from '@/definitions'
import Card from './Card'
import Image from 'next/image'

const SocialProof: React.FC = () => {

  const section: Record<any, any> = sections[2]

  return (
    <div
      id={sections[2].type}
      className="h-screen mx-auto flex flex-col justify-center items-center"
    >
      <div
        className="grow w-full flex flex-col items-center justify-center space-y-sm"
      >
        <FadeIn fromBottom whileInView className="pb-sm">
          <Copy variant="h2">{section.title}</Copy>
        </FadeIn>
        <FadeIn whileInView fromBottom once
          className="flex max-w-full px-xl space-x-lg overflow-x-scroll snap-x snap-mandatory"
        >
          {
            section.contents.map((proof: Record<any, any>, key: React.Key) => {
              return (
                <div
                  key={key}
                  className="snap-center"
                >
                  <Card variant="md">
                    <div className="grow card-title text-center my-auto mx-[5vmin] py-[1.75vmin]">
                      <Copy variant="h4">
                      {`" ${proof.proof} "`}
                      </Copy>
                    </div>
                    <div className="flex flex-col text-center items-center mx-[4vmin] md:mx-[2vmin] mb-[6vmin] md:mb-[3vmin] space-y-[2vmin] sm:space-y-[1vmin]">
                      <figure className="flex justify-center">
                        <Image
                          className="rounded-full overflow-hidden w-[10vmin] h-[10vmin] max-w-[50px] max-h-[50px]"
                          src={proof.socialProofVisualProperties.source}
                          alt={proof.socialProofVisualProperties.title}
                          height={50}
                          width={50}
                        />
                      </figure>
                      <Copy variant="caption">
                        {proof.from}
                      </Copy>
                      <Copy variant="body">
                        {proof.stars}
                      </Copy>
                    </div>
                  </Card>
                </div>
              )
            })
          }
        </FadeIn>
        {
          section.clients.length > 0 &&
            (
              <FadeIn whileInView fromBottom
                className="flex flex-wrap justify-evenly items-stretch px-md"
              >
                {
                  section.clients.map((client: Record<any, any>, key: React.Key) => {
                    return (
                      <figure key={key} className="flex justify-center relative w-[10vmin] h-[4vmin] m-[2vmin]">
                        <Image
                          className={`opacity-60 brightness-0 dark:invert`}
                          src={client.logoSource}
                          alt={client.name}
                          fill
                        />
                      </figure>
                    )
                  })
                }
              </FadeIn>
            )
        }
      </div>
    </div>
  )
}

export default SocialProof