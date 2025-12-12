export default function Features() {
  return (
    <section className="w-full bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            What I <span className="text-blue-500">Offer</span>
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            High-quality services to bring your ideas to life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-400">
              Modern, responsive websites with clean UI and high performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-3">UI / UX Design</h3>
            <p className="text-gray-400">
              Beautiful and user-friendly designs that make people love your product.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-semibold mb-3">Next.js Apps</h3>
            <p className="text-gray-400">
              Fast, SEO-friendly, server-powered web apps with Next.js.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
