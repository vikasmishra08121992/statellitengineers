'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, Briefcase } from 'lucide-react';
import Link from 'next/link';

const milestones = [
  { year: '2001', event: 'Satellite Engineers founded in Ahmedabad, Gujarat' },
  { year: '2005', event: 'Obtained CPRI approval for electrical panel manufacturing' },
  { year: '2010', event: 'Expanded into material handling systems and coal handling plants' },
  { year: '2015', event: 'Completed 50th major industrial project' },
  { year: '2020', event: 'Expanded O&M services division for long-term client partnerships' },
  { year: '2023', event: 'Completed 100+ projects across Gujarat and India' },
];

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    desc: 'We maintain the highest standards in manufacturing and project execution, backed by CPRI approval.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    desc: 'We build long-term relationships by delivering on our promises and providing post-project support.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    desc: 'Every project is executed with meticulous attention to detail, safety, and engineering accuracy.',
  },
  {
    icon: Briefcase,
    title: 'Turnkey Excellence',
    desc: 'Single-point responsibility ensures accountability and seamless project delivery.',
  },
];

export default function AboutContent() {
  return (
    <div>
      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-[#2D2D2D] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Satellite Engineers is a leading industrial engineering company based in Ahmedabad, Gujarat, India.
                  Founded in 2001, we have built a reputation for delivering high-quality electrical systems,
                  material handling solutions, and complete turnkey industrial projects.
                </p>
                <p>
                  Our CPRI-approved manufacturing facility produces electrical panels that meet the most stringent
                  Indian standards. From MCC and PCC panels to complete turnkey electrification of industrial
                  plants, we handle projects of all scales with equal commitment to quality.
                </p>
                <p>
                  Beyond manufacturing, we provide comprehensive engineering services including erection,
                  commissioning, and long-term operation & maintenance contracts. Our O&M teams ensure
                  maximum plant uptime and operational efficiency for our clients.
                </p>
                <p>
                  We serve clients across cement plants, power stations, chemical industries, mining
                  operations, and manufacturing facilities throughout Gujarat and India.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'CPRI Approved Electrical Panel Manufacturer',
                  'Turnkey Project Execution Capability',
                  'Experienced Engineering & Technical Team',
                  '24/7 Operation & Maintenance Support',
                  'Pan-India Project Delivery',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#5BAF47] shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-[#2D2D2D] mb-6">
                Our Journey
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#5BAF47]/20"></div>
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-5 pl-10 relative"
                    >
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#5BAF47] flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {m.year.slice(2)}
                      </div>
                      <div>
                        <div className="text-[#5BAF47] text-sm font-bold mb-0.5">{m.year}</div>
                        <div className="text-gray-600">{m.event}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-[#2D2D2D] mb-3">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The principles that guide everything we do at Satellite Engineers.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#5BAF47]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#5BAF47]" />
                </div>
                <h3 className="font-bold text-[#2D2D2D] mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-extrabold text-[#2D2D2D] mb-3">Leadership</h2>
            <p className="text-gray-500 mb-8">The people driving Satellite Engineers forward.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start max-w-xl"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#5BAF47] flex items-center justify-center text-white font-extrabold text-2xl shrink-0">
              RS
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#2D2D2D]">Rajendra Sharma</h3>
              <div className="text-[#5BAF47] font-semibold text-sm mb-3">Founder &amp; Director</div>
              <p className="text-gray-600 leading-relaxed">
                With over two decades of experience in industrial engineering, Rajendra Sharma
                founded Satellite Engineers with a vision to provide high-quality, reliable engineering
                solutions to industries across Gujarat and India.
              </p>
              <div className="mt-3 text-gray-500 text-sm">
                📞 +91 94260 78294 &nbsp;|&nbsp; ✉️ sateng2001@gmail.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
