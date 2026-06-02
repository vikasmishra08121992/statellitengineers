'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const slides = [
  {
    image: '/images/hero/hero-1.jpg',
    badge: 'Industrial Engineering Excellence',
    headline: ['Engineering ', 'Reliable', ' Industrial Solutions'],
    sub: 'Since 2001 · Ahmedabad, Gujarat',
    desc: 'Electrical, Mechanical & Material Handling Engineering Solutions for Industrial Excellence — from panel manufacturing to complete turnkey projects.',
    badges: ['CPRI Approved', '20+ Years Experience', 'Turnkey Solutions'],
  },
  {
    image: '/images/hero/hero-2.jpg',
    badge: 'CPRI Approved Manufacturer',
    headline: ['CPRI Approved ', 'Electrical Panel', ' Manufacturer'],
    sub: 'MCC · PCC · VCB · ACB',
    desc: 'High-quality IS-standard electrical control panels manufactured and tested at our Ahmedabad facility — trusted by 50+ industrial clients across India.',
    badges: ['IS Standard', 'Factory Tested', 'Custom Panels'],
  },
  {
    image: '/images/hero/hero-3.jpg',
    badge: 'End-to-End Execution',
    headline: ['Complete ', 'Turnkey', ' Electrical Projects'],
    sub: 'Design · Supply · Install · Commission',
    desc: 'From HT/LT systems and transformers to full plant electrification — we take your project from drawing board to commissioning.',
    badges: ['HT / LT Systems', 'Transformers', 'Commissioning'],
  },
  {
    image: '/images/hero/hero-4.jpg',
    badge: 'Safety First · India\'s Trusted Partner',
    headline: ['Industrial ', 'Safety &', ' O&M Services'],
    sub: 'Operation · Maintenance · Support',
    desc: 'Round-the-clock O&M support with certified technicians — preventive maintenance, breakdown response, and annual contracts across Indian industries.',
    badges: ['24/7 Support', 'Certified Technicians', 'AMC Contracts'],
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
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Light overlay — stronger on left for text, fades right so image shows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.10) 100%)',
        }}
      />
      {/* Bottom fade so controls stay readable */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 35%)',
        }}
      />
      {/* Top fade for navbar */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, transparent 20%)',
        }}
      />

      {/* Slide number — decorative */}
      <div className="absolute top-32 right-10 z-10 hidden lg:flex flex-col items-center gap-3">
        <span
          className="text-[120px] font-black leading-none select-none"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(91,175,71,0.25)',
          }}
        >
          0{current + 1}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-6">
        <div className="max-w-2xl w-full">

          {/* Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#5BAF47]/25 border border-[#5BAF47]/50 text-[#5BAF47] text-sm font-semibold px-4 py-2 rounded-full mb-7"
            >
              <span className="w-2 h-2 bg-[#5BAF47] rounded-full animate-pulse" />
              {slide.badge}
            </motion.div>
          </AnimatePresence>

          {/* Accent bar + headline */}
          <div className="flex items-start gap-5 mb-4">
            <div className="w-1 self-stretch rounded-full bg-[#5BAF47] shrink-0 mt-1" />
            <AnimatePresence mode="wait">
              <motion.h1
                key={`h1-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-tight"
                style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
              >
                {slide.headline[0]}
                <span className="text-[#5BAF47]">{slide.headline[1]}</span>
                {slide.headline[2]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Sub-line */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#5BAF47] font-bold text-base tracking-widest uppercase ml-6 mb-5"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-gray-100 text-lg mb-6 max-w-xl leading-relaxed ml-6"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
            >
              {slide.desc}
            </motion.p>
          </AnimatePresence>

          {/* Feature badges */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badges-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-9 ml-6"
            >
              {slide.badges.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle className="w-4 h-4 text-[#5BAF47] shrink-0" />
                  {b}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-4 ml-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#5BAF47] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#4a9438] transition-all duration-200 shadow-lg shadow-black/30 text-base"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919426078294"
              className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/25 transition-all duration-200 text-base"
            >
              <Phone className="w-5 h-5 text-[#5BAF47]" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Controls row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6 flex items-center gap-5">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-white hover:bg-[#5BAF47] hover:border-[#5BAF47] transition-all shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === current ? 'bg-[#5BAF47] w-10' : 'bg-white/35 w-4 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex-1 h-px bg-white/15 rounded-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`progress-${current}`}
              className="h-full bg-[#5BAF47]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5.5, ease: 'linear' }}
            />
          </AnimatePresence>
        </div>

        {/* Slide counter */}
        <span className="text-white/50 text-sm font-mono shrink-0 hidden sm:block">
          <span className="text-white font-bold">0{current + 1}</span> / 0{slides.length}
        </span>

        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-white hover:bg-[#5BAF47] hover:border-[#5BAF47] transition-all shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/25 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-5 text-center ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#5BAF47]">{stat.value}</div>
                <div className="text-gray-300 text-xs mt-0.5 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
