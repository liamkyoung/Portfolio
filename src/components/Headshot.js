import React from 'react'
import Link from 'next/link'
import HeadshotPic from '../../public/photos/ProfilePic.png'
import Image from 'next/image'

function Headshot() {
  return (
    <div className="flex justify-center">
      <Link href="/about" passHref>
        <Image
          height={200}
          width={200}
          src={HeadshotPic}
          objectFit="contain"
          className="rounded-full drop-shadow-2xl cursor-pointer"
          alt="linkedin-img"
        />
      </Link>
    </div>
  )
}

export default Headshot
