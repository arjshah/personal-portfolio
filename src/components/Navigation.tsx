'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'About', to: 'hero' },
    { name: 'Experience', to: 'experience' },
    { name: 'Thought Leadership', to: 'thought-leadership' },
    { name: 'Latest Thoughts', to: 'twitter' },
    { name: 'Advisory', to: 'advisory' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo or Name - Now clickable */}
          <button
            onClick={scrollToTop}
            className="text-stone-900 font-light hover:text-stone-600 transition-colors"
          >
            <span className="text-lg">Arjun Shah</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-600 hover:text-stone-900 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-stone-100">
            <div className="flex flex-col space-y-4 bg-white/95 backdrop-blur-md px-4 py-6 absolute left-0 right-0 top-full shadow-lg">
              {menuItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => scrollToSection(item.to)}
                  className="text-sm text-stone-600 hover:text-stone-900 transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 