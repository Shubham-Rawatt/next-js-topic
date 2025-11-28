'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Destination = () => {
  const router = useRouter()

  const destination = ['NewDelhi','Banglore','Mumbai','Kolkata']
  return (
    <div className='flex justify-center items-center text-white h-full flex-col gap-6'>
      <div className='font-bold text-5xl text-black mb-5'>
        Choose your destination
      </div>

          <div className='flex justify-center flex-col gap-5'>
            {destination.map((item , index) =>(
              <div key={index} className='font-bold text-2xl flex items-center justify-center rounded-2xl w-[150px] h-[100px] bg-slate-300'  onClick={()=> router.push(`/destination/${item}`)}>
                {item}
                 </div>
            ))}
          </div>
    </div>
  )
}

export default Destination