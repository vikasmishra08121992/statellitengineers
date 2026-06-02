'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const badges = [
  'CPRI Approved',
  '20+ Years Experience',
  'Turnkey Solutions',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a2a1a 0%, #2D2D2D 50%, #1a1a2a 100%)',
          }}
        />
        {/* Industrial grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(91,175,71,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91,175,71,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(91,175,71,0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Animated shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-5 blur-3xl bg-[#5BAF47]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-5 blur-3xl bg-[#5BAF47]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#5BAF47]/20 border border-[#5BAF47]/40 text-[#5BAF47] text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-[#5BAF47] rounded-full animate-pulse"></span>
            Industrial Engineering Excellence
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Engineering{' '}
            <span className="text-[#5BAF47]">Reliable</span>{' '}
            Industrial Solutions
            <br />
            <span className="text-gray-300 text-3xl sm:text-4xl lg:text-5xl font-bold">Since 2001</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed"
          >
            Electrical, Mechanical &amp; Material Handling Engineering Solutions
            for Industrial Excellence — from panel manufacturing to complete turnkey projects.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#5BAF47]" />
                {badge}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#5BAF47] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#4a9438] transition-all duration-200 shadow-lg shadow-green-900/30 text-base"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919426078294"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 text-base"
            >
              <Phone className="w-5 h-5 text-[#5BAF47]" />
              Call Us Now
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '100+', label: 'Projects Completed' },
            { value: '50+', label: 'Industrial Clients' },
            { value: '24/7', label: 'O&M Support' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
            >
              <div className="text-3xl font-extrabold text-[#5BAF47] mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );
}
