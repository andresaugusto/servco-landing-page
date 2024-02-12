export const productName: string = "SERVCO"
const relevantThirdPartyReviewComponent = (contents:  Record<any, any>[]) => <>[ A starred-review-style visual of popular opinion from a relevant source ]</>
const heroVisualComponent = (contents:  Record<any, any>[]) => <>[ A hero-style visual of the result ]</>
const additionalVRTVisualComponent = (contents:  Record<any, any>[]) => <>additionalVRTVisualComponent</>
const socialProofVisualComponent = (contents:  Record<any, any>[]) => <>socialProofVisualComponent</>
const faqVisualComponent = (contents:  Record<any, any>[]) => <>faqVisualComponent</>

export const sections: Record<any, any> = [
  {
    type: "hero",
    intention: `Paint a picture for the the potential ${productName} client`,
    contents: [
      {
        mainProductVRT: `Value, Result, a/o Transformation ${productName} provides`,
        howMainProductVRT: `What ${productName} does that delivers that Value, Result, or Transformation.`,
        contactForm: {
          label: "Contact Us",
          name: "Your name",
          email: "Your email",
          message: `A message for us at ${productName} to guide you best.`,
          ctaCopy: "What Happens Next",
          ctaSecuritySubtext: "We'll never share your information with anyone.",
        },
        relevantThirdPartyReview: {
          intention: `[ Reviews component for ${productName} with results from a relevant review source (like yelp for restaurants) ]`,
          component: (contents: Record<any, any>[]) => relevantThirdPartyReviewComponent(contents),
        },
        heroVisualProperties: {
          title: "A visual of the result.",
          component: (contents: Record<any, any>[]) => heroVisualComponent(contents),
        }
      }
    ]
  },
  {
    type: "about", // Servco's before and after
    intention: "Show three to five (3-5) Values, Results, a/o Transformations",
    contents: [
      {
        additionalVRT: `Another Value, Result, a/o Transformation ${productName} provides`,
        benefitDeliveringAdditionalVRT: `The benefit ${productName} provides that delivers the benefit's Value, Result, a/o Transformation.`,
        benefitVisualProperties: {
          title: "[ A visual of the result created by the benefit ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => additionalVRTVisualComponent(contents),
        },
      },
      {
        additionalVRT: `Another Value, Result, a/o Transformation ${productName} provides`,
        benefitDeliveringAdditionalVRT: `The benefit ${productName} provides that delivers the benefit's Value, Result, a/o Transformation.`,
        benefitVisualProperties: {
          title: "[ A visual of the result created by the benefit ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => additionalVRTVisualComponent(contents),
        },
      },
      {
        additionalVRT: `Another Value, Result, a/o Transformation ${productName} provides`,
        benefitDeliveringAdditionalVRT: `The benefit ${productName} provides that delivers the benefit's Value, Result, a/o Transformation.`,
        benefitVisualProperties: {
          title: "[ A visual of the result created by the benefit ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => additionalVRTVisualComponent(contents),
        },
      },
    ]
  },
  {
    type: "social proof", // Servco's client logo grid
    title: `People we've worked with`,
    intention: `Show three or more (3+) social review proofs from relevantly-standout ${productName} clients a/o show a list of relevant logos of businesses you've worked with, logos of websites or publications where ${productName} has been freatured, or stats of how many people you've helped or have engaged with ${productName}.`,
    clients: [
      {
        name: "1",
        logoSource: "/logo_original.png",
      },
      {
        name: "2",
        logoSource: "/logo_original.png",
      },
      {
        name: "3",
        logoSource: "/logo_original.png",
      },
      {
        name: "4",
        logoSource: "/logo_original.png",
      },
      {
        name: "5",
        logoSource: "/logo_original.png",
      },
      {
        name: "6",
        logoSource: "/logo_original.png",
      },
      {
        name: "7",
        logoSource: "/logo_original.png",
      },
      {
        name: "8",
        logoSource: "/logo_original.png",
      },
      {
        name: "9",
        logoSource: "/logo_original.png",
      },
    ],
    contents: [
      {
        proof: `The benefit ${productName} provided that delivered the benefit's Value, Result, a/o Transformation in a unique fashion. Can also be a common price objection turned into a great time a/o service a/o return of investment benefit.`,
        from: `Name, and professional title (and enterprise represented if applicable).`,
        stars: `[ Show 1-5 stars ]`,
        socialProofVisualProperties: {
          title: "[ A visual of the person that provided the proof ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => socialProofVisualComponent(contents),
        },
      },
      {
        proof: `The benefit ${productName} provided that delivered the benefit's Value, Result, a/o Transformation in a unique fashion. Can also be a common price objection turned into a great time a/o service a/o return of investment benefit.`,
        from: `Name, and professional title (and enterprise represented if applicable).`,
        stars: `[ Show 1-5 stars ]`,
        socialProofVisualProperties: {
          title: "[ A visual of the person that provided the proof ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => socialProofVisualComponent(contents),
        },
      },
      {
        proof: `The benefit ${productName} provided that delivered the benefit's Value, Result, a/o Transformation in a unique fashion. Can also be a common price objection turned into a great time a/o service a/o return of investment benefit.`,
        from: `Name, and professional title (and enterprise represented if applicable).`,
        stars: `[ Show 1-5 stars ]`,
        socialProofVisualProperties: {
          title: "[ A visual of the person that provided the proof ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => socialProofVisualComponent(contents),
        },
      },
    ],
  },
  {
    type: "FAQ",
    title: "Frequently Asked Questions",
    intention: `Show five to seven (5-7) common questions potential clients have about the product or service ${productName} provides. These questions should bust Product a/o Service Time, Value, a/o Price Objections`,
    contents: [
      {
        question: `A common question people have of the benefits or details of the products or services (?).`,
        answer: `A detailed answer to the questionand an opportunity more beneficial data about the answer to the question being answered.`,
        faqVisualProperties: {
          title: "[ A collapsible FAQ visual. ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => faqVisualComponent(contents),
        },
      },
      {
        question: `A common question people have of the benefits or details of the products or services (?).`,
        answer: `A detailed answer to the question about the benefits or details of attaining the benefit(s) ${productName} provides. Add more beneficial data about the answer to the question being answered.`,
        faqVisualProperties: {
          title: "[ A collapsible FAQ visual. ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => faqVisualComponent(contents),
        },
      },
      {
        question: `A common question people have of the benefits or details of the products or services (?).`,
        answer: `A detailed answer to the question about the benefits or details of attaining the benefit(s) ${productName} provides. Add more beneficial data about the answer to the question being answered.`,
        faqVisualProperties: {
          title: "[ A collapsible FAQ visual. ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => faqVisualComponent(contents),
        },
      },
      {
        question: `A common question people have of the benefits or details of the products or services (?).`,
        answer: `A detailed answer to the question about the benefits or details of attaining the benefit(s) ${productName} provides. Add more beneficial data about the answer to the question being answered.`,
        faqVisualProperties: {
          title: "[ A collapsible FAQ visual. ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => faqVisualComponent(contents),
        },
      },
      {
        question: `A common question people have of the benefits or details of the products or services (?).`,
        answer: `A detailed answer to the question about the benefits or details of attaining the benefit(s) ${productName} provides. Add more beneficial data about the answer to the question being answered.`,
        faqVisualProperties: {
          title: "[ A collapsible FAQ visual. ]",
          source: "/avatar.png",
          component: (contents: Record<any, any>[]) => faqVisualComponent(contents),
        },
      },
    ],
  },
  {
    type: "CTA",
    intention: `Call to action headline to onboard the potential client into the service/product ${productName} provides`,
    contents: [
      {
        superDirectCTAHeadline: `Call to action headline to onboard the potential client into the service/product ${productName} provides`,
        form: {
          label: "Contact Us",
          name: "Name",
          email: "Email",
          message: "Message",
          ctaCopy: "[ CTA: What Happens Next]",
          ctaSecuritySubtext: "We'll never share your information with anyone",
        },
      }
    ],
  },

]

export const viewList = [
  ...Object.keys(sections),
]