import Link from 'next/link';
import { Phone, Mail, MapPin, Printer } from 'lucide-react';
import { services } from '@/data/services';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl text-white"
                style={{ background: 'linear-gradient(135deg, #5BAF47, #3d8a2e)' }}>
                SE
              </div>
              <div>
                <span className="font-bold text-lg leading-none block text-white">SATELLITE</span>
                <span className="text-[#5BAF47] text-xs font-semibold tracking-widest">ENGINEERS</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Trusted industrial engineering company specializing in electrical systems,
              material handling solutions, and turnkey project execution since 2001.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-[#5BAF47] text-white text-xs font-semibold px-3 py-1 rounded-full">
                CPRI Approved
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#5BAF47] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#5BAF47] rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-[#5BAF47] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#5BAF47] rounded-full"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#5BAF47] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  93/1, Mahalaxmi Industrial Estate, GIDC Vatva Road, Nr. Cadila Crossing,
                  Opp. Navi Vasahat, Jasodanagar, Ahmedabad, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#5BAF47] shrink-0" />
                <a href="tel:+919426078294" className="text-gray-400 hover:text-[#5BAF47] text-sm transition-colors">
                  +91 94260 78294
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-[#5BAF47] shrink-0" />
                <span className="text-gray-400 text-sm">+91-79-25832360</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#5BAF47] shrink-0" />
                <a href="mailto:sateng2001@gmail.com" className="text-gray-400 hover:text-[#5BAF47] text-sm transition-colors">
                  sateng2001@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Satellite Engineers. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
