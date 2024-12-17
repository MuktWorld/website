import React, { useState } from 'react';
import { Menu, X, Film, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <Film className="h-8 w-8 text-secondary" /> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="font-primary text-white hover:text-secondary  transition-colors px-3 py-2">Home</a>
                <a href="#services" className="font-primary text-white hover:text-secondary  transition-colors px-3 py-2">Services</a>
                <a href="#portfolio" className="font-primary text-white hover:text-secondary  transition-colors px-3 py-2">Portfolio</a>
                <a href="#testimonials" className="font-primary text-white hover:text-secondary  transition-colors px-3 py-2">Testimonials</a>
                <a href="#contact" className="font-primary text-white hover:text-secondary  transition-colors px-3 py-2">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/mukt.world" target="_blank" rel="noopener noreferrer" 
               className="hidden md:flex items-center gap-2 text-white hover:text-secondary  transition-colors">
              <Instagram className="h-5 w-5" />
              <span className='font-primary'>Follow Us</span>
            </a>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-secondary  transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
          <a href="#home" className="block text-white hover:text-secondary  px-3 py-2">Home</a>
          <a href="#services" className="block text-white hover:text-secondary  px-3 py-2">Services</a>
          <a href="#portfolio" className="block text-white hover:text-secondary  px-3 py-2">Portfolio</a>
          <a href="#testimonials" className="block text-white hover:text-secondary  px-3 py-2">Testimonials</a>
          <a href="#contact" className="block text-white hover:text-secondary  px-3 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
}