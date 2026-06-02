'use client';

import { motion } from 'framer-motion';
import { Factory, Zap, FlaskConical, Package, Mountain, Warehouse, HardHat, Building2 } from 'lucide-react';

const industries = [
  { icon: Factory, label: 'Cement Plants' },
  { icon: Zap, label: 'Power Plants' },
  { icon: FlaskConical, label: 'Chemical Industries' },
  { icon: Package, label: 'Manufacturing Units' },
  { icon: Mountain, label: 'Mining Operations' },
  { icon: Warehouse, label: 'Warehouses' },
  { icon: HardHat, label: 'Steel Industries' },
  { icon: Building2, label: 'Infrastructure Projects' },
];

export default function Industries() {
  return (
    <section className="section-padding bg-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
            Industries We Serve
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Serving Diverse Industrial Sectors
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our expertise spans across multiple industries, delivering specialized engineering
            solutions tailored to each sector&apos;s unique requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-[#5BAF47]/20 hover:border-[#5BAF47]/40 transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-[#5BAF47]/10 group-hover:bg-[#5BAF47]/30 flex items-center justify-center mx-auto mb-4 transition-colors">
                <industry.icon className="w-7 h-7 text-[#5BAF47]" />
              </div>
              <span className="text-white text-sm font-medium">{industry.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
