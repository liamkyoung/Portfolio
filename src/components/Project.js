import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Project({ image, title, frameworks, desc, code, site, video }) {
  return (
    <div className="bg-portfolio max-w-5xl rounded-3xl flex flex-col xl:flex-row border-white border-2 align-center my-5 min-w-min items-center">
      <div className="px-6 text-center lg:text-left">
        <h1 className="text-4xl font-paytone pt-8 pb-4">{title}</h1>
        <h2 className="text-xl font-secular hover:text-portfolio-red text-portfolio-orange">
          {frameworks}
        </h2>
        <p className="text-lg font-reem py-6">{desc}</p>
        <div className="flex pb-5">
          {code && (
            <Link href={code} passHref>
              <button className="button">{'<code>'}</button>
            </Link>
          )}
          {site && (
            <Link href={site} passHref>
              <button className="button">{'<site>'}</button>
            </Link>
          )}
          {video && (
            <Link href={video} passHref prefetch={false}>
              <button className="button">{'<video>'}</button>
            </Link>
          )}
        </div>
      </div>
      <div className="xl:flex cursor-pointer m-4 flex-end">
        <Link href={site} passHref target="_blank">
          <div className="rounded-2xl p-8 xl:p-0 w-full">
            <Image
              src={image}
              alt="project-image"
              objectFit="contain"
              height="600px"
              width="600px"
              className="rounded-2xl"
              priority
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Project
