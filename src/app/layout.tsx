import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Saldu - Global Industrial & Trading Solutions",
    template: "%s | Saldu",
  },
  description:
    "Saldu is a global procurement and trading solutions company supplying innovative industrial equipment and services across energy, healthcare, IT, and more.",
  keywords: [
    "industrial solutions",
    "global trading",
    "oil and gas equipment",
    "procurement",
    "energy solutions",
    "industrial equipment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-navy-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
