'use client';

import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Target } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: '20+ Years Experience',
    desc: 'Proven track record in industrial engineering since 2001 with CPRI approved manufacturing.',
  },
  {
    icon: Briefcase,
    title: 'Turnkey Solutions',
    desc: 'Complete project execution from design and engineering to installation, commissioning, and handover.',
  },
  {
    icon: Users,
    title: 'Skilled Engineering Team',
    desc: 'Experienced engineers and technicians with deep domain expertise across industries.',
  },
  {
    icon: Target,
    title: 'Customer-Focused',
    desc: 'Committed to delivering projects on time, within budget, and to the highest quality standards.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
              <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
              About Satellite Engineers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] mb-6 leading-tight">
              Trusted Industrial Engineering Partner
              <span className="text-[#5BAF47]"> Since 2001</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Satellite Engineers is a trusted engineering company specializing in electrical systems,
              material handling solutions, industrial fabrication, and turnkey project execution.
              We help industries improve operational efficiency through reliable engineering solutions
              and maintenance services.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Based in Ahmedabad, Gujarat, we serve cement plants, power plants, chemical industries,
              mining operations, and manufacturing units across India. Our CPRI-approved electrical
              panel manufacturing ensures the highest safety and quality standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center min-w-[100px]">
                <div className="text-2xl font-extrabold text-[#5BAF47]">2001</div>
                <div className="text-xs text-gray-500 mt-1">Established</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center min-w-[100px]">
                <div className="text-2xl font-extrabold text-[#5BAF47]">100+</div>
                <div className="text-xs text-gray-500 mt-1">Projects Done</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center min-w-[100px]">
                <div className="text-2xl font-extrabold text-[#5BAF47]">CPRI</div>
                <div className="text-xs text-gray-500 mt-1">Approved</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center min-w-[100px]">
                <div className="text-2xl font-extrabold text-[#5BAF47]">PAN</div>
                <div className="text-xs text-gray-500 mt-1">India Presence</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#5BAF47]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5BAF47]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#5BAF47]" />
                </div>
                <h3 className="font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
