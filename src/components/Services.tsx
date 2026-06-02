'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export { services };

interface ServicesProps {
  preview?: boolean;
}

export default function Services({ preview = false }: ServicesProps) {
  const displayServices = preview ? services.slice(0, 6) : services;

  return (
    <section id="services" className={`section-padding ${preview ? 'bg-white' : 'bg-[#F5F5F5]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
            What We Do
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] mb-4">
            Our Engineering Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From electrical panel manufacturing to complete turnkey projects — we deliver
            end-to-end industrial engineering solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#5BAF47]/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="font-bold text-[#2D2D2D] text-lg mb-2">{service.title}</h3>
              <p className="text-[#5BAF47] text-xs font-semibold mb-3">{service.shortDesc}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{service.desc}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5BAF47] hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#5BAF47] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#4a9438] transition-colors"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
