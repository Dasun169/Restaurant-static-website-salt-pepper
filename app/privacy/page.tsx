export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-[#D4AF37]">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your privacy is important to us at Salt & Pepper
            </p>
            <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
              <span>Last Updated:</span>
              <span className="text-[#D4AF37]">December 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-px bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] uppercase tracking-widest text-sm">
                  Introduction
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Salt & Pepper Restaurant ("we", "our", or "us"), we are
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website, make reservations, or
                use our services.
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">01</span>
                Information We Collect
              </h2>

              <div className="space-y-6">
                <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-serif text-white mb-4">
                    Personal Information
                  </h3>
                  <p className="text-gray-400">
                    When you make a reservation, contact us, or sign up for our
                    newsletter, we may collect:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">•</span>
                      Full name and contact details (email, phone number)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">•</span>
                      Reservation details (date, time, party size)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">•</span>
                      Dietary preferences and special requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">•</span>
                      Payment information (processed securely through our
                      partners)
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-serif text-white mb-4">
                    Automatically Collected Information
                  </h3>
                  <p className="text-gray-400">
                    We automatically collect certain information when you visit
                    our website:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">•</span>
                      IP address and browser type
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">•</span>
                      Pages visited and time spent on site
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">•</span>
                      Device information and operating system
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">02</span>
                How We Use Your Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="text-4xl text-[#D4AF37] mb-4">🎯</div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    Service Provision
                  </h3>
                  <p className="text-gray-400">
                    To process reservations, manage bookings, and provide dining
                    services
                  </p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="text-4xl text-[#D4AF37] mb-4">💌</div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    Communication
                  </h3>
                  <p className="text-gray-400">
                    To send reservation confirmations, updates, and promotional
                    offers (with consent)
                  </p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="text-4xl text-[#D4AF37] mb-4">🔒</div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    Security
                  </h3>
                  <p className="text-gray-400">
                    To protect against fraudulent activities and ensure service
                    security
                  </p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="text-4xl text-[#D4AF37] mb-4">📈</div>
                  <h3 className="text-xl font-serif text-white mb-3">
                    Improvement
                  </h3>
                  <p className="text-gray-400">
                    To analyze website usage and improve our services and
                    customer experience
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">03</span>
                Data Sharing & Disclosure
              </h2>

              <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-8">
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information with:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Service Providers
                      </h4>
                      <p className="text-gray-400">
                        Trusted third parties who assist in reservation
                        management, payment processing, and marketing (under
                        strict confidentiality agreements)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">⚖️</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Legal Requirements
                      </h4>
                      <p className="text-gray-400">
                        When required by law, court order, or to protect our
                        rights, property, or safety
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">🔗</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Business Transfers
                      </h4>
                      <p className="text-gray-400">
                        In connection with any merger, sale of company assets,
                        or acquisition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">04</span>
                Data Security
              </h2>

              <div className="bg-gradient-to-r from-black to-[#0A0A0A] border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔐</div>
                    <h4 className="text-white font-medium mb-2">Encryption</h4>
                    <p className="text-gray-400 text-sm">
                      SSL encryption for all data transmission
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="text-5xl mb-4">🛡️</div>
                    <h4 className="text-white font-medium mb-2">
                      Access Control
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Limited access to authorized personnel only
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="text-5xl mb-4">📊</div>
                    <h4 className="text-white font-medium mb-2">
                      Regular Audits
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Ongoing security assessments and updates
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <p className="text-gray-300">
                    While we implement reasonable security measures, no method
                    of transmission over the internet or electronic storage is
                    100% secure. We cannot guarantee absolute security of your
                    information.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">05</span>
                Your Rights & Choices
              </h2>

              <div className="space-y-6">
                <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37] transition-colors duration-300">
                  <h3 className="text-xl font-serif text-white mb-3">
                    Access & Correction
                  </h3>
                  <p className="text-gray-400">
                    You have the right to access and update your personal
                    information. Contact us to review or correct your data.
                  </p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37] transition-colors duration-300">
                  <h3 className="text-xl font-serif text-white mb-3">
                    Marketing Preferences
                  </h3>
                  <p className="text-gray-400">
                    You can opt-out of marketing communications at any time by
                    clicking "unsubscribe" in our emails or contacting us.
                  </p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37] transition-colors duration-300">
                  <h3 className="text-xl font-serif text-white mb-3">
                    Data Deletion
                  </h3>
                  <p className="text-gray-400">
                    You may request deletion of your personal information,
                    subject to legal obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">06</span>
                Cookies & Tracking Technologies
              </h2>

              <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-8">
                <p className="text-gray-300 mb-6">
                  We use cookies and similar technologies to enhance your
                  browsing experience, analyze site traffic, and personalize
                  content.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <span className="text-white">Essential Cookies</span>
                    <span className="text-[#D4AF37] text-sm">
                      Required for site functionality
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <span className="text-white">Analytics Cookies</span>
                    <span className="text-[#D4AF37] text-sm">
                      Help us improve our website
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-white">Marketing Cookies</span>
                    <span className="text-[#D4AF37] text-sm">
                      Personalize your experience
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-400 text-sm">
                    You can manage cookie preferences through your browser
                    settings. Note that disabling cookies may affect site
                    functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">07</span>
                Policy Updates
              </h2>

              <div className="bg-gradient-to-r from-[#0A0A0A] to-black border border-gray-800 rounded-xl p-8">
                <p className="text-gray-300 mb-6">
                  We may update this Privacy Policy periodically. The "Last
                  Updated" date at the top of this page indicates when changes
                  were made.
                </p>

                <div className="bg-black/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-white font-medium mb-3">
                    Notification of Changes
                  </h4>
                  <p className="text-gray-400">
                    We will notify you of significant changes by posting the new
                    Privacy Policy on our website and updating the effective
                    date. Your continued use of our services after changes
                    constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center">
                <span className="text-[#D4AF37] mr-4">08</span>
                Contact Us
              </h2>

              <div className="bg-[#0A0A0A] border border-[#D4AF37] rounded-xl p-8">
                <p className="text-gray-300 mb-6">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or your personal data, please contact us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Email</h4>
                    <a
                      href="mailto:privacy@saltpepper.lk"
                      className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    >
                      privacy@saltpepper.lk
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
                    <h4 className="text-white font-medium mb-3">
                      Postal Address
                    </h4>
                    <p className="text-gray-400">
                      Salt & Pepper Restaurant
                      <br />
                      123 Galle Road
                      <br />
                      Colombo 03, Sri Lanka
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">
                      Data Protection Officer
                    </h4>
                    <p className="text-gray-400">
                      For privacy-specific inquiries, contact our Data
                      Protection Officer at the email above.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
              <h4 className="text-white font-medium mb-3">Disclaimer</h4>
              <p className="text-gray-400 text-sm">
                This Privacy Policy applies only to information collected
                through our website and services. It does not apply to
                information collected offline or through other channels. This
                policy complies with applicable Sri Lankan data protection laws
                and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
