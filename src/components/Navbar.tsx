'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl text-white"
              style={{ background: 'linear-gradient(135deg, #5BAF47, #3d8a2e)' }}>
              SE
            </div>
            <div>
              <span className={`font-bold text-lg leading-none block transition-colors ${scrolled ? 'text-[#2D2D2D]' : 'text-white'}`}>
                SATELLITE
              </span>
              <span className="text-[#5BAF47] text-xs font-semibold tracking-widest">ENGINEERS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#5BAF47] ${
                  scrolled ? 'text-[#2D2D2D]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919426078294"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-[#2D2D2D]' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4 text-[#5BAF47]" />
              +91 94260 78294
            </a>
            <Link
              href="/contact"
              className="bg-[#5BAF47] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#4a9438] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-[#2D2D2D]' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-[#2D2D2D]' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2.5 px-3 text-[#2D2D2D] font-medium hover:text-[#5BAF47] hover:bg-green-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block bg-[#5BAF47] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#4a9438] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
