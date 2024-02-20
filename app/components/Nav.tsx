import React from 'react'
import FadeIn from './animators/FadeIn'
import { Link } from './Link'
import { IoIosCall, IoIosMail, IoLogoLinkedin } from 'react-icons/io'
import Image from 'next/image'

const socials: Record<any, any>[] = [
  {
    name: "Email",
    message: "Email Us",
    network: "email",
    path: "mailto:a.rivera@servcopr.com?cc=l.perez@servcopr.com&subject=SERVCO%20Inquiry%20from%20Web%20Profile",
  },
  {
    name: "Phone",
    message: "Call Us",
    network: null,
    path: "tel:7878312189",
  },
  {
    name: "LinkedIn",
    message: "View Arnaldo's Linkedin Profile",
    network: "linkedin",
    path: "https://www.linkedin.com/in/arnaldo-rivera-6002a439/",
  },
]

const Nav: React.FC = () => {
  return (
    <header className="absolute top-0 w-full px-xs">
      <div className="flex mx-[1vmin] z-100 justify-between">
        <FadeIn fromRight className="flex flex-row items-center px-[.5rem]">
          {/* <Link external id="Home" href="#hero"> */}
              <Image
                src="/avatar.png"
                alt="SERVCO Logo"
                className="mx-sm brightness-0 dark:invert"
                width={22}
                height={22}
              />
          {/* </Link> */}
        </FadeIn>
        <FadeIn fromLeft className="flex flex-row items-center space-x-lg">
          <Link external id="Phone" href="tel:7878312189">
            <IoIosCall className="scale-[125%] md:scale-[150%]" />
          </Link>
          <Link external id="Email" href="mailto:a.rivera@servcopr.com?cc=l.perez@servcopr.com&subject=SERVCO%20Inquiry%20from%20Web%20Profile">
            <IoIosMail className="scale-[125%] md:scale-[150%]" />
          </Link>
          <Link external id="LinkedIn" href="https://www.linkedin.com/in/arnaldo-rivera-6002a439/">
            <IoLogoLinkedin className="scale-[125%] md:scale-[150%]" />
          </Link>
        </FadeIn>
      </div>
    </header>
  )
}

export default Nav