'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, CheckCircle, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'CPRI Approved Manufacturing',
    desc: 'Our electrical panels are manufactured as per CPRI standards, ensuring the highest safety and quality.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'We have a strong track record of delivering projects on schedule without compromising on quality.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    desc: 'Rigorous quality checks at every stage of manufacturing and project execution.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Skilled engineers and technicians with 20+ years of hands-on industrial experience.',
  },
  {
    icon: CheckCircle,
    title: 'Turnkey Capability',
    desc: 'Single-point responsibility for complete project delivery — from design to commissioning.',
  },
  {
    icon: Headphones,
    title: '24/7 O&M Support',
    desc: 'Round-the-clock operation and maintenance support to minimize downtime and maximize productivity.',
  },
];

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Trusted Clients' },
  { value: '8', label: 'Core Services' },
];

export default function WhyUs() {
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
            Why Choose Us
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] mb-4">
            The Satellite Engineers Advantage
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We combine decades of experience with a commitment to quality and innovation
            to deliver engineering solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#5BAF47] rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-green-100 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#5BAF47]/30 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5BAF47]/10 flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-[#5BAF47]" />
              </div>
              <div>
                <h3 className="font-bold text-[#2D2D2D] mb-1.5">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
