import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
} from "lucide-react";

const footerLinks = [
  { name: "Our Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Reservations", href: "/reservations" },
  { name: "Contact", href: "/contact" },
  { name: "Private Events", href: "/events" },
];

const hours = [
  { day: "Monday - Thursday", time: "6:00 PM - 11:00 PM" },
  { day: "Friday - Saturday", time: "5:00 PM - 12:00 AM" },
  { day: "Sunday", time: "12:00 PM - 10:00 PM" },
];

const awards = [
  "Best Fine Dining 2023 - Sri Lanka Restaurant Awards",
  "TripAdvisor Travelers' Choice 2023",
  "Certificate of Excellence - Zomato",
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-4xl font-serif text-[#D4AF37]">S&P</div>
              <div>
                <div className="text-2xl font-serif text-white">
                  Salt & Pepper
                </div>
                <div className="text-xs text-gray-400 tracking-widest">
                  LUXURY DINING EXPERIENCE
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Where culinary artistry meets elegant ambiance. At Salt & Pepper,
              we create unforgettable dining experiences through exquisite
              cuisine, impeccable service, and an atmosphere of refined luxury.
            </p>

            {/* Awards */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white uppercase tracking-wider">
                Awards & Recognition
              </h4>
              <ul className="space-y-2">
                {awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-500 flex items-start"
                  >
                    <span className="text-[#D4AF37] mr-2">★</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6 pb-2 border-b border-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-2 h-0.5 bg-[#D4AF37] mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6 pb-2 border-b border-gray-800">
              Hours
            </h3>
            <ul className="space-y-4">
              {hours.map((item) => (
                <li key={item.day} className="text-sm">
                  <div className="font-medium text-white mb-1">{item.day}</div>
                  <div className="text-gray-400">{item.time}</div>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-black rounded-lg border border-gray-800">
              <div className="flex items-center space-x-3">
                <Clock className="text-[#D4AF37]" size={16} />
                <div>
                  <div className="text-xs text-gray-400">Last Reservation</div>
                  <div className="text-sm text-white">9:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6 pb-2 border-b border-gray-800">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-[#D4AF37] mt-1 flex-shrink-0"
                  size={16}
                />
                <div>
                  <div className="text-sm font-medium text-white">Location</div>
                  <div className="text-sm text-gray-400">
                    123 Galle Road, Colombo 03, Sri Lanka
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-[#D4AF37]" size={16} />
                <div>
                  <div className="text-sm font-medium text-white">Phone</div>
                  <a
                    href="tel:+94112345678"
                    className="text-sm text-gray-400 hover:text-[#D4AF37]"
                  >
                    +94 11 234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-[#D4AF37]" size={16} />
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <a
                    href="mailto:reservations@saltpepper.lk"
                    className="text-sm text-gray-400 hover:text-[#D4AF37]"
                  >
                    reservations@saltpepper.lk
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="TripAdvisor"
                >
                  <span className="text-xs font-bold">TA</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-white mb-3">
                Stay Updated
              </h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-black border border-gray-700 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="bg-[#D4AF37] text-black px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-[#B8941F] transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-500 text-center lg:text-left">
              © {new Date().getFullYear()} Salt & Pepper Restaurant. All rights
              reserved.
              <span className="mx-2">|</span>
              <Link href="/privacy" className="hover:text-[#D4AF37]">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-[#D4AF37]">
                Terms of Service
              </Link>
            </div>
            <div className="text-xs text-gray-600 flex items-center">
              Crafted with <Heart size={12} className="mx-1 text-red-500" /> for
              exceptional dining experiences
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
