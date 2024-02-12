import { Interface } from '@/app/page'
import React from 'react'

export const Link: React.FC<Interface> = ({ carouselItem, children, external, href, id, key }) => {

  return (
    <a
      key={key ? key : undefined}
      aria-label={id ? id : undefined}
      href={href ? href : id ? `#${id}` : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${carouselItem ? "carousel-item " : ""} btn btn-ghost flex justify-content-center border-none text-center bg-transparent`}
      >
      {children}
    </a>
  )

}