'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Suresh Patel',
    title: 'Plant Manager',
    company: 'Gujarat Cement Ltd.',
    text: 'Satellite Engineers delivered our coal handling plant on time and within budget. Their team demonstrated exceptional technical expertise and professionalism throughout the project. The quality of electrical panels supplied is outstanding.',
    rating: 5,
  },
  {
    name: 'Ramesh Kumar',
    title: 'Electrical Engineer',
    company: 'National Power Corporation',
    text: 'We have been working with Satellite Engineers for our O&M requirements for the past 5 years. Their response time during breakdowns is excellent and their preventive maintenance approach has significantly reduced our downtime.',
    rating: 5,
  },
  {
    name: 'Anil Joshi',
    title: 'Projects Director',
    company: 'Ahmedabad Chemical Works',
    text: 'The turnkey electrical project executed by Satellite Engineers for our new plant was flawless. From design to commissioning, they managed everything professionally. We highly recommend them for large industrial projects.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
            Client Testimonials
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trusted by leading industrial companies across Gujarat and India for over two decades.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F5F5F5] rounded-2xl p-7 relative"
            >
              <Quote className="w-8 h-8 text-[#5BAF47]/30 absolute top-5 right-5" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5BAF47] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#2D2D2D] text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.title}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
