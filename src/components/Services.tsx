'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap, Settings, Wrench, BarChart3, Factory, Wind,
  ArrowRight, Cpu, Layers
} from 'lucide-react';

export const services = [
  {
    icon: Zap,
    title: 'Electrical Panels',
    shortDesc: 'Manufacturing of Electrical Panels (CPRI Approved)',
    desc: 'We manufacture high-quality, CPRI-approved electrical control panels including MCC, PCC, VCB, ACB panels for industrial applications. All panels meet IS standards and are thoroughly tested before delivery.',
    color: 'from-yellow-400/20 to-yellow-600/10',
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Layers,
    title: 'Sheet Metal Fabrication',
    shortDesc: 'Custom industrial fabrication and enclosure manufacturing',
    desc: 'Precision sheet metal fabrication for industrial enclosures, cable trays, junction boxes, and custom structural components. Our fabrication unit is equipped with modern CNC and laser cutting machinery.',
    color: 'from-blue-400/20 to-blue-600/10',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Cpu,
    title: 'Turnkey Electrical Projects',
    shortDesc: 'End-to-end electrical project execution',
    desc: 'Complete turnkey electrical project execution — from design, engineering, procurement, installation to commissioning. We handle HT/LT systems, transformers, switchgear, and complete plant electrification.',
    color: 'from-green-400/20 to-green-600/10',
    iconColor: 'text-[#5BAF47]',
    bgColor: 'bg-green-50',
  },
  {
    icon: Settings,
    title: 'Material Handling Equipment',
    shortDesc: 'Design and implementation of mechanical material handling systems',
    desc: 'Design, manufacture, erection, and commissioning of complete material handling equipment including conveyors, stackers, reclaimers, bucket elevators, and screw conveyors for bulk material handling.',
    color: 'from-orange-400/20 to-orange-600/10',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Wrench,
    title: 'O&M Services',
    shortDesc: 'Operation and Maintenance for industrial plants',
    desc: 'Comprehensive Operation & Maintenance services for material handling systems and electrical installations. We provide preventive maintenance, breakdown support, and annual maintenance contracts.',
    color: 'from-purple-400/20 to-purple-600/10',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Factory,
    title: 'Coal Handling Plants',
    shortDesc: 'Complete coal handling plant engineering and installation',
    desc: 'Engineering, procurement, construction, and maintenance of coal handling plants for power stations, cement plants, and other industries. Includes crushing, screening, conveying, and stacking systems.',
    color: 'from-gray-400/20 to-gray-600/10',
    iconColor: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
  {
    icon: Wind,
    title: 'Dust Control Systems',
    shortDesc: 'Industrial dust suppression and pollution control solutions',
    desc: 'Design and installation of industrial dust suppression and collection systems for conveyor transfer points, crusher houses, and screening stations to maintain environmental compliance.',
    color: 'from-teal-400/20 to-teal-600/10',
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    icon: BarChart3,
    title: 'Conveyor Belt Services',
    shortDesc: 'Hot & cold vulcanizing, pulley lagging and maintenance',
    desc: 'Complete conveyor belt services including hot and cold vulcanizing joints, pulley lagging (plain/diamond/ceramic), belt replacement, and ongoing conveyor maintenance contracts.',
    color: 'from-red-400/20 to-red-600/10',
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
  },
];

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
                href="/services"
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
