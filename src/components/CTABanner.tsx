'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#5BAF47] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Looking for Reliable Industrial
            <br />
            Engineering Solutions?
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Get a free consultation from our expert engineers. We&apos;ll analyze your requirements
            and provide the most efficient, cost-effective solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#5BAF47] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-base"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919426078294"
              className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/30 transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              +91 94260 78294
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
