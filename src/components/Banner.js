import React from 'react'

export default function Banner() {
  return (
     <div
    className="relative lg:min-h-screen 2xl:min-h-[730px] before:absolute before:inset-0 before:w-full before:bg-black before:opacity-60"
    style={{
      backgroundImage: "url(https://readymadeui.com/dark-bg-image.webp)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
       <div className="max-w-5xl mx-auto text-center relative pt-32 sm:px-10 ">
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
    </div>
    </div>
  )
}
