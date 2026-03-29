import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import { partners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "View Saldu's network of 36+ world-renowned manufacturer and supplier partners across power, automation, instrumentation, safety, and more.",
};

export default function PartnersPage() {
  // Group by category
  const categories = partners.reduce<Record<string, typeof partners>>(
    (acc, partner) => {
      if (!acc[partner.category]) acc[partner.category] = [];
      acc[partner.category].push(partner);
      return acc;
    },
    {}
  );

  return (
    <>
      <Hero
        size="small"
        title="Our Partners"
        subtitle="We maintain partnerships with world-renowned manufacturers and suppliers across North America, Europe, and Asia to deliver the best solutions to our clients."
        badge="Manufacturer Partners"
      />

      {/* All Partners Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-3">
              Our Network
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              {partners.length}+ Brand Partners
            </h2>
            <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
              Each partner is carefully vetted and selected based on quality,
              reliability, and industry reputation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl border border-navy-100 hover:border-gold-300 p-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-50 group-hover:bg-gold-500/10 flex items-center justify-center mb-3 transition-colors">
                  <span className="text-lg font-bold text-navy-400 group-hover:text-gold-600 transition-colors">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-navy-700">
                  {partner.name}
                </span>
                <span className="text-[10px] text-navy-400 mt-0.5">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Category */}
      <section className="py-20 lg:py-28 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Partners by Specialty
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories).map(([category, categoryPartners]) => (
              <div
                key={category}
                className="bg-white rounded-xl border border-navy-100 p-6"
              >
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categoryPartners.map((p, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-navy-50 text-navy-600 rounded-lg text-xs font-medium"
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Looking for a Specific{" "}
            <span className="text-gold-500">Manufacturer?</span>
          </h2>
          <p className="mt-4 text-navy-300">
            Our network extends beyond what is listed. Contact us with your
            requirements and we&apos;ll connect you with the right supplier.
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
