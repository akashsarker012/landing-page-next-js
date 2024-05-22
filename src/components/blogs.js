import React from 'react'

export default function Blogs() {
  return (
    <> 
    <div className="mt-32">
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6 text-gray-100">LATEST BLOGS</h2>
        <p className="text-gray-400">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit
          deserunt.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        <div className="cursor-pointer rounded overflow-hidden group">
          <div>
            <span className="block text-gray-400 mb-2">10 FEB 2023</span>
            <h3 className="text-xl group-hover:text-blue-600 transition-all text-gray-100">A Guide to Igniting Your Imagination</h3>
            <div className="mt-6">
              <p className="text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex flex-wrap items-center gap-3">
            <img src='https://readymadeui.com/team-1.webp' className="w-9 h-9 rounded-full" />
            <p className="text-xs text-gray-400">BY JOHN DOE</p>
          </div>
        </div>
        <div className="cursor-pointer rounded overflow-hidden group">
          <div>
            <span className="block text-gray-400 mb-2">7 JUN 2023</span>
            <h3 className="text-xl text-gray-100 group-hover:text-blue-600 transition-all">Hacks to Supercharge Your Day</h3>
            <div className="mt-6">
              <p className="text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex flex-wrap items-center gap-3">
            <img src='https://readymadeui.com/team-2.webp' className="w-9 h-9 rounded-full" />
            <p className="text-xs text-gray-400">BY MARK ADAIR</p>
          </div>
        </div>
        <div className="cursor-pointer rounded overflow-hidden group">
          <div>
            <span className="block text-gray-400 mb-2">5 OCT 2023</span>
            <h3 className="text-xl group-hover:text-blue-600 transition-all text-gray-100">Trends and Predictions</h3>
            <div className="mt-6">
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex flex-wrap items-center gap-3">
            <img src='https://readymadeui.com/team-3.webp' className="w-9 h-9 rounded-full" />
            <p className="text-xs text-gray-400">BY SIMON KONECKI</p>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}
