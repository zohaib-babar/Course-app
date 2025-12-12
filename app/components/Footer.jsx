
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyBrand</h2>
          <p className="text-gray-400">
            Building modern and clean UI web experiences.  
            Let's create something amazing!
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Web Development</li>
            <li className="hover:text-blue-400 cursor-pointer">UI/UX Design</li>
            <li className="hover:text-blue-400 cursor-pointer">E-Commerce</li>
            <li className="hover:text-blue-400 cursor-pointer">SEO Optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Get weekly updates on new projects and tutorials.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MyBrand — All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
