import React from 'react'
import { FadeIn } from './animators/FadeIn'
import { Copy } from './Copy'
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
                    <div className="card-body flex flex-col text-center items-center">
                      <div className="card-title py-[3vmin]">
                        <Copy variant="h4">
                        {`" ${proof.proof} "`}
                        </Copy>
                      </div>
                      <figure className="w-full flex justify-center">
                        <Image
                          className="w-1/4 rounded-full overflow-hidden"
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
                className="w-[100vw] flex flex-wrap justify-evenly items-stretch overflow-x-scroll px-xl"
              >
                {
                  section.clients.map((client: Record<any, any>, key: React.Key) => {
                    return (
                      <div
                        key={key}
                        className="h-[1.15rem] sm:h-[2rem] flex justify-center align-center m-sm md:m-md lg:m-[1rem]"
                      >
                        <figure className="flex justify-center relative w-[3rem] sm:w-[5rem] lg:w-[5.5rem]">
                          <Image
                            className={`opacity-60 brightness-0 dark:invert`}
                            src={client.logoSource}
                            alt={client.name}
                            fill
                          />
                        </figure>
                      </div>
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