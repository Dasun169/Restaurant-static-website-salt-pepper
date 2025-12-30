"use client";

import {
  Calendar,
  Award,
  Users,
  Target,
  Heart,
  Star,
  Quote,
} from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: 2010,
    title: "Grand Opening",
    description: "Salt & Pepper opens its doors in Colombo",
  },
  {
    year: 2012,
    title: "First Award",
    description: "Best New Restaurant - Sri Lanka Restaurant Awards",
  },
  {
    year: 2015,
    title: "Renovation",
    description: "Complete interior redesign and kitchen upgrade",
  },
  {
    year: 2018,
    title: "Chef Recognition",
    description: "Executive Chef Anura receives Chef of the Year",
  },
  {
    year: 2020,
    title: "COVID Response",
    description: "Pioneered gourmet home delivery during lockdown",
  },
  {
    year: 2023,
    title: "Current",
    description: "Consistently rated Colombo's #1 fine dining",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every dish is crafted with love and dedication",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for perfection in every detail",
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting local producers and artisans",
  },
  {
    icon: Star,
    title: "Innovation",
    description: "Constantly evolving our culinary offerings",
  },
];

const team = [
  {
    name: "Anura Perera",
    role: "Executive Chef",
    experience: "25 years",
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=400&fit=crop",
    quote: "Great food tells a story. We write ours with every plate.",
  },
  {
    name: "Priya Silva",
    role: "Head Pastry Chef",
    experience: "15 years",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
    quote: "Desserts should be as beautiful as they are delicious.",
  },
  {
    name: "Kamal Fernando",
    role: "Sommelier",
    experience: "18 years",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    quote: "The right wine can elevate a meal from good to unforgettable.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=1920&q=80)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-serif text-white mb-6">
              Our <span className="text-[#D4AF37]">Story</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8 font-serif italic">
              "Where tradition meets innovation in every bite"
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-px bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] uppercase tracking-widest text-sm">
                  Our Mission
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8">
                Redefining <span className="text-[#D4AF37]">Fine Dining</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded in 2010, Salt & Pepper was born from a vision to
                  create Colombo's premier fine dining destination. Our
                  founders, inspired by global culinary traditions, sought to
                  bring world-class dining to Sri Lanka while celebrating local
                  ingredients and flavors.
                </p>
                <p>
                  What began as a small restaurant with big dreams has evolved
                  into an award-winning establishment, recognized for its
                  culinary excellence, impeccable service, and elegant ambiance.
                </p>
                <p>
                  Today, we continue to push boundaries while staying true to
                  our core values of quality, innovation, and genuine
                  hospitality.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=800&fit=crop)",
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 border-4 border-[#D4AF37] rounded-2xl transform -rotate-12 bg-black p-4 shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=400&fit=crop)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Our <span className="text-[#D4AF37]">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 group text-center"
              >
                <div className="w-16 h-16 mx-auto bg-[#D4AF37] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Our <span className="text-[#D4AF37]">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Milestones that shaped our story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37] transform -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative ${
                    index % 2 === 0
                      ? "lg:pr-1/2 lg:pl-8 lg:text-right"
                      : "lg:pl-1/2 lg:pr-8"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#D4AF37] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

                  <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-500">
                    <div className="text-5xl font-serif text-[#D4AF37] mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Meet Our <span className="text-[#D4AF37]">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The talented individuals behind your dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[#D4AF37] text-sm mb-2">
                      {member.experience} Experience
                    </div>
                    <h3 className="text-2xl font-serif text-white">
                      {member.name}
                    </h3>
                    <div className="text-gray-300">{member.role}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Quote
                      className="text-[#D4AF37] mr-3 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-gray-300 italic">"{member.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8">
              Our <span className="text-[#D4AF37]">Commitment</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                <div className="text-[#D4AF37] text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-serif text-white mb-3">
                  Local Sourcing
                </h3>
                <p className="text-gray-400">
                  85% of our ingredients sourced from local farmers and
                  fishermen
                </p>
              </div>
              <div className="p-6">
                <div className="text-[#D4AF37] text-4xl mb-4">♻️</div>
                <h3 className="text-xl font-serif text-white mb-3">
                  Zero Waste
                </h3>
                <p className="text-gray-400">
                  Comprehensive recycling and composting programs
                </p>
              </div>
              <div className="p-6">
                <div className="text-[#D4AF37] text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-serif text-white mb-3">
                  Community
                </h3>
                <p className="text-gray-400">
                  Supporting local charities and culinary education programs
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              We believe that great dining goes beyond the plate. That's why
              we're committed to sustainable practices, supporting our local
              community, and creating positive impact through everything we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
