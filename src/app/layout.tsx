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
    default: "Saldu - Bridging Western Industry with Eastern Markets",
    template: "%s | Saldu",
  },
  description:
    "Saldu is a Canadian procurement and trading solutions startup connecting North American industrial suppliers with the Middle East and emerging markets.",
  keywords: [
    "industrial solutions",
    "global trading",
    "oil and gas equipment",
    "procurement",
    "Canada Middle East trade",
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
      <body className="font-sans antialiased bg-navy-900 text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
