// import React from 'react'

// export default function Banner() {
//   return (
//     <div className='bg-amber-600 h-[400px]'>
//         <div></div>
//     </div>
//   )
// }
export default function Hero() {
  return (
    <section className="w-full bg-gray-900 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Amazing <span className="text-blue-500">Web Experiences</span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg md:text-xl max-w-lg">
            Hi, I am a web designer and develope modern websites and web apps using 
            the latest technologies like React, Next.js & Tailwind CSS.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium">
              Hire Me
            </button>

            <button className="px-6 py-3 border border-gray-500 hover:border-blue-500 hover:text-blue-400 rounded-lg text-lg font-medium">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/589052601_848405210887212_8150349523155917912_n.jpg?ccb=11-4&oh=01_Q5Aa3QFvJSmWgFEv3-orko-bB7dWRKKjt40o-2DCM69cGyQojQ&oe=6948EFB1&_nc_sid=5e03e0&_nc_cat=108"
            alt="Banner Image"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
