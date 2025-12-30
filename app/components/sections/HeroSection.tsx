"use client";

import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/images/hero-fallback.jpg"
            alt="Luxury dining ambiance"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-gold text-sm uppercase tracking-wider">
                Exquisite Dining
              </span>
              <div className="w-12 h-px bg-gold"></div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6">
              <span className="block text-white">Salt &</span>
              <span className="block text-gold">Pepper</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Where culinary artistry meets elegant ambiance. Experience the
              finest dining in Colombo with our curated menu of signature
              dishes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/menu"
                className="bg-gold text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Our Menu
              </Link>
              <Link
                href="/reservations"
                className="border-2 border-gold text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-gold/10 transition-all duration-300 text-center"
              >
                Reserve a Table
              </Link>
            </div>

            {/* Play button for video */}
            <button
              className="mt-12 flex items-center space-x-3 text-white group"
              aria-label="Watch our story"
            >
              <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Play size={20} className="ml-1" />
              </div>
              <span className="text-sm uppercase tracking-wider">
                Watch Our Story
              </span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={24} className="text-gold" />
        </motion.div>
      </div>
    </section>
  );
}
