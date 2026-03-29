import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { companyInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      {/* Newsletter CTA */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Stay up to date with{" "}
                <span className="text-gold-500">Saldu</span>
              </h3>
              <p className="text-navy-300 mt-1">
                Receive information about our divisions, services, and latest
                solutions.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 bg-navy-800 border border-navy-700 text-white placeholder-navy-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-200 flex items-center gap-2">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-navy-400 text-sm leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-sm text-navy-400 hover:text-gold-500 transition-colors"
              >
                <Mail size={14} />
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-sm text-navy-400 hover:text-gold-500 transition-colors"
              >
                <Phone size={14} />
                {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/divisions", label: "Our Divisions" },
                { href: "/services", label: "Services" },
                { href: "/products", label: "Products" },
                { href: "/partners", label: "Partners" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-3">
              {companyInfo.markets.map((market) => (
                <li key={market}>
                  <span className="text-sm text-navy-400">{market}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Reach */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Global Reach
            </h4>
            <ul className="space-y-3">
              {companyInfo.regions.map((region) => (
                <li key={region} className="flex items-center gap-2">
                  <MapPin size={14} className="text-gold-500 shrink-0" />
                  <span className="text-sm text-navy-400">{region}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-navy-500">
              &copy; {new Date().getFullYear()} {companyInfo.fullName}. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-xs text-navy-500 hover:text-navy-400 cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-xs text-navy-500 hover:text-navy-400 cursor-pointer transition-colors">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
