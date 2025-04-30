'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }

  return (
    <>
      <nav className="bg-[#497BB5] h-[80px] w-full sticky top-0 z-50 flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/fusion-logo.svg" // Replace with your image path
              alt="Fusion Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          
          </Link>

          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex gap-8 text-white font-medium text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/activities">Activities</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>

         {/* CTA and Toggle Button (Always Visible) */}
         <div className="flex items-center gap-4">
            <Link href="/plan-trip">
              <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-5 rounded-full transition">
                Plan Your Trip
              </button>
            </Link>
            <button
              className="text-white text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Toggle Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="pt-24 px-6">
          <ul className="flex flex-col items-center space-y-6 text-black font-semibold text-xl">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/destinations" onClick={toggleMenu}>Destinations</Link></li>
            <li><Link href="/activities" onClick={toggleMenu}>Activities</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li>
              <Link href="/plan-trip">
                <button onClick={toggleMenu} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full transition">
                  Plan Your Trip
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
