"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  ChevronRight,
  Star,
  Clock,
  Users,
  Award,
  ChefHat,
  Phone,
} from "lucide-react";

// Featured dishes data
const featuredDishes = [
  {
    id: 1,
    name: "Wagyu Beef Tenderloin",
    description:
      "Australian wagyu with truffle mashed potatoes and red wine reduction",
    price: "LKR 8,500",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop",
    category: "Main Course",
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    description:
      "Fresh Sri Lankan lobster with creamy mushroom sauce and herb crust",
    price: "LKR 7,200",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.h8giS2eu_55WCO8W6S1lOQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Seafood",
  },
  {
    id: 3,
    name: "Truffle Risotto",
    description: "Arborio rice with black truffle, parmesan, and white wine",
    price: "LKR 4,800",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w-800&h=600&fit=crop",
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description: "Dark chocolate soufflé with vanilla bean ice cream",
    price: "LKR 2,900",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop",
    category: "Dessert",
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Critic",
    rating: 5,
    comment:
      "An unforgettable dining experience. The attention to detail in every dish is remarkable.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Regular Guest",
    rating: 5,
    comment:
      "The best fine dining experience in Colombo. Consistently excellent service and cuisine.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Wedding Anniversary",
    rating: 5,
    comment:
      "Perfect ambiance for special occasions. The staff made our anniversary magical.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];

// Highlights data
const highlights = [
  {
    icon: ChefHat,
    title: "Executive Chef",
    description:
      "Led by Chef Anura Perera with 25 years of international experience",
    stat: "25+ Years",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Multiple awards for culinary excellence and service",
    stat: "15 Awards",
  },
  {
    icon: Users,
    title: "Guest Satisfaction",
    description: "Consistently rated 4.9/5 by our valued guests",
    stat: "98% Rating",
  },
  {
    icon: Clock,
    title: "Fine Dining",
    description: "Established in 2010, setting Colombo's dining standards",
    stat: "13 Years",
  },
];

export default function Home() {
  const [currentDish, setCurrentDish] = useState(0);

  return (
    <div className="scroll-smooth">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          {/* For testing, use a background image. Replace with video when available */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)",
            }}
          >
            {/* Fallback for video */}
            <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-6 mb-6 pt-6 animate-fadeIn">
            <div className="w-16 h-px bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">
              Exquisite Dining
            </span>
            <div className="w-16 h-px bg-[#D4AF37]"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 animate-slideUp">
            <span className="block text-white leading-tight">
              Where Culinary
            </span>
            <span className="block text-[#D4AF37] leading-tight">
              Artistry Begins
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideUp animation-delay-300">
            Experience Colombo's premier fine dining destination, where
            tradition meets innovation in every carefully crafted dish.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideUp animation-delay-500">
            <Link
              href="/menu"
              className="group bg-[#D4AF37] text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-[#B8941F] transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#D4AF37]/20 flex items-center space-x-3"
            >
              <span>Explore Our Menu</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/reservations"
              className="group border-2 border-[#D4AF37] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Book a Table</span>
              <Clock className="group-hover:rotate-180 transition-transform" />
            </Link>
          </div>

          {/* Play Story Button */}
          <button className="mt-16 flex items-center justify-center space-x-3 text-white group animate-fadeIn animation-delay-700 mx-auto">
            <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all duration-300 group-hover:scale-110">
              <Play className="ml-1" size={20} />
            </div>
            <div className="text-left">
              <div className="text-sm uppercase tracking-wider">
                Watch Our Story
              </div>
              <div className="text-xs text-gray-400">3 min video</div>
            </div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-[#D4AF37] rotate-90" size={24} />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Defining <span className="text-[#D4AF37]">Excellence</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              For over a decade, we have set the standard for fine dining in Sri
              Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#0A0A0A] p-8 rounded-2xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-black" size={24} />
                  </div>
                </div>

                <div className="pt-8 text-center">
                  <div className="text-3xl font-serif text-[#D4AF37] mb-2">
                    {item.stat}
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
                Signature <span className="text-[#D4AF37]">Creations</span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Our chef's signature dishes that define the Salt & Pepper
                experience
              </p>
            </div>
            <Link
              href="/menu"
              className="group flex items-center space-x-2 text-[#D4AF37] hover:text-[#B8941F] mt-6 lg:mt-0"
            >
              <span>View Full Menu</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.id}
                className="group relative bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${dish.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-medium">
                    {dish.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2">
                        {dish.name}
                      </h3>
                      <p className="text-gray-400">{dish.description}</p>
                    </div>
                    <div className="text-2xl font-serif text-[#D4AF37]">
                      {dish.price}
                    </div>
                  </div>
                  <button className="w-full bg-black border border-[#D4AF37] text-[#D4AF37] py-3 rounded-lg font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=800&fit=crop)",
                  }}
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-[#D4AF37] rounded-2xl transform rotate-12 bg-black p-4 shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&h=400&fit=crop)",
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-px bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] uppercase tracking-widest text-sm">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8">
                Crafting <span className="text-[#D4AF37]">Memories</span>{" "}
                Through Cuisine
              </h2>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Founded in 2010, Salt & Pepper has become Colombo's premier
                destination for those seeking an unforgettable dining
                experience. Our philosophy combines traditional Sri Lankan
                hospitality with international culinary expertise.
              </p>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Each dish tells a story, each ingredient is carefully sourced,
                and every detail is meticulously crafted to create moments worth
                remembering.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center space-x-3 text-[#D4AF37] hover:text-[#B8941F] group"
              >
                <span className="text-lg font-medium">
                  Discover Our Journey
                </span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Stories from <span className="text-[#D4AF37]">Our Guests</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Join hundreds of satisfied guests who have experienced the Salt &
              Pepper difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 group"
              >
                <div className="flex items-center mb-6">
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#D4AF37] fill-current"
                        />
                      ))}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-[#D4AF37]"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                </div>

                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>

                <div className="text-white font-medium">{testimonial.name}</div>
              </div>
            ))}
          </div>

          {/* Rating Summary */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center space-y-4 bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="text-5xl font-serif text-[#D4AF37]">4.9</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-[#D4AF37] fill-current"
                  />
                ))}
              </div>
              <div className="text-gray-400">Based on 847 reviews</div>
              <div className="flex space-x-4">
                <div className="text-gray-300">
                  <span className="text-[#D4AF37] font-medium">Google</span>{" "}
                  4.8/5
                </div>
                <div className="text-gray-300">
                  <span className="text-[#D4AF37] font-medium">
                    TripAdvisor
                  </span>{" "}
                  5/5
                </div>
                <div className="text-gray-300">
                  <span className="text-[#D4AF37] font-medium">Zomato</span>{" "}
                  4.9/5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&q=80)",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8">
              Ready for an <span className="text-[#D4AF37]">Unforgettable</span>{" "}
              Experience?
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Reserve your table today and prepare for an evening of culinary
              excellence
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/reservations"
                className="group bg-[#D4AF37] text-black px-12 py-5 rounded-full font-medium text-lg hover:bg-[#B8941F] transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#D4AF37]/30 flex items-center justify-center space-x-3"
              >
                <span>Book Your Table</span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="group border-2 border-white text-white px-12 py-5 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Contact Us</span>
                <Phone className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            <div className="mt-12 text-gray-500 text-sm">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>Last reservation at 9:30 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>Groups up to 20 guests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#D4AF37]">★</span>
                  <span>24-hour confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
