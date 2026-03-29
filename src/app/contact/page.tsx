import type { Metadata } from "next";
import { Mail, Phone, Globe, MapPin, Clock, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Saldu Global Solutions. Reach out for industrial equipment quotes, procurement inquiries, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        size="small"
        title="Contact Us"
        subtitle="Have a question or need a quote? Our team is ready to help you find the right industrial solutions for your business."
        badge="Get in Touch"
      />

      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Reach Out to Us
                </h2>
                <p className="text-navy-300 leading-relaxed">
                  Whether you need a specific product quote, have a procurement
                  inquiry, or want to discuss a partnership, we are here to
                  assist.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Email</h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Phone</h3>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-sm text-navy-300"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Location
                    </h3>
                    <span className="text-sm text-navy-300">
                      {companyInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Globe size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Website
                    </h3>
                    <span className="text-sm text-navy-300">saldu.ca</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Business Hours
                    </h3>
                    <span className="text-sm text-navy-300">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </span>
                  </div>
                </div>
              </div>

              {/* Regions */}
              <div className="pt-6 border-t border-navy-700">
                <h3 className="text-sm font-semibold text-white mb-4">
                  Markets We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {companyInfo.regions.map((region, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy-800 border border-navy-700 rounded-lg text-xs font-medium text-navy-300"
                    >
                      <MapPin size={10} className="text-gold-500" />
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form (display only) */}
            <div className="lg:col-span-2">
              <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8 lg:p-10">
                <h2 className="text-xl font-bold text-white mb-1">
                  Send Us a Message
                </h2>
                <p className="text-sm text-navy-400 mb-8">
                  Fill out the form below and we will get back to you promptly.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-600 rounded-lg text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-600 rounded-lg text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-600 rounded-lg text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-600 rounded-lg text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 bg-navy-900 border border-navy-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all">
                      <option value="">Select a topic</option>
                      <option value="quote">Request a Quote</option>
                      <option value="product">Product Inquiry</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-600 rounded-lg text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-200"
                  >
                    Send Message
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
