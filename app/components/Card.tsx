import React from 'react'
import { Interface } from '../page'

const cardSizeClassNames = {
  common: "border border-primary/30 border-t-primary/20 shadow-primary/30 dark:shadow-primary/90 backdrop-blur-2xl bg-base-100/50 active:bg-base-100/80 transition-all overflow-hidden",
  sm: "card rounded-2xl w-[66vw] min-w-[275px] max-w-[400px] max-h-[600px] shadow-lg", // space-y-[2.5vmin] sm:space-y-[1vmin]
  md: "card rounded-2xl w-[66vw] min-w-[275px] max-w-[400px] h-[50vh] md:h-[33vh] min-h-[225px] max-h-[600px] shadow-lg mb-[6vmin] lg:mt-[3vmin]", // my-lg md:my-sm
  lg: "card rounded-2xl w-[82vw] min-w-[275px] max-w-[1000px] h-[75vh] min-h-[275px] shadow-lg", // my-lg md:my-sm
  faq: "card rounded-2xl w-[82vw] max-w-[1000px] shadow-lg sm:shadow-2xl", // my-lg md:my-sm
}

const Card: React.FC<Interface> = ({variant, children, className}) => {
  switch (variant) {
    case "sm": 
      return (
        <div className={`${cardSizeClassNames.common} ${cardSizeClassNames.sm} ${className}`}>{children}</div>
      )
    case "md":
      return (
        <div className={`${cardSizeClassNames.common} ${cardSizeClassNames.md} ${className}`}>{children}</div>
      )
    case "lg":
      return (
        <div className={`${cardSizeClassNames.common} ${cardSizeClassNames.lg} ${className}`}>{children}</div>
      )
    case "faq":
      return (
        <div className={`${cardSizeClassNames.common} ${cardSizeClassNames.faq} ${className}`}>{children}</div>
      )
    default:
      return (
        <div className={`${cardSizeClassNames.common} ${cardSizeClassNames.md} ${className}`}>{children}</div>
      )
  }
}

export default Card