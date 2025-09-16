import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

function ContactForm() {
  const form = useRef()
  const USER = process.env.NEXT_PUBLIC_USER
  const SERVICE = process.env.NEXT_PUBLIC_SERVICE
  const TEMPLATE = process.env.NEXT_PUBLIC_TEMPLATE

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE, TEMPLATE, form.current, USER).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }

  return (
    <div className="">
      <form className="mx-auto" ref={form} onSubmit={sendEmail}>
        <div className="flex-col lg:flex-row flex lg:mx-3 lg:items-start items-center justify-center space-x-3">
          <div className="w-full">
            <h1 className="font-paytone">name</h1>
            <input className="inputField w-full" type="text" name="name" />
          </div>
          <div className="w-full">
            <h1 className="font-paytone">e-mail</h1>
            <input
              className="inputField w-full"
              type="email"
              name="user_email"
            />
          </div>
          <div className="w-full">
            <h1 className="font-paytone">subject</h1>
            <input className="inputField w-full" type="text" name="subject" />
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-paytone ml-1">message</h1>
          <textarea
            className="inputField min-h-1/4 resize-none flex justify-center min-w-full"
            name="message"
          />
          <div className="flex justify-center">
            <input className="alt-button" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
