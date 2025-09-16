import React from 'react'

function Interests() {
  return (
    <div className="text-lg text-center">
      <h1 className="font-notable my-5">My current interests</h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between w-full">
        <h2 className="bg-portfolio-pink p-2 my-2 w-full">Counter-Strike</h2>
        <h2 className="bg-portfolio-orange p-2 my-2 w-full">Photography</h2>
        <h2 className="bg-portfolio-yellow p-2 my-2 w-full">Running</h2>
      </div>
    </div>
  )
}

export default Interests
