'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const path = usePathname()

  return (
    <div className='h-20 w-full bg-white flex justify-between items-center px-5'>
        <div className='text-black font-bold text-2xl'>
            🌎 Travel Guide
        </div>
        <div>
            <ul className='flex justify-center items-center gap-10 text-black font-semibold'> 
                <Link href={"/"} className={path === "/" ? "text-green-700": ''}><li>Home</li></Link>
                <Link href={"/destination"}  className={path === "/destination" ? "text-green-700": ''}>  <li>Destinations</li></Link> 
                <Link href={"/contact"}  className={path === "/contact" ? "text-green-700": ''}> <li>Contact</li> </Link> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar