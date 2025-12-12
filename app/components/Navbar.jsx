// export default function Navbar() {
//   return (
//     <nav className="flex bg-amber-600 justify-between items-center p-4">
//       <div className="text-2xl font-bold">Zohaib</div>

//       <ul className=" flex gap-6">
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#" className="hover:underline-blue-900">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

//         {/* Logo */}
//         <h1 className="text-2xl font-bold">MyBrand</h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg">
//           <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
//           <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
//           <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
//           <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
//         </ul>

//         {/* Hamburger Menu */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <ul className="md:hidden bg-gray-800 px-6 pb-4 space-y-4 text-lg">
//           <li><Link href="/" className="block hover:text-blue-400">Home</Link></li>
//           <li><Link href="/projects" className="block hover:text-blue-400">Projects</Link></li>
//           <li><Link href="/about" className="block hover:text-blue-400">About</Link></li>
//           <li><Link href="/contact" className="block hover:text-blue-400">Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">MyBrand</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (PUSHES BANNER DOWN) */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden 
        ${open ? "max-h-60" : "max-h-0"}`}>
        
        <ul className="bg-gray-800 px-6 py-4 space-y-4 text-lg">
          <li><Link href="/" className="block hover:text-blue-400">Home</Link></li>
          <li><Link href="/projects" className="block hover:text-blue-400">Projects</Link></li>
          <li><Link href="/about" className="block hover:text-blue-400">About</Link></li>
          <li><Link href="/contact" className="block hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
