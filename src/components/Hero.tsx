'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80',
    badge: 'Industrial Engineering Excellence',
    headline: ['Engineering ', 'Reliable', ' Industrial Solutions'],
    sub: 'Since 2001',
    desc: 'Electrical, Mechanical & Material Handling Engineering Solutions for Industrial Excellence — from panel manufacturing to complete turnkey projects.',
    badges: ['CPRI Approved', '20+ Years Experience', 'Turnkey Solutions'],
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    badge: 'CPRI Approved Manufacturer',
    headline: ['CPRI Approved ', 'Electrical Panel', ' Manufacturer'],
    sub: 'MCC · PCC · VCB · ACB',
    desc: 'High-quality IS-standard electrical control panels manufactured and tested at our Ahmedabad facility — trusted by 50+ industrial clients across India.',
    badges: ['IS Standard', 'Factory Tested', 'Custom Panels'],
  },
  {
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80',
    badge: 'End-to-End Execution',
    headline: ['Complete ', 'Turnkey', ' Electrical Projects'],
    sub: 'Design · Supply · Install · Commission',
    desc: 'From HT/LT systems and transformers to full plant electrification — we take your project from drawing board to commissioning.',
    badges: ['HT / LT Systems', 'Transformers', 'Commissioning'],
  },
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80',
    badge: 'Material & Coal Handling',
    headline: ['Bulk Material ', 'Handling', ' & Coal Plants'],
    sub: 'Conveyors · Stackers · CHP',
    desc: 'Design, manufacture, erection and O&M of complete material handling and coal handling plant systems for power and cement industries.',
    badges: ['Belt Conveyors', 'Coal Handling', 'Dust Control'],
  },
];

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Industrial Clients' },
  { value: '24/7', label: 'O&M Support' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Overlay — lighter than before, gradient left-to-right */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            'linear-gradient(to right, rgba(15,30,15,0.82) 0%, rgba(20,35,20,0.65) 55%, rgba(0,0,0,0.30) 100%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-1 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(91,175,71,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(91,175,71,0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-8">
        <div className="max-w-3xl w-full">

          {/* Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 bg-[#5BAF47]/20 border border-[#5BAF47]/40 text-[#5BAF47] text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#5BAF47] rounded-full animate-pulse" />
              {slide.badge}
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${current}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3"
            >
              {slide.headline[0]}
              <span className="text-[#5BAF47]">{slide.headline[1]}</span>
              {slide.headline[2]}
            </motion.h1>
          </AnimatePresence>

          {/* Sub-line */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-[#5BAF47] font-semibold text-lg tracking-wide mb-4"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-gray-200 text-lg mb-6 max-w-2xl leading-relaxed"
            >
              {slide.desc}
            </motion.p>
          </AnimatePresence>

          {/* Badges */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badges-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-9"
            >
              {slide.badges.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#5BAF47]" />
                  {b}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#5BAF47] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#4a9438] transition-all duration-200 shadow-lg shadow-green-900/30 text-base"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919426078294"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 text-base"
            >
              <Phone className="w-5 h-5 text-[#5BAF47]" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider controls row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 flex items-center gap-6">
        {/* Prev / Next */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#5BAF47] hover:border-[#5BAF47] transition-all shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#5BAF47] w-8' : 'bg-white/30 w-4 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`progress-${current}`}
              className="h-full bg-[#5BAF47]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#5BAF47] hover:border-[#5BAF47] transition-all shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-5 text-center ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}
              >
                <div className="text-2xl font-extrabold text-[#5BAF47]">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
