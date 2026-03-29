import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Globe,
  Handshake,
  Award,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Saldu Global Solutions - a Canadian startup bridging Western industrial innovation with Middle Eastern markets.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        size="small"
        title="About Saldu"
        subtitle="A Canadian startup dedicated to bridging Western industrial innovation with Middle Eastern and emerging market demand."
        badge="Our Story"
      />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-gold-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-navy-300 leading-relaxed text-lg">
                {companyInfo.mission}
              </p>
            </div>

            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-gold-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Vision
              </h2>
              <p className="text-navy-300 leading-relaxed text-lg">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                centered={false}
                label="Who We Are"
                title="Canadian"
                highlight="Expertise"
                description="Saldu Global Solutions is a Toronto-based procurement and trading startup built to bridge the gap between Western industry and Eastern markets."
              />

              <div className="space-y-4 text-navy-300 leading-relaxed">
                <p>
                  We are engaged in the supply of equipment and parts across
                  every aspect of telecommunications, power generation, oil &
                  gas, petrochemical, healthcare, and industrial sectors.
                </p>
                <p>
                  With partnerships spanning renowned manufacturers and
                  suppliers across North America, Europe, and Asia, we connect
                  Middle Eastern buyers with the world&apos;s best industrial
                  equipment at competitive prices.
                </p>
                <p>
                  Our team works closely with each client on their specific
                  project requirements and equipment specifications, ensuring
                  every cross-border procurement is handled with expertise and
                  precision.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Globe,
                  title: "Global Reach",
                  desc: "Operations spanning 7+ regions",
                },
                {
                  icon: Shield,
                  title: "Quality First",
                  desc: "Rigorous supplier vetting",
                },
                {
                  icon: Handshake,
                  title: "Partnerships",
                  desc: "36+ manufacturer partners",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  desc: "Industry-leading standards",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-navy-900 rounded-xl border border-navy-700 p-6 text-center"
                >
                  <item.icon
                    size={28}
                    className="mx-auto text-gold-500 mb-3"
                  />
                  <h3 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-navy-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Principles"
            title="Core"
            highlight="Values"
            description="The principles that guide every decision we make and every partnership we build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We continuously seek cutting-edge solutions and embrace new technologies to serve our clients better.",
              },
              {
                title: "Quality",
                desc: "Every product we source and every service we provide meets the highest international quality standards.",
              },
              {
                title: "Integrity",
                desc: "We conduct business with transparency, honesty, and ethical standards that our partners can trust.",
              },
              {
                title: "Client Focus",
                desc: "Your success is our success. We tailor every solution to meet your specific requirements and expectations.",
              },
              {
                title: "Safety",
                desc: "We prioritize safe solutions that protect people, assets, and the environment across all operations.",
              },
              {
                title: "Sustainability",
                desc: "We are committed to preserving world energy resources, infrastructure, and the environment for future generations.",
              },
            ].map((value, i) => (
              <div key={i} className="border-l-2 border-gold-500 pl-6 py-2">
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-20 lg:py-28 bg-navy-800 border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-3">
            Industries
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">
            Markets We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {companyInfo.markets.map((market, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-navy-900 border border-navy-700 text-navy-200 rounded-full text-sm font-medium"
              >
                {market}
              </span>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-lg font-semibold text-white mb-6">
              Global Presence
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {companyInfo.regions.map((region, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 rounded-lg text-sm font-medium"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-200"
          >
            Partner With Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
