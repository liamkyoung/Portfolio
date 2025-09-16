import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

function LeftFooter() {
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
    <div className="mx-2 lg:mx-12 -mt-7 mb-7 flex-grow">
      <form className="" ref={form} onSubmit={sendEmail}>
        <div className="flex-col md:flex-row flex -mx-5 lg:mx-3 items-start max-w-full">
          <div className="m-5 flex-auto w-full md:w-1/2">
            <h1 className="font-paytone">name</h1>
            <input className="inputField w-full" type="text" name="name" />
          </div>
          <div className="my-5 mx-5 lg:mx-10 flex-auto w-full md:w-1/2">
            <h1 className="font-paytone">e-mail</h1>
            <input
              className="inputField w-full"
              type="email"
              name="user_email"
            />
          </div>
          <div className="mx-5 lg:mx-8 my-5 flex-auto w-full md:w-1/2">
            <h1 className="font-paytone">subject</h1>
            <input className="inputField w-full" type="text" name="subject" />
          </div>
        </div>
        <div className="m-0 lg:mx-8 lg:my-5 w-full">
          <h1 className="font-paytone">message</h1>
          <textarea
            className="inputField min-w-full min-h-1/4 resize-none"
            name="message"
          />
          <div className="flex justify-center w-full lg:-mx-7">
            <input className="button" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default LeftFooter
