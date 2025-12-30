"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+94 11 234 5678", "+94 77 234 5678 (WhatsApp)"],
    action: "Call us",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["reservations@saltpepper.lk", "info@saltpepper.lk"],
    action: "Email us",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Galle Road", "Colombo 03, Sri Lanka"],
    action: "Get directions",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Thu: 6PM - 11PM", "Fri-Sat: 5PM - 12AM", "Sun: 12PM - 10PM"],
    action: "View hours",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&q=80)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-serif text-white mb-6">
              Get In <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're here to answer your questions and make your experience
              exceptional
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl border border-gray-800 p-6 hover:border-[#D4AF37] transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-black" size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-white mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, i) => (
                        <div key={i} className="text-gray-400">
                          {detail}
                        </div>
                      ))}
                    </div>
                    <button className="text-[#D4AF37] hover:text-[#B8941F] text-sm font-medium">
                      {info.action} →
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-black rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-serif text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "TripAdvisor", "Google"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="flex-1 bg-[#0A0A0A] border border-gray-800 rounded-xl p-4 text-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 group"
                    >
                      <div className="text-white group-hover:text-[#D4AF37] font-medium">
                        {platform}
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-black rounded-2xl border border-gray-800 p-8">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="text-[#D4AF37]" size={24} />
                <h2 className="text-3xl font-serif text-white">
                  Send us a Message
                </h2>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-6">✨</div>
                  <h3 className="text-2xl font-serif text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full font-medium hover:bg-[#D4AF37] hover:text-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                        placeholder="+94 11 234 5678"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-3">Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          handleChange("subject", e.target.value)
                        }
                        required
                        className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="">Select subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="feedback">Feedback & Reviews</option>
                        <option value="events">
                          Private Events & Catering
                        </option>
                        <option value="partnership">
                          Business Partnership
                        </option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-3">
                      Your Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={6}
                      className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                      placeholder="How can we help you today?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-black py-4 rounded-full font-medium text-lg hover:bg-[#B8941F] transition-colors flex items-center justify-center space-x-3"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="bg-black rounded-2xl border border-gray-800 overflow-hidden">
              <div className="h-96 bg-gray-800 relative">
                {/* Replace with actual Google Maps embed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🗺️</div>
                    <div className="text-white font-medium mb-2">
                      Google Maps Integration
                    </div>
                    <div className="text-gray-400">
                      Interactive map will be embedded here
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif text-white mb-4">
                  Getting Here
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-[#0A0A0A] rounded-xl">
                    <div className="text-[#D4AF37] font-medium mb-2">
                      Parking
                    </div>
                    <div className="text-gray-400 text-sm">
                      Valet parking available from 5PM
                    </div>
                  </div>
                  <div className="p-4 bg-[#0A0A0A] rounded-xl">
                    <div className="text-[#D4AF37] font-medium mb-2">
                      Public Transport
                    </div>
                    <div className="text-gray-400 text-sm">
                      5 min walk from Galle Face Green
                    </div>
                  </div>
                  <div className="p-4 bg-[#0A0A0A] rounded-xl">
                    <div className="text-[#D4AF37] font-medium mb-2">
                      Accessibility
                    </div>
                    <div className="text-gray-400 text-sm">
                      Wheelchair accessible with ramp
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Preview */}
            <div className="bg-black rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-serif text-white mb-6">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {[
                  {
                    q: "Do you accommodate dietary restrictions?",
                    a: "Yes, we can accommodate most dietary needs with advance notice.",
                  },
                  {
                    q: "What is the dress code?",
                    a: "Smart casual. We recommend collared shirts and dress shoes.",
                  },
                  {
                    q: "Do you host private events?",
                    a: "Yes, we have private dining rooms for up to 40 guests.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-800 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="text-white font-medium mb-2">{faq.q}</div>
                    <div className="text-gray-400">{faq.a}</div>
                  </div>
                ))}
              </div>

              <button className="mt-6 text-[#D4AF37] hover:text-[#B8941F] font-medium">
                View all FAQs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
