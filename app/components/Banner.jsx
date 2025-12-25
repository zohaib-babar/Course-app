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
            Hi, I design and develop modern websites and web apps using 
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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
            alt="Banner Image"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
