import React from 'react'
import Head from 'next/head'
import SmallHeader from '../components/header/SmallHeader'
import Header from '../components/header/Header'
import MainBG from '../components/backgrounds/MainBG'
import Link from 'next/link'
import Footer from '../components/Footer'

function resizeIframe(obj) {
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + 'px'
}

function resume() {
  return (
    <div className="bg-portfolio-gray min-h-screen text-white overflow-hidden">
      <Head>
        <title>Resume | LKY </title>
        <meta name="description" content="LKY's Website" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
      </Head>
      <MainBG />

      <div className="mb-12 h-1/6">
        <Header />
        <SmallHeader />
      </div>

      <div className="mt-44 flex">
        <div className="h-screen w-full relative flex justify-center m-auto">
          <iframe
            className="absolute border-portfolio-white border-4 min-w-min z-30"
            title="Resume"
            width="95%"
            height="90%"
            src="https://drive.google.com/file/d/1CGF-_jY3AhVz4jGawwMZB8fPRYB9uJWO/preview"
          />
        </div>
      </div>
    </div>
  )
}

export default resume
