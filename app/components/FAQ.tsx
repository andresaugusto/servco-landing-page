import React from 'react'
import FadeIn from './animators/FadeIn'
import Copy from './Copy'
import { sections } from '@/definitions'
import Card from './Card'

const CTA: React.FC = () => {
  return (
    <div
      id={sections[3].type}
      className="h-screen relative flex flex-col text-center justify-center items-center"
    >
      <div className="grow flex flex-col justify-center text-center">
        <FadeIn whileInView fromBottom className="sm:pb-lg">
          <Copy variant="h2">{sections[3].title}</Copy>
        </FadeIn>
        <FadeIn fromBottom whileInView once
          className="w-[80vw] max-w-[1000px] flex flex-col items-center justify-center space-y-sm p-lg md:p-sm"
        >
          {
            sections[3].contents.map((question: Record<any, any>, key: React.Key) => {
              return (
                <div
                  key={key}
                >
                  <Card variant="faq">
                    <div className="collapse collapse-arrow text-start">
                      <input type="checkbox" />
                      <div className="collapse-title flex items-center" style={{ minHeight: 0, margin: 0, padding: "0 15vmin 0 3vmin"}}>
                        <Copy variant="caption">{question.question}</Copy>
                      </div>
                      <div className="collapse-content" style={{margin: "0 0 2vmin 0", padding: "0 3vmin"}}>
                        <div className="pt-[2vmin]">
                          <Copy variant="body">{question.answer}</Copy>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })
          }
        </FadeIn>
      </div>
    </div>
  )
}

export default CTA


// the dream outcome: 30% more conversions using this landing page +++ reviews: the experience people have had with us
// 
// pace for people to see this outcome: the faster the better +++ effort & sacrifice: the less the better- how much do they give up as a consequence of receiving the product