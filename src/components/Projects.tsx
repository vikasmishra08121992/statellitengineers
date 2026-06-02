'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export const projects = [
  {
    id: 1,
    title: 'Coal Handling Plant Installation',
    category: 'Material Handling',
    location: 'Kutch, Gujarat',
    year: '2023',
    desc: 'Complete design, supply, erection and commissioning of coal handling plant including conveyor system, crusher, and stacker for a 300 TPH capacity plant.',
    tags: ['Conveyor System', 'Crusher', 'Stacker', 'Electrical'],
    color: 'bg-gray-800',
  },
  {
    id: 2,
    title: 'Electrical Panel Manufacturing',
    category: 'Electrical Panels',
    location: 'Vatva, Ahmedabad',
    year: '2023',
    desc: 'Supply of CPRI-approved MCC, PCC, and VCB panels for a large pharmaceutical manufacturing facility with complete wiring, testing, and commissioning.',
    tags: ['MCC Panel', 'PCC Panel', 'VCB', 'CPRI Approved'],
    color: 'bg-yellow-700',
  },
  {
    id: 3,
    title: 'Dust Control System Deployment',
    category: 'Dust Control',
    location: 'Surat, Gujarat',
    year: '2022',
    desc: 'Installation of comprehensive dust suppression system at a cement plant transfer points and crusher house to meet CPCB environmental compliance standards.',
    tags: ['Dust Suppression', 'CPCB Compliance', 'Cement Plant'],
    color: 'bg-teal-700',
  },
  {
    id: 4,
    title: 'Conveyor Belt Vulcanizing',
    category: 'Conveyor Services',
    location: 'Rajkot, Gujarat',
    year: '2022',
    desc: 'Hot and cold vulcanizing joint services for 1200mm wide conveyor belts at a mining operation, including ceramic pulley lagging for head and drive pulleys.',
    tags: ['Hot Vulcanizing', 'Pulley Lagging', 'Mining'],
    color: 'bg-red-700',
  },
  {
    id: 5,
    title: 'Turnkey Electrical Project',
    category: 'Turnkey Projects',
    location: 'Bharuch, Gujarat',
    year: '2023',
    desc: 'Complete turnkey electrical project for a chemical plant including HT line, transformers, switchgear, MCC panels, lighting, and earthing systems.',
    tags: ['HT Line', 'Transformer', 'Switchgear', 'Chemical Plant'],
    color: 'bg-blue-700',
  },
  {
    id: 6,
    title: 'O&M Contract — Power Plant',
    category: 'O&M Services',
    location: 'Gandhinagar, Gujarat',
    year: '2023',
    desc: 'Annual operation and maintenance contract for complete coal handling and material handling systems of a 100 MW thermal power plant.',
    tags: ['Power Plant', 'Annual Contract', 'Preventive Maintenance'],
    color: 'bg-green-700',
  },
];

interface ProjectsProps {
  preview?: boolean;
}

export default function Projects({ preview = false }: ProjectsProps) {
  const displayProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <section className="section-padding bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
            Our Work
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] mb-4">
            Project Showcase
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our portfolio of successfully delivered industrial engineering projects
            across Gujarat and India.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Visual placeholder */}
              <div className={`${project.color} h-48 relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="text-center z-10">
                  <div className="text-white font-bold text-lg px-4">{project.category}</div>
                  <div className="text-white/70 text-sm mt-1">{project.year}</div>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-2">{project.title}</h3>

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-[#F5F5F5] text-[#2D2D2D] px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#2D2D2D] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1a1a1a] transition-colors"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
