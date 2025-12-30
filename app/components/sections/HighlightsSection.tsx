"use client";

import { motion } from "framer-motion";
import { ChefHat, Wine, Star } from "lucide-react";

const highlights = [
  {
    icon: ChefHat,
    title: "Authentic Cuisine",
    description:
      "Masterfully crafted dishes using locally sourced ingredients and traditional techniques.",
  },
  {
    icon: Wine,
    title: "Cozy Ambiance",
    description:
      "Elegant interior design with intimate lighting and sophisticated decor for memorable evenings.",
  },
  {
    icon: Star,
    title: "Premium Service",
    description:
      "Attentive staff providing personalized service to enhance your dining experience.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Experience <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what makes Salt & Pepper the premier destination for fine
            dining in Colombo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-black-rich p-8 rounded-2xl border border-gray-800 hover:border-gold transition-all duration-300 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <item.icon size={24} className="text-black" />
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <h3 className="text-2xl font-serif text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
