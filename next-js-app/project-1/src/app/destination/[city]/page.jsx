'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page =  ({params}) => {
    const {city} =  useParams()

  return (
    <div className='text-center text-5xl mt-50 text-black font-bold font-serif animate-pulse delay-duration-800'>{city} is beautiful city in INDIA </div>
  )
}

export default page