import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import { divisions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "Explore Saldu's specialized divisions spanning Energy, Health, Global Trade, IT Security, Payment Solutions, and Special Projects.",
};

export default function DivisionsPage() {
  return (
    <>
      <Hero
        size="small"
        title="Our Specialized Divisions"
        subtitle="Our operations span multiple sectors, each with dedicated expertise and tailored solutions designed to meet the unique needs of our global client base."
        badge="Divisions"
      />

      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {divisions.map((division, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5">
                    <division.icon size={28} className="text-gold-500" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {division.title}
                  </h2>
                  <p className="mt-4 text-navy-300 leading-relaxed text-lg">
                    {division.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Inquire About This Division
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl flex items-center justify-center relative overflow-hidden border border-navy-600">
                    <division.icon
                      size={80}
                      className="text-navy-600"
                      strokeWidth={1}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 border-t border-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Need a Solution That Fits{" "}
            <span className="text-gold-500">Your Industry?</span>
          </h2>
          <p className="mt-4 text-navy-300">
            Contact our team to discuss your specific requirements and discover
            how Saldu can help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-200"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
