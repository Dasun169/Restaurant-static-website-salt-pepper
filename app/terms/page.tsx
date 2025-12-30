export default function TermsOfServicePage() {
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
              Terms of <span className="text-[#D4AF37]">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Please read these terms carefully before using our services
            </p>
            <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
              <span>Effective Date:</span>
              <span className="text-[#D4AF37]">December 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-px bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] uppercase tracking-widest text-sm">
                  Welcome
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to Salt & Pepper Restaurant. By accessing or using our
                website, making reservations, or using our services, you agree
                to be bound by these Terms of Service. If you disagree with any
                part of these terms, please do not use our services.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">01</span>
                Restaurant Services
              </h2>

              <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Reservation Services
                      </h4>
                      <p className="text-gray-400">
                        We provide online reservation services for our
                        restaurant. Reservations are subject to availability and
                        confirmation. We reserve the right to refuse service at
                        our discretion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Service Availability
                      </h4>
                      <p className="text-gray-400">
                        While we strive to provide accurate information about
                        availability, menu items, and pricing, these are subject
                        to change without notice based on seasonality and
                        availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">🍽️</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Dining Experience
                      </h4>
                      <p className="text-gray-400">
                        We maintain a smart casual dress code and expect all
                        guests to conduct themselves appropriately to ensure an
                        enjoyable experience for everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">02</span>
                User Responsibilities
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="text-4xl text-[#D4AF37] mb-4">📝</div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    Accurate Information
                  </h3>
                  <p className="text-gray-400">
                    Provide accurate, current, and complete information when
                    making reservations
                  </p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="text-4xl text-[#D4AF37] mb-4">🤝</div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    Respectful Conduct
                  </h3>
                  <p className="text-gray-400">
                    Maintain appropriate behavior and respect for staff and
                    other guests
                  </p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="text-4xl text-[#D4AF37] mb-4">⏰</div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    Timeliness
                  </h3>
                  <p className="text-gray-400">
                    Arrive on time for reservations and notify us of any changes
                    promptly
                  </p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="text-4xl text-[#D4AF37] mb-4">🚫</div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    Prohibited Actions
                  </h3>
                  <p className="text-gray-400">
                    Do not misuse our services or attempt to interfere with our
                    operations
                  </p>
                </div>
              </div>
            </div>

            {/* Reservations & Cancellations */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">03</span>
                Reservations & Cancellations
              </h2>

              <div className="bg-gradient-to-r from-black to-[#0A0A0A] border border-gray-800 rounded-xl p-8">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Booking Confirmation
                    </h4>
                    <p className="text-gray-400">
                      Reservations are confirmed via email. Please ensure you
                      receive and review this confirmation. We reserve tables
                      for 15 minutes past the reservation time.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Cancellation Policy
                    </h4>
                    <div className="bg-[#0A0A0A] rounded-lg p-6 border border-gray-700">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-800">
                          <span className="text-white">24+ Hours Notice</span>
                          <span className="text-green-500 text-sm">
                            No charge
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-gray-800">
                          <span className="text-white">Less than 24 Hours</span>
                          <span className="text-[#D4AF37] text-sm">
                            50% of deposit
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3">
                          <span className="text-white">No-show</span>
                          <span className="text-red-500 text-sm">
                            Full deposit charged
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Group Reservations
                    </h4>
                    <p className="text-gray-400">
                      For groups of 8 or more, different terms may apply
                      including required deposits and earlier cancellation
                      deadlines. Contact us directly for large party
                      arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payments & Pricing */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">04</span>
                Payments & Pricing
              </h2>

              <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-2xl">₹</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Pricing Accuracy
                      </h4>
                      <p className="text-gray-400">
                        All prices are in Sri Lankan Rupees (LKR) and include
                        applicable taxes. Menu prices are subject to change
                        without notice. While we strive for accuracy, occasional
                        errors may occur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-2xl">💳</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Payment Methods
                      </h4>
                      <p className="text-gray-400">
                        We accept major credit cards, debit cards, and cash. For
                        deposits and large groups, specific payment terms will
                        be communicated at the time of booking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-2xl">📋</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Service Charge
                      </h4>
                      <p className="text-gray-400">
                        A 15% service charge is automatically added to all
                        bills. Additional tipping is at your discretion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">05</span>
                Intellectual Property
              </h2>

              <div className="bg-black border border-gray-800 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="bg-[#0A0A0A] rounded-lg p-6">
                    <h4 className="text-white font-medium mb-3">Copyright</h4>
                    <p className="text-gray-400">
                      All content on our website, including text, graphics,
                      logos, images, and software, is the property of Salt &
                      Pepper Restaurant and is protected by copyright laws.
                    </p>
                  </div>

                  <div className="bg-[#0A0A0A] rounded-lg p-6">
                    <h4 className="text-white font-medium mb-3">Trademarks</h4>
                    <p className="text-gray-400">
                      "Salt & Pepper," our logo, and other marks are trademarks
                      of our restaurant. You may not use these marks without our
                      prior written permission.
                    </p>
                  </div>

                  <div className="bg-[#0A0A0A] rounded-lg p-6">
                    <h4 className="text-white font-medium mb-3">
                      User Content
                    </h4>
                    <p className="text-gray-400">
                      By submitting reviews, photos, or other content to us, you
                      grant us a non-exclusive, royalty-free license to use,
                      display, and distribute that content for promotional
                      purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Liability & Disclaimers */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">06</span>
                Liability & Disclaimers
              </h2>

              <div className="bg-gradient-to-r from-[#0A0A0A] to-black border border-gray-800 rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Service Disclaimer
                    </h4>
                    <p className="text-gray-400">
                      Our services are provided "as is" and "as available." We
                      make no warranties, express or implied, regarding the
                      availability, accuracy, or reliability of our services.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Limitation of Liability
                    </h4>
                    <p className="text-gray-400">
                      To the maximum extent permitted by law, Salt & Pepper
                      Restaurant shall not be liable for any indirect,
                      incidental, special, consequential, or punitive damages
                      arising from your use of our services.
                    </p>
                  </div>

                  <div className="bg-black/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-medium mb-3">
                      Health & Safety
                    </h4>
                    <p className="text-gray-400">
                      We take food safety seriously and follow all relevant
                      health regulations. However, customers with specific
                      allergies or dietary restrictions should inform us in
                      advance. We cannot guarantee completely allergen-free
                      environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">07</span>
                Privacy
              </h2>

              <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-2xl">🔒</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Data Protection
                    </h4>
                    <p className="text-gray-400">
                      Your privacy is important to us. Our collection and use of
                      personal information is governed by our Privacy Policy,
                      which is incorporated into these Terms by reference.
                      Please review our Privacy Policy to understand our
                      practices.
                    </p>
                    <div className="mt-4">
                      <a
                        href="/privacy"
                        className="text-[#D4AF37] hover:text-[#B8941F] transition-colors inline-flex items-center"
                      >
                        Read Privacy Policy →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">08</span>
                Modifications & Termination
              </h2>

              <div className="bg-black border border-gray-800 rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Changes to Terms
                    </h4>
                    <p className="text-gray-400">
                      We reserve the right to modify these Terms at any time.
                      Changes will be effective immediately upon posting on our
                      website. Your continued use of our services after changes
                      constitutes acceptance of the modified Terms.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Termination Rights
                    </h4>
                    <p className="text-gray-400">
                      We may terminate or suspend your access to our services
                      immediately, without prior notice, for conduct that we
                      believe violates these Terms or is harmful to other users,
                      us, or third parties.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">
                      User Termination
                    </h4>
                    <p className="text-gray-400">
                      You may stop using our services at any time. Certain
                      provisions of these Terms will survive termination,
                      including intellectual property rights, disclaimers, and
                      limitations of liability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">09</span>
                Governing Law & Dispute Resolution
              </h2>

              <div className="bg-gradient-to-r from-black to-[#0A0A0A] border border-[#D4AF37] rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Applicable Law
                    </h4>
                    <p className="text-gray-400">
                      These Terms shall be governed by and construed in
                      accordance with the laws of Sri Lanka, without regard to
                      its conflict of law provisions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Dispute Resolution
                    </h4>
                    <p className="text-gray-400">
                      Any disputes arising from these Terms or your use of our
                      services shall be resolved through good-faith
                      negotiations. If unable to resolve, disputes shall be
                      submitted to mediation in Colombo.
                    </p>
                  </div>

                  <div className="bg-[#0A0A0A] rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-medium mb-3">
                      Contact for Disputes
                    </h4>
                    <p className="text-gray-400">
                      For any disputes or concerns, please contact us first at
                      <a
                        href="mailto:legal@saltpepper.lk"
                        className="text-[#D4AF37] ml-2"
                      >
                        legal@saltpepper.lk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">10</span>
                Contact Information
              </h2>

              <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">
                      General Inquiries
                    </h4>
                    <a
                      href="mailto:info@saltpepper.lk"
                      className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    >
                      info@saltpepper.lk
                    </a>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Legal Matters
                    </h4>
                    <a
                      href="mailto:legal@saltpepper.lk"
                      className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    >
                      legal@saltpepper.lk
                    </a>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Phone</h4>
                    <a
                      href="tel:+94112345678"
                      className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    >
                      +94 11 234 5678
                    </a>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Address</h4>
                    <p className="text-gray-400">
                      Salt & Pepper Restaurant
                      <br />
                      123 Galle Road
                      <br />
                      Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8 text-center">
              <h4 className="text-2xl font-serif text-white mb-4">Thank You</h4>
              <p className="text-gray-300">
                Thank you for taking the time to review our Terms of Service. We
                appreciate your trust in Salt & Pepper Restaurant and look
                forward to serving you.
              </p>
              <div className="mt-6 inline-flex items-center space-x-2 text-[#D4AF37]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
