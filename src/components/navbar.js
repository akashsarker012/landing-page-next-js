import Image from 'next/image'
import React from 'react'
import Logo from '../../public/logo.png'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const navbar = () => {
  return (
    <>
    <header className='py-4 px-4 sm:px-10 z-50 absolute w-full '>
      <div className='lg:flex lg:items-center gap-x-2 relative'>
        <div className="flex items-center shrink-0">
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo"
              className='w-40' />
          </a>
          <button id="toggle" className='lg:hidden ml-auto'>
            <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                ></path>
            </svg>
          </button>
        </div>
        <div id="collapseMenu"
          className="lg:!flex lg:items-center w-full lg:ml-14 max-lg:hidden max-lg:bg-black gap-6 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[250px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto">
          <ul className='lg:flex lg:space-x-6 max-lg:space-y-6 max-lg:w-full text-white'>
            <li className='max-lg:border-b max-lg:py-2 px-3'>
              <a href='javascript:void(0)' className='lg:hover:text-blue-600 text-blue-600 block transition-all'>Home</a>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
                className='lg:hover:text-blue-600 block transition-all'>Team</a>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
                className='lg:hover:text-blue-600 block transition-all'>Feature</a>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
                className='lg:hover:text-blue-600 block transition-all'>Blog</a>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
                className='lg:hover:text-blue-600 block transition-all'>About</a>
            </li>
          </ul>
          <div
            className='flex xl:w-80 max-xl:w-full bg-transparent px-6 py-2.5 rounded border border-white lg:ml-auto  max-lg:mt-10'>
            <input type='text' placeholder='Search something...' className='w-full bg-transparent rounded outline-none' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
              className="cursor-pointer fill-gray-400">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
          </div>
        </div>
      </div>
    </header>

    {/* <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
      <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold mb-6 md:!leading-[80px] text-white">Build Landing Pages with Typeform
        Integration</h1>
      <p className="text-base text-gray-400">Embark on a gastronomic journey with our curated dishes, delivered promptly
        to your doorstep. Elevate your dining experience today. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.</p>
      <div className="grid sm:grid-cols-3 gap-6 items-center mt-16 text-yellow-50">
        <div className="flex flex-col items-center text-center">
          <h5 className="font-bold text-2xl text-blue-600 mb-2">10+</h5>
          <p>Years Experience</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h5 className="font-bold text-2xl text-blue-600 mb-2">890</h5>
          <p>Cases Solved</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h5 className="font-bold text-2xl text-blue-600 mb-2">250</h5>
          <p>Business Partners</p>
        </div>
      </div>
      <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
        <button type='button'
          className="px-6 py-3.5 rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-all">Start a free
          trial</button>
        <button type='button'
          className="bg-transparent hover:bg-blue-600 border border-blue-600 px-6 py-3.5 rounded-md text-white transition-all">API
          documentation</button>
      </div>
    </div> */}
  </>
  )
}

export default navbar;
