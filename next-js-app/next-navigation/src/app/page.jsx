"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


const page = () => {

  const router = useRouter()

  return (
    <div>

      <ul>
       <Link href={"/"}><li>Home</li></Link>
          <Link href={"/about"}><li>About</li></Link>
          <Link href={"/contact"}><li>Contact</li></Link>
      </ul>

<button onClick={()=> router.push("/about")} className="border bg-amber-400 text-black p-3 rounded">go to about page</button>

    </div>
  )
}

export default page