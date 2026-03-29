import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover Saldu's comprehensive range of industrial services including telecom solutions, power systems, renewable energy, automation, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        size="small"
        title="Our Services"
        subtitle="A comprehensive range of industrial and technology services tailored to meet the needs of energy, oil & gas, and infrastructure sectors worldwide."
        badge="Services"
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl border border-navy-100 hover:border-gold-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="h-52 bg-gradient-to-br from-navy-800 to-navy-600 relative flex items-center justify-center overflow-hidden">
                  <service.icon
                    size={56}
                    className="text-gold-400/80 group-hover:scale-110 transition-transform duration-500"
                    strokeWidth={1.5}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {service.subtitle}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="How We Work"
            title="Our"
            highlight="Process"
            description="We serve our clients through a comprehensive and transparent procurement process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements",
                desc: "You specify the products and services you need, including technical specifications and quantities.",
              },
              {
                step: "02",
                title: "Sourcing",
                desc: "We identify qualified manufacturers and suppliers that can deliver promptly at the right price.",
              },
              {
                step: "03",
                title: "Selection",
                desc: "We assist in the selection process through industry-tested standards and performance data.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "We negotiate, coordinate logistics, and deliver the products to your complete satisfaction.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-navy-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {item.desc}
                </p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 text-navy-200">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-3">
                Why Saldu
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                Reliable, High-Quality Procurement Solutions
              </h2>
              <p className="mt-4 text-navy-500 leading-relaxed">
                Saldu offers a reliable, high-quality alternative to in-house
                procurement. We help maximize your savings, streamline your
                sourcing process, and optimize available resources on an
                international scale.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Extensive manufacturer network across NA, EU, and Asia",
                  "Rigorous quality screening and selection process",
                  "Competitive pricing through bulk purchasing power",
                  "Complete logistics and delivery coordination",
                  "Dedicated account management for each client",
                  "24/7 support for mission-critical requirements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-500 shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-navy-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-10 text-center">
              <div className="text-6xl font-bold text-gold-500 mb-2">100%</div>
              <div className="text-lg font-semibold text-white mb-1">
                Client Satisfaction
              </div>
              <div className="text-sm text-navy-400">
                Our most important business objective
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">6+</div>
                  <div className="text-xs text-navy-400 mt-1">
                    Continents Served
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">36+</div>
                  <div className="text-xs text-navy-400 mt-1">
                    Brand Partners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get <span className="text-gold-500">Started?</span>
          </h2>
          <p className="mt-4 text-navy-300">
            Tell us what you need and let our experts find the best solution for
            your business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-200"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
