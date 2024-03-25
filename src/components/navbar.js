import Image from 'next/image'
import React from 'react'
import Logo from '../../public/logo.png'
import Link from 'next/link'
import { Button } from "@/components/ui/button"


const navbar = () => {
  return (
  <>
        <div className="mx-auto max-w-7xl ">
          <div className="flex items-center justify-between py-5">

            <div className="flex items-center justify-between gap-4">
              <Image src={Logo} alt="Vercel Logo" width={100}
                height={24} />
              <div className="flex space-x-4">
                <a href="#" className="rounded-md text-sm font-medium" >Product</a>
                <a href="#" className=" rounded-md text-sm font-medium">Solutions</a>
                <a href="#" className=" rounded-md text-sm font-medium">Resources</a>
                <a href="#" className=" rounded-md text-sm font-medium">Enterprise</a>
                <a href="#" className="  rounded-md text-sm font-medium">Pricing</a>
              </div>
            </div>

            <div className="flex  items-center gap-4">
              <Link href=''>Contact Sales</Link>
              <Link href=''>Login</Link>
              <Button className="px-6 py-4 text-white rounded-3xl">
                <Link href="/login">Sign up free →</Link>
              </Button>

            </div>

          </div>
        </div>

    </>
  )
}

export default navbar