"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";

const availableTimes = [
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

const seatingOptions = [
  {
    id: "indoor",
    name: "Indoor Dining",
    description: "Main dining area with elegant ambiance",
  },
  {
    id: "outdoor",
    name: "Outdoor Terrace",
    description: "Al fresco dining with garden view",
  },
  {
    id: "private",
    name: "Private Room",
    description: "Exclusive space for special occasions",
  },
];

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    seating: "indoor",
    specialRequests: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In production, this would send to your backend
      console.log("Reservation submitted:", formData);
      setSubmitted(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-serif text-white mb-6">
              Make a <span className="text-[#D4AF37]">Reservation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Secure your table for an unforgettable dining experience
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-black rounded-2xl border border-[#D4AF37] p-12 text-center">
                <CheckCircle className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
                <h2 className="text-4xl font-serif text-white mb-4">
                  Reservation Confirmed!
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Thank you for your reservation. We've sent a confirmation
                  email to {formData.email}.
                </p>
                <div className="bg-[#0A0A0A] rounded-xl p-6 max-w-md mx-auto">
                  <h3 className="text-xl font-serif text-white mb-4">
                    Reservation Details
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date & Time:</span>
                      <span className="text-white">
                        {formData.date} at {formData.time}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Guests:</span>
                      <span className="text-white">
                        {formData.guests} people
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white">{formData.name}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full font-medium hover:bg-[#D4AF37] hover:text-black transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <div className="bg-black rounded-2xl border border-gray-800 p-8">
                <h2 className="text-3xl font-serif text-white mb-8">
                  Reservation Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`w-full bg-[#0A0A0A] border ${
                          errors.name ? "border-red-500" : "border-gray-700"
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]`}
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`w-full bg-[#0A0A0A] border ${
                          errors.email ? "border-red-500" : "border-gray-700"
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`w-full bg-[#0A0A0A] border ${
                          errors.phone ? "border-red-500" : "border-gray-700"
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]`}
                        placeholder="+94 11 234 5678"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white mb-3">
                        Number of Guests *
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => handleChange("guests", e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "person" : "people"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-3">Date *</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          className={`w-full bg-[#0A0A0A] border ${
                            errors.date ? "border-red-500" : "border-gray-700"
                          } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]`}
                        />
                        <Calendar
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                      {errors.date && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.date}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white mb-3">Time *</label>
                      <div className="relative">
                        <select
                          value={formData.time}
                          onChange={(e) => handleChange("time", e.target.value)}
                          className={`w-full bg-[#0A0A0A] border ${
                            errors.time ? "border-red-500" : "border-gray-700"
                          } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]`}
                        >
                          <option value="">Select time</option>
                          {availableTimes.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <Clock
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                      {errors.time && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-white mb-4">
                      Seating Preference
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {seatingOptions.map((option) => (
                        <label
                          key={option.id}
                          className={`cursor-pointer border rounded-xl p-4 transition-all duration-300 ${
                            formData.seating === option.id
                              ? "border-[#D4AF37] bg-[#D4AF37]/10"
                              : "border-gray-700 hover:border-gray-500"
                          }`}
                        >
                          <input
                            type="radio"
                            name="seating"
                            value={option.id}
                            checked={formData.seating === option.id}
                            onChange={(e) =>
                              handleChange("seating", e.target.value)
                            }
                            className="hidden"
                          />
                          <div className="text-white font-medium mb-2">
                            {option.name}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {option.description}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-white mb-3">
                      Special Requests
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleChange("specialRequests", e.target.value)
                      }
                      rows={4}
                      className="w-full bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                      placeholder="Allergies, celebrations, or special requirements..."
                    />
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-6">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" required />
                      <span className="text-gray-400 text-sm">
                        I agree to the terms and conditions and understand that
                        this reservation will be held for 15 minutes past the
                        booking time.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full bg-[#D4AF37] text-black py-4 rounded-full font-medium text-lg hover:bg-[#B8941F] transition-colors"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-black rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-serif text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#D4AF37]" size={20} />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <a
                      href="tel:+94112345678"
                      className="text-white hover:text-[#D4AF37]"
                    >
                      +94 11 234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-[#D4AF37]" size={20} />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a
                      href="mailto:reservations@saltpepper.lk"
                      className="text-white hover:text-[#D4AF37]"
                    >
                      reservations@saltpepper.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#D4AF37] mt-1" size={20} />
                  <div>
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white">
                      123 Galle Road
                      <br />
                      Colombo 03
                      <br />
                      Sri Lanka
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-black rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-serif text-white mb-6">
                Opening Hours
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Thursday</span>
                  <span className="text-white">6:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Friday - Saturday</span>
                  <span className="text-white">5:00 PM - 12:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">12:00 PM - 10:00 PM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#0A0A0A] rounded-lg">
                <div className="text-[#D4AF37] font-medium mb-2">
                  Last Reservation
                </div>
                <div className="text-white">9:30 PM (Indoor & Outdoor)</div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-black rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-serif text-white mb-6">
                Important Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <div>
                    <div className="text-white font-medium mb-1">
                      Confirmation
                    </div>
                    <div className="text-gray-400 text-sm">
                      You'll receive email confirmation within 24 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="text-[#D4AF37] mt-1" size={18} />
                  <div>
                    <div className="text-white font-medium mb-1">
                      Large Groups
                    </div>
                    <div className="text-gray-400 text-sm">
                      For groups of 8+ please call to make arrangements
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="text-red-500 mt-1" size={18} />
                  <div>
                    <div className="text-white font-medium mb-1">
                      Cancellation
                    </div>
                    <div className="text-gray-400 text-sm">
                      Please cancel at least 24 hours in advance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
