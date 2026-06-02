import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import { services } from '@/components/Services';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Satellite Engineers`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero with background image */}
      <section
        className="relative pt-36 pb-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a0d]/88 via-[#1a2a1a]/80 to-[#2D2D2D]/90" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(91,175,71,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(91,175,71,0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{service.title}</span>
          </nav>

          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} mb-6`}>
            <Icon className={`w-8 h-8 ${service.iconColor}`} />
          </div>

          <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-3">
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
            Our Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            {service.title}
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#5BAF47] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#4a9438] transition-colors"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919426078294"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: Overview + image */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
                Overview
              </div>
              <h2 className="text-3xl font-extrabold text-[#2D2D2D] mb-6">{service.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{service.longDesc}</p>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>

              {/* Photo */}
              <div className="mt-10 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Features grid */}
              <div className="mt-12">
                <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-6">
                  <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
                  Key Capabilities
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 bg-[#F5F5F5] rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#5BAF47] mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">

              {/* Industries served */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, #1a2a1a 0%, #2D2D2D 100%)' }}
              >
                <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
                  <span className="w-6 h-0.5 bg-[#5BAF47]"></span>
                  Industries Served
                </div>
                <ul className="space-y-3">
                  {service.applications.map((app) => (
                    <li key={app} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#5BAF47] shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-2">Have a requirement?</h3>
                <p className="text-gray-500 text-sm mb-5">
                  Talk to our engineering team to get a detailed quote and timeline.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919426078294"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#5BAF47] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#5BAF47]" />
                    +91 94260 78294
                  </a>
                  <a
                    href="mailto:sateng2001@gmail.com"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#5BAF47] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#5BAF47]" />
                    sateng2001@gmail.com
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#5BAF47] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#4a9438] transition-colors text-sm"
                >
                  Send Enquiry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* All services link */}
              <div className="rounded-2xl bg-[#F5F5F5] p-6">
                <h3 className="font-bold text-[#2D2D2D] text-sm mb-3">All Services</h3>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={`flex items-center gap-2 text-sm py-1 transition-colors ${
                          s.slug === slug
                            ? 'text-[#5BAF47] font-semibold'
                            : 'text-gray-500 hover:text-[#5BAF47]'
                        }`}
                      >
                        {s.slug === slug && <span className="w-1.5 h-1.5 rounded-full bg-[#5BAF47]" />}
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-2">
                <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
                Explore More
              </div>
              <h2 className="text-2xl font-extrabold text-[#2D2D2D]">Related Services</h2>
            </div>
            <Link
              href="/services"
              className="hidden sm:inline-flex items-center gap-2 text-[#5BAF47] font-semibold text-sm hover:gap-3 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#5BAF47]/30 transition-all duration-300"
              >
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className={`w-9 h-9 rounded-lg ${s.bgColor} flex items-center justify-center`}>
                      <s.icon className={`w-4 h-4 ${s.iconColor}`} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#2D2D2D] mb-1 group-hover:text-[#5BAF47] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2">{s.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#5BAF47] font-semibold text-sm"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #1a2a1a 0%, #2D2D2D 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(91,175,71,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(91,175,71,0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 text-[#5BAF47] text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
            Work With Us
            <span className="w-8 h-0.5 bg-[#5BAF47]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
            Our engineers are ready to discuss your{' '}
            <span className="text-[#5BAF47] font-semibold">{service.title.toLowerCase()}</span>{' '}
            requirements and deliver a tailored solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#5BAF47] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#4a9438] transition-colors"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
