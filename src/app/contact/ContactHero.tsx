'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section
      className="relative pt-36 pb-20"
      style={{ background: 'linear-gradient(135deg, #1a2a1a 0%, #2D2D2D 100%)' }}
    >
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(91,175,71,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(91,175,71,0.4) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
            Reach Out
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Contact Us
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Get in touch with our engineering team for project inquiries, quotes,
            and technical consultations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
