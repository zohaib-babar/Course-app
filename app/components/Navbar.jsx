"use client";

import { useState } from "react";

import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <h1 className="text-2xl font-bold"><span className="text-blue-500">Plutus Software</span></h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link href="/Team" className="hover:text-blue-400">Team</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-gray-800 px-6 pb-4 space-y-4 text-lg">
          <li><Link href="/" className="block hover:text-blue-400">Home</Link></li>
          <li><Link href="/projects" className="block hover:text-blue-400">Projects</Link></li>
          <li><Link href="/about" className="block hover:text-blue-400">Team</Link></li>
          <li><Link href="/contact" className="block hover:text-blue-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
