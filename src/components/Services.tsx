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
    slug: 'electrical-panels',
    shortDesc: 'Manufacturing of Electrical Panels (CPRI Approved)',
    desc: 'We manufacture high-quality, CPRI-approved electrical control panels including MCC, PCC, VCB, ACB panels for industrial applications. All panels meet IS standards and are thoroughly tested before delivery.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    color: 'from-yellow-400/20 to-yellow-600/10',
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    longDesc: 'Satellite Engineers is a CPRI-approved manufacturer of high-quality electrical control panels for industrial applications. With over two decades of experience, we design and build panels that meet the most demanding requirements of modern industrial facilities across India.',
    features: [
      'Motor Control Centres (MCC)',
      'Power Control Centres (PCC)',
      'VCB / ACB Panels',
      'Distribution & Feeder Boards',
      'Automation & PLC Panels',
      'CPRI Certified & IS Standard Compliant',
      'Factory Acceptance Testing (FAT)',
      'Custom engineering for specific loads',
    ],
    applications: [
      'Thermal Power Plants',
      'Cement & Steel Industries',
      'Chemical & Petrochemical Plants',
      'Water Treatment Facilities',
      'Textile & Pharmaceutical Plants',
      'Food Processing Units',
    ],
  },
  {
    icon: Layers,
    title: 'Sheet Metal Fabrication',
    slug: 'sheet-metal-fabrication',
    shortDesc: 'Custom industrial fabrication and enclosure manufacturing',
    desc: 'Precision sheet metal fabrication for industrial enclosures, cable trays, junction boxes, and custom structural components. Our fabrication unit is equipped with modern CNC and laser cutting machinery.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    color: 'from-blue-400/20 to-blue-600/10',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    longDesc: 'Our sheet metal fabrication unit specialises in precision manufacturing of industrial-grade enclosures and structural components. Equipped with CNC press brakes, laser cutting, and TIG/MIG welding setups, we deliver components built to exact engineering drawings.',
    features: [
      'CNC & Laser Cutting',
      'Press Brake Bending',
      'TIG / MIG Welding',
      'Industrial Enclosures & Panels',
      'Cable Trays & Ladders',
      'Junction Boxes & Marshalling Boxes',
      'Structural Steel Components',
      'Powder Coating & Surface Finishing',
    ],
    applications: [
      'Electrical Panel Enclosures',
      'Instrumentation Housings',
      'HVAC & Ductwork Components',
      'Industrial Machine Guards',
      'Power Plant Accessories',
      'OEM Fabrication Contracts',
    ],
  },
  {
    icon: Cpu,
    title: 'Turnkey Electrical Projects',
    slug: 'turnkey-electrical-projects',
    shortDesc: 'End-to-end electrical project execution',
    desc: 'Complete turnkey electrical project execution — from design, engineering, procurement, installation to commissioning. We handle HT/LT systems, transformers, switchgear, and complete plant electrification.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80',
    color: 'from-green-400/20 to-green-600/10',
    iconColor: 'text-[#5BAF47]',
    bgColor: 'bg-green-50',
    longDesc: 'From concept to commissioning, Satellite Engineers executes turnkey electrical projects that power industrial operations. Our integrated team of design engineers, project managers, and certified electricians ensures seamless delivery within budget and schedule.',
    features: [
      'HT / LT System Engineering & Installation',
      'Transformer Installation & Testing',
      'Switchgear & Busduct Systems',
      'Cabling & Earthing Networks',
      'Instrumentation & Control Wiring',
      'Plant Electrification & Illumination',
      'Electrical Commissioning & Testing',
      'As-Built Documentation & Handover',
    ],
    applications: [
      'Greenfield Industrial Plants',
      'Plant Expansion & Revamping',
      'Substation Construction',
      'Infrastructure Projects',
      'Commercial & Institutional Buildings',
      'Export-Oriented Units',
    ],
  },
  {
    icon: Settings,
    title: 'Material Handling Equipment',
    slug: 'material-handling-equipment',
    shortDesc: 'Design and implementation of mechanical material handling systems',
    desc: 'Design, manufacture, erection, and commissioning of complete material handling equipment including conveyors, stackers, reclaimers, bucket elevators, and screw conveyors for bulk material handling.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    color: 'from-orange-400/20 to-orange-600/10',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    longDesc: 'We design and execute complete material handling solutions tailored to the bulk material requirements of our clients. From single conveyors to multi-stage integrated systems, our engineering team ensures reliable, low-maintenance, and high-throughput performance.',
    features: [
      'Belt Conveyors (flat, troughed, pipe)',
      'Bucket Elevators',
      'Screw Conveyors & Feeders',
      'Stackers & Reclaimers',
      'Tripper Cars & Shuttle Conveyors',
      'Vibratory Feeders & Grizzlies',
      'Structural Steel & Support Systems',
      'Electrical & Control Integration',
    ],
    applications: [
      'Cement & Clinker Plants',
      'Thermal Power Stations',
      'Mining & Quarrying',
      'Fertiliser & Chemical Plants',
      'Steel & Sponge Iron Plants',
      'Grain & Food Storage Facilities',
    ],
  },
  {
    icon: Wrench,
    title: 'O&M Services',
    slug: 'om-services',
    shortDesc: 'Operation and Maintenance for industrial plants',
    desc: 'Comprehensive Operation & Maintenance services for material handling systems and electrical installations. We provide preventive maintenance, breakdown support, and annual maintenance contracts.',
    image: 'https://images.unsplash.com/photo-1581093804475-577d72e13716?auto=format&fit=crop&w=1400&q=80',
    color: 'from-purple-400/20 to-purple-600/10',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    longDesc: 'Reliable plant uptime depends on systematic maintenance. Our O&M team provides round-the-clock support for electrical and mechanical systems, backed by experienced technicians, proper spares inventory, and structured maintenance planning using industry-standard practices.',
    features: [
      'Annual Maintenance Contracts (AMC)',
      'Preventive Maintenance Schedules',
      'Breakdown & Emergency Response',
      'Condition Monitoring & Inspection',
      'Lubrication & Alignment Services',
      'Electrical Testing & Thermography',
      'Shutdown / Turnaround Services',
      'Maintenance Reporting & Documentation',
    ],
    applications: [
      'Coal Handling Plants',
      'Material Handling Systems',
      'Electrical Substations',
      'Conveyor Belt Systems',
      'Industrial Motor Drives',
      'Steel & Cement Plants',
    ],
  },
  {
    icon: Factory,
    title: 'Coal Handling Plants',
    slug: 'coal-handling-plants',
    shortDesc: 'Complete coal handling plant engineering and installation',
    desc: 'Engineering, procurement, construction, and maintenance of coal handling plants for power stations, cement plants, and other industries. Includes crushing, screening, conveying, and stacking systems.',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1400&q=80',
    color: 'from-gray-400/20 to-gray-600/10',
    iconColor: 'text-gray-600',
    bgColor: 'bg-gray-100',
    longDesc: 'Coal handling plants form the backbone of power generation and industrial fuel supply. Satellite Engineers has a proven track record of designing, installing, and maintaining complete CHP systems — from wagon tippler and track hoppers to crusher houses and coal stockyards.',
    features: [
      'Track Hoppers & Wagon Tipplers',
      'Crusher Houses (Ring Granulator, Rotary Breaker)',
      'Screening & Classification Systems',
      'Coal Conveying & Transfer Systems',
      'Stacker & Reclaimer Machines',
      'Dust Extraction & Suppression',
      'Bunker / Silo Filling Systems',
      'Electrical, Instrumentation & Control',
    ],
    applications: [
      'Thermal Power Stations',
      'Captive Power Plants',
      'Cement Manufacturing Plants',
      'Steel & Sponge Iron Plants',
      'Paper & Sugar Mills',
      'Industrial Boiler Fuel Supply',
    ],
  },
  {
    icon: Wind,
    title: 'Dust Control Systems',
    slug: 'dust-control-systems',
    shortDesc: 'Industrial dust suppression and pollution control solutions',
    desc: 'Design and installation of industrial dust suppression and collection systems for conveyor transfer points, crusher houses, and screening stations to maintain environmental compliance.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1400&q=80',
    color: 'from-teal-400/20 to-teal-600/10',
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    longDesc: 'With tightening environmental regulations across India, effective dust management is non-negotiable. Our dust control systems are engineered to suppress, capture, and contain airborne particulate matter at source — protecting workers, equipment, and the environment.',
    features: [
      'Dry Fog Dust Suppression Systems',
      'Water Spray / Mist Systems',
      'Bag Filter & Pulse Jet Dust Collectors',
      'Wet Scrubbers',
      'Enclosure & Skirting Systems',
      'Transfer Point & Chute Sealing',
      'Instrumentation & Automated Controls',
      'PCB / CPCB Compliance Assistance',
    ],
    applications: [
      'Conveyor Transfer Points',
      'Crusher & Screening Stations',
      'Coal Stockyards & Stockpiles',
      'Cement & Clinker Handling',
      'Mineral Processing Plants',
      'Port & Jetty Operations',
    ],
  },
  {
    icon: BarChart3,
    title: 'Conveyor Belt Services',
    slug: 'conveyor-belt-services',
    shortDesc: 'Hot & cold vulcanizing, pulley lagging and maintenance',
    desc: 'Complete conveyor belt services including hot and cold vulcanizing joints, pulley lagging (plain/diamond/ceramic), belt replacement, and ongoing conveyor maintenance contracts.',
    image: 'https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?auto=format&fit=crop&w=1400&q=80',
    color: 'from-red-400/20 to-red-600/10',
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
    longDesc: 'Conveyor belt uptime directly affects plant productivity. Our specialised belt services team delivers fast, reliable belt splicing, lagging, and maintenance that minimises production downtime. We work with all major belt manufacturers and rubber compounds.',
    features: [
      'Hot Vulcanising Belt Joints',
      'Cold Vulcanising Belt Joints',
      'Mechanical Belt Fasteners',
      'Pulley Lagging (Plain, Diamond, Ceramic)',
      'Belt Replacement & Tracking',
      'Idler & Frame Maintenance',
      'Belt Monitoring & Inspection',
      'Annual Belt Maintenance Contracts',
    ],
    applications: [
      'Coal & Ash Handling Plants',
      'Cement & Clinker Conveyors',
      'Mining & Quarry Operations',
      'Port & Material Handling',
      'Steel Plant Conveyors',
      'Food & Grain Processing',
    ],
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
