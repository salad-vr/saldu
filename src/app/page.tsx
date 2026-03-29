import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { divisions, services, partners, companyInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        badge="Canadian Startup"
        title="Bridging Western Industry"
        highlight="with Eastern Markets"
        subtitle="Saldu connects North American and European industrial suppliers with the Middle East and emerging markets through innovative procurement and trading solutions."
        primaryCTA={{ label: "Our Divisions", href: "/divisions" }}
        secondaryCTA={{ label: "Explore Services", href: "/services" }}
      />

      {/* Stats Bar */}
      <section className="relative z-10 -mt-8 lg:-mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-navy-800 rounded-2xl p-6 lg:p-8 border border-navy-700">
            {[
              { icon: Globe, value: "7+", label: "Global Regions" },
              { icon: Shield, value: "36+", label: "Brand Partners" },
              { icon: Clock, value: "24/7", label: "Availability" },
              { icon: Users, value: "9+", label: "Industries Served" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon size={20} className="mx-auto text-gold-500 mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="Specialized"
            highlight="Divisions"
            description="Our operations span multiple sectors, each with dedicated expertise and tailored solutions for our global client base."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, i) => (
              <div
                key={i}
                className="group relative bg-navy-800 rounded-xl border border-navy-700 hover:border-gold-500/40 p-8 transition-all duration-300 hover:bg-navy-800/80"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-700 group-hover:bg-gold-500/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <division.icon
                    size={24}
                    className="text-navy-300 group-hover:text-gold-500 transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {division.title}
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed">
                  {division.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/divisions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              View All Divisions
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="Industrial"
            highlight="Solutions"
            description="A comprehensive range of services tailored to the needs of energy, industrial, and technology sectors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, i) => (
              <div
                key={i}
                className="bg-navy-900 rounded-xl overflow-hidden border border-navy-700 hover:border-navy-600 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-800 relative flex items-center justify-center">
                  <service.icon
                    size={48}
                    className="text-gold-400 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-700 hover:bg-navy-600 text-white font-semibold rounded-lg transition-all duration-200 border border-navy-600"
            >
              View All Services
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-3">
                About Saldu
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Your Canadian Partner for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  Cross-Border Trade
                </span>
              </h2>
              <p className="mt-6 text-navy-300 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="mt-4 text-navy-300 leading-relaxed">
                {companyInfo.mission}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "Quality Assured", desc: "Rigorous standards" },
                  { label: "Cost Effective", desc: "Competitive pricing" },
                  { label: "Toronto Based", desc: "Canadian headquarters" },
                  { label: "Expert Team", desc: "Industry specialists" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-sm font-bold text-white">
                      {item.label}
                    </div>
                    <div className="text-xs text-navy-400 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl flex items-center justify-center border border-navy-600">
                <div className="text-center p-8">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 mx-auto mb-6"
                  >
                    <rect width="48" height="48" rx="10" fill="url(#gold-grad-about)" />
                    <path d="M14 18.5C14 15.5 16.5 13 20 13C23.5 13 25.5 15 25.5 17.5C25.5 22 14 20.5 14 26.5C14 29.5 16.5 31.5 20 31.5" stroke="#0A1628" strokeWidth="3.2" strokeLinecap="round" />
                    <path d="M34 11V31.5" stroke="#0A1628" strokeWidth="3.2" strokeLinecap="round" />
                    <path d="M34 26C34 29 31.5 31.5 28.5 31.5C25.5 31.5 23 29 23 26C23 23 25.5 20.5 28.5 20.5C31.5 20.5 34 23 34 26Z" stroke="#0A1628" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 31.5C22 35 26 36 29 35" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                    <defs>
                      <linearGradient id="gold-grad-about" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D4A843" />
                        <stop offset="1" stopColor="#B8912A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Saldu Global Solutions
                  </h3>
                  <p className="text-navy-400 text-sm">
                    Toronto, Canada &mdash; connecting Western suppliers with
                    Middle Eastern markets.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-500/5 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-16 bg-navy-800 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-navy-400 uppercase tracking-wider">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {partners.slice(0, 18).map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 bg-navy-900 rounded-lg border border-navy-700 px-3 hover:border-gold-500/40 transition-all duration-200"
              >
                <span className="text-xs font-semibold text-navy-400 text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              View All Partners
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ready to Start Your{" "}
            <span className="text-gold-500">Next Project?</span>
          </h2>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            Whether you need industrial equipment, energy solutions, or
            cross-border trading support, our team is ready to deliver.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-gold-500/20"
            >
              Contact Us Today
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy-600 hover:border-navy-500 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-navy-800"
            >
              Browse Products
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
