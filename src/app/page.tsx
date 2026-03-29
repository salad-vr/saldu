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
        badge="Global Industrial Solutions"
        title="Powering Industries"
        highlight="Across the Globe"
        subtitle="Saldu delivers innovative, cost-effective procurement and trading solutions for energy, healthcare, technology, and industrial sectors worldwide."
        primaryCTA={{ label: "Our Divisions", href: "/divisions" }}
        secondaryCTA={{ label: "Explore Services", href: "/services" }}
      />

      {/* Stats Bar */}
      <section className="relative z-10 -mt-8 lg:-mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl shadow-navy-900/5 p-6 lg:p-8 border border-navy-100">
            {[
              {
                icon: Globe,
                value: "6+",
                label: "Global Regions",
              },
              {
                icon: Shield,
                value: "36+",
                label: "Brand Partners",
              },
              {
                icon: Clock,
                value: "24/7",
                label: "Availability",
              },
              {
                icon: Users,
                value: "9+",
                label: "Industries Served",
              },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon
                  size={20}
                  className="mx-auto text-gold-500 mb-2"
                />
                <div className="text-2xl lg:text-3xl font-bold text-navy-900">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-20 lg:py-28">
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
                className="group relative bg-white rounded-xl border border-navy-100 hover:border-gold-300 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-50 group-hover:bg-gold-500/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <division.icon
                    size={24}
                    className="text-navy-600 group-hover:text-gold-600 transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {division.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {division.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/divisions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              View All Divisions
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 lg:py-28 bg-navy-50/50">
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
                className="bg-white rounded-xl overflow-hidden border border-navy-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-600 relative flex items-center justify-center">
                  <service.icon
                    size={48}
                    className="text-gold-400 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg transition-all duration-200"
            >
              View All Services
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-3">
                About Saldu
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight leading-tight">
                Your Global Partner for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Industrial Excellence
                </span>
              </h2>
              <p className="mt-6 text-navy-500 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="mt-4 text-navy-500 leading-relaxed">
                {companyInfo.mission}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "Quality Assured", desc: "Rigorous standards" },
                  { label: "Cost Effective", desc: "Competitive pricing" },
                  { label: "Global Reach", desc: "6+ regions worldwide" },
                  { label: "Expert Team", desc: "Industry specialists" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-sm font-bold text-navy-900">
                      {item.label}
                    </div>
                    <div className="text-xs text-navy-500 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy-100 to-navy-50 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center font-bold text-navy-900 text-4xl mx-auto mb-6">
                    S
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    Saldu Global Solutions
                  </h3>
                  <p className="text-navy-500 text-sm">
                    Connecting industries worldwide with the equipment and
                    expertise they need.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-16 bg-navy-50/50 border-y border-navy-100">
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
                className="flex items-center justify-center h-16 bg-white rounded-lg border border-navy-100 px-3 hover:border-gold-300 hover:shadow-sm transition-all duration-200"
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
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
            Whether you need industrial equipment, energy solutions, or global
            trading support, our team is ready to deliver.
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
