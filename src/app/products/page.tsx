import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import { productCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Saldu's comprehensive product catalog including electrical power, oil & gas equipment, instrumentation, communication systems, safety equipment, and industrial tools.",
};

export default function ProductsPage() {
  return (
    <>
      <Hero
        size="small"
        title="Products & Equipment"
        subtitle="We supply a comprehensive range of industrial products and equipment from world-renowned manufacturers, tailored to your specific project requirements."
        badge="Product Catalog"
      />

      {/* Product Categories */}
      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {productCategories.map((category, i) => (
              <div
                key={i}
                className="bg-navy-800 rounded-2xl border border-navy-700 overflow-hidden hover:border-navy-600 transition-all duration-300"
              >
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-navy-700 flex items-center justify-center shrink-0">
                      <category.icon size={28} className="text-gold-500" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {category.title}
                      </h2>
                      <p className="mt-1 text-navy-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 px-4 py-3 bg-navy-900/50 rounded-lg border border-navy-700/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span className="text-sm text-navy-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-navy-700">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Request a Quote for {category.title}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturers Note */}
      <section className="py-16 bg-navy-800 border-t border-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Can&apos;t Find What You Need?
          </h3>
          <p className="text-navy-400 leading-relaxed">
            Our product range extends far beyond what is listed here. With
            partnerships across 36+ manufacturers and suppliers in North America,
            Europe, and Asia, we can source virtually any industrial equipment or
            component. Contact us with your specific requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy-600 hover:border-navy-500 text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Our Partners
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-200"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
