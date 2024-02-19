// import React from 'react'
import Copy from '@/app/components/Copy'
import { productName } from '@/definitions/product'

interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <Copy variant="h1">
      We received your message, {name}!
    </Copy>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <Copy variant="h4">
      Message:
    </Copy>
    <p>
      <i>" {message} "</i>
    </p>
    <br />
    <p>
      We will review it and get back to you with feedback shortly.
    </p>
    <br />
    <p>
      Att,
    </p>
    <p>
      <strong>
        the {productName} team!
      </strong>
    </p>
  </div>
)

export default ContactFormEmail