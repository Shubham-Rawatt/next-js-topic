import { log } from 'console'
import React from 'react'

const Home = async () => {
  let res = await fetch('http://localhost:3000/api/user',{cache:'no-store'})
  let data = res.json()
console.log(data)


  return (
    <div>
    <p className='text-7xl text-center mt-[100px] text-slate-700 font-extralight'>Home</p>
    

        



    </div>
  )
}

export default Home