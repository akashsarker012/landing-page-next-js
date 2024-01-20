import React from 'react'

export default function Pricing() {
  return (
    <div>
        <div className="mt-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6 text-gray-100">Pricing Plans</h2>
          <p className="text-gray-400">Change your plant according your needs</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-md max-md:mx-auto">
          <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
            <div className="text-left">
              <h4 className="text-xl mb-4 text-gray-100" >Hobby</h4>
              <h3 className="text-4xl text-gray-200">$10.00</h3>
              <p className="mt-4 text-gray-400">Ideal for individuals who need quick access to basic features.</p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  50 Image generations
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  500 Credits
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  Monthly 100 Credits Free
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  50GB Cloud Storage
                </li>
              </ul>
            </div>
            <button type="button"
              className="w-full px-6 py-3.5 rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-all mt-10">Get
              started today</button>
          </div>
          <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
            <div className="text-left">
              <h4 className="text-xl mb-4  text-gray-200">Professional</h4>
              <h3 className="text-4xl text-gray-200">$30.00</h3>
              <p className="mt-4 text-gray-400">Ideal for individuals who who need advanced features and tools for client
                work.</p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  500 Image generations
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  5000 Credits
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  Monthly 1000 Credits Free
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  500GB Cloud Storage
                </li>
              </ul>
            </div>
            <button type="button"
              className="w-full px-6 py-3.5 rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-all mt-10">Get
              started today</button>
          </div>
          <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
            <div className="text-left">
              <h4 className="text-xl mb-4 text-gray-200">Business</h4>
              <h3 className="text-4xl text-gray-200">$45.00</h3>
              <p className="mt-4 text-gray-400">Ideal for businesses who need personalized services and security for large
                teams.</p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  1000 Image generations
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  8000 Credits
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  Monthly 5000 Credits Free
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000" />
                  </svg>
                  1500GB Cloud Storage
                </li>
              </ul>
            </div>
            <button type="button"
              className="w-full px-6 py-3.5 rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-all mt-10">Get
              started today</button>
          </div>
        </div>
      </div>
    </div>
  )
}
