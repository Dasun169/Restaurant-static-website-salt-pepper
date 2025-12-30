"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Reservations", href: "/reservations" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:flex bg-[#0A0A0A] text-sm text-gray-300 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>123 Galle Road, Colombo 03</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <a
                href="tel:+94112345678"
                className="hover:text-[#D4AF37] transition-colors"
              >
                +94 11 234 5678
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Open Today: 6PM - 11PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 lg:top-8 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="text-3xl lg:text-4xl font-serif text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                S&P
              </div>
              <div className="hidden lg:block">
                <div className="text-2xl font-serif text-white">
                  Salt & Pepper
                </div>
                <div className="text-xs text-gray-400 tracking-widest">
                  FINE DINING
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
                    pathname === item.href
                      ? "text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4AF37]"></span>
                  )}
                </Link>
              ))}
              <Link
                href="/reservations"
                className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-medium hover:bg-[#B8941F] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reserve Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-lg rounded-lg py-6 mb-4">
              <div className="flex flex-col space-y-6 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xl font-serif py-3 ${
                      pathname === item.href
                        ? "text-[#D4AF37] border-l-4 border-[#D4AF37] pl-4"
                        : "text-white hover:text-[#D4AF37] pl-8"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-800">
                  <Link
                    href="/reservations"
                    className="block bg-[#D4AF37] text-black px-6 py-4 rounded-full font-medium text-lg text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Reserve Table
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
