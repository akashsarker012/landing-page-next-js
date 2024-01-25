import React from 'react'

export default function Blogs() {
  return (
    <> 
    <div class="mt-32">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6 text-gray-100">LATEST BLOGS</h2>
        <p class="text-gray-400">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit
          deserunt.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        <div class="cursor-pointer rounded overflow-hidden group">
          <div>
            <span class="block text-gray-400 mb-2">10 FEB 2023</span>
            <h3 class="text-xl group-hover:text-blue-600 transition-all text-gray-100">A Guide to Igniting Your Imagination</h3>
            <div class="mt-6">
              <p class="text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
          <hr class="my-6" />
          <div class="flex flex-wrap items-center gap-3">
            <img src='https://readymadeui.com/team-1.webp' class="w-9 h-9 rounded-full" />
            <p class="text-xs text-gray-400">BY JOHN DOE</p>
          </div>
        </div>
        <div class="cursor-pointer rounded overflow-hidden group">
          <div>
            <span class="block text-gray-400 mb-2">7 JUN 2023</span>
            <h3 class="text-xl text-gray-100 group-hover:text-blue-600 transition-all">Hacks to Supercharge Your Day</h3>
            <div class="mt-6">
              <p class="text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
          <hr class="my-6" />
          <div class="flex flex-wrap items-center gap-3">
            <img src='https://readymadeui.com/team-2.webp' class="w-9 h-9 rounded-full" />
            <p class="text-xs text-gray-400">BY MARK ADAIR</p>
          </div>
        </div>
        <div class="cursor-pointer rounded overflow-hidden group">
          <div>
            <span class="block text-gray-400 mb-2">5 OCT 2023</span>
            <h3 class="text-xl group-hover:text-blue-600 transition-all text-gray-100">Trends and Predictions</h3>
            <div class="mt-6">
              <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
          <hr class="my-6" />
          <div class="flex flex-wrap items-center gap-3">
            <img src='https://readymadeui.com/team-3.webp' class="w-9 h-9 rounded-full" />
            <p class="text-xs text-gray-400">BY SIMON KONECKI</p>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}
