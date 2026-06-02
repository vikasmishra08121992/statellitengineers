'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Printer } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 94260 78294'],
    href: 'tel:+919426078294',
  },
  {
    icon: Printer,
    title: 'Telefax',
    lines: ['+91-79-25832360'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['sateng2001@gmail.com'],
    href: 'mailto:sateng2001@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: [
      '93/1, Mahalaxmi Industrial Estate,',
      'GIDC Vatva Road, Nr. Cadila Crossing,',
      'Opp. Navi Vasahat, Jasodanagar,',
      'Ahmedabad, Gujarat, India',
    ],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon - Sat: 9:00 AM – 6:00 PM', 'Emergency: 24/7 Support'],
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
            Get In Touch
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a project in mind? Get in touch with our engineering team for a free consultation
            and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#5BAF47]/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-[#5BAF47]" />
                </div>
                <div>
                  <div className="font-bold text-[#2D2D2D] text-sm mb-1">{info.title}</div>
                  {info.href ? (
                    <a href={info.href} className="text-gray-500 text-sm hover:text-[#5BAF47] transition-colors">
                      {info.lines[0]}
                    </a>
                  ) : (
                    info.lines.map((line) => (
                      <div key={line} className="text-gray-500 text-sm">{line}</div>
                    ))
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#5BAF47] mx-auto mb-2" />
                <p className="text-gray-600 text-sm font-medium">Jasodanagar, Ahmedabad</p>
                <a
                  href="https://maps.google.com/?q=GIDC+Vatva+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5BAF47] text-xs font-semibold mt-1 block hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Send Us an Inquiry</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
