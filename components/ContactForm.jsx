"use client";

import React, { useState } from "react";
import {
  Camera,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Heart,
  Instagram,
  Facebook,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const VintageContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "Wedding Photography",
    "Portrait Session",
    "Family Photography",
    "Fashion Photography",
    "Anniversary Session",
    "Couple Photography",
    "Individual Portraits",
    "Event Photography",
    "Photo Restoration",
    "Custom Vintage Session",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Vintage texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.05) 0%, transparent 50%)
            `,
              backgroundSize: "200px 200px, 300px 300px",
            }}
          />
        </div>

        {/* Floating vintage elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${5 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
                animation: `float 10s ease-in-out infinite`,
                animationDelay: `${i * 1.2}s`,
              }}
            >
              <Camera className="w-4 h-4 text-amber-600" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mb-6 shadow-xl">
            <Heart className="w-8 h-8 text-white animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
            Let's Create Magic Together
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-amber-600 rounded-full" />
            <Camera className="w-6 h-6 text-amber-600" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-amber-600 rounded-full" />
          </div>

          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Ready to capture your precious moments with vintage elegance? Get in
            touch and let's discuss your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-full shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">Phone</p>
                    <p className="text-amber-700">+94 77 799 0726</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-full shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">Email</p>
                    <p className="text-amber-700">bygoneeraartist@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-full shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">Location</p>
                    <p className="text-amber-700">Kuliyapitiya, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-full shadow-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">
                      Working Hours
                    </p>
                    <p className="text-amber-700">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Additional Info */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4 font-serif">
                Follow Our Journey
              </h3>
              <p className="text-amber-100 mb-6">
                Stay connected and see our latest vintage photography work on
                social media.
              </p>

              <div className="flex space-x-4 mb-6">
                <a
                  href="https://web.facebook.com/bygoneeraartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/bygoneeraartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-sm text-amber-100">
                  <strong>Quick Response:</strong> We typically respond to
                  inquiries within 2-4 hours during business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif">
              Send Us a Message
            </h3>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-amber-900 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-amber-300 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80 placeholder-amber-600/50 text-amber-900"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-900 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-amber-300 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80 placeholder-amber-600/50 text-amber-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-amber-900 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-amber-300 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80 placeholder-amber-600/50 text-amber-900"
                    placeholder="+94 77 xxx xxxx"
                  />
                </div>
              </div>

              {/* Service and Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-900 font-medium mb-2">
                    Photography Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-amber-300 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80 text-amber-900"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-amber-900 font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-amber-300 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80 text-amber-900"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-amber-900 font-medium mb-2">
                  Tell Us About Your Vision *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 rounded-xl border border-amber-300 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 resize-none transition-all duration-300 bg-white/80 placeholder-amber-600/50 text-amber-900"
                  placeholder="Describe your photography needs, style preferences, location ideas, or any special requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-amber-400 text-amber-900 cursor-not-allowed"
                    : "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-amber-900"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-xl flex items-center space-x-3 ${
                    submitStatus === "success"
                      ? "bg-green-100 border border-green-300"
                      : "bg-red-100 border border-red-300"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-green-800">
                        Thank you! Your message has been sent successfully.
                        We'll get back to you soon!
                      </p>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <p className="text-red-800">
                        Sorry, there was an error sending your message. Please
                        try again or contact us directly.
                      </p>
                    </>
                  )}
                </div>
              )}

              <p className="text-sm text-amber-600 text-center">
                * Required fields. Your information is kept private and secure.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 p-6 rounded-2xl shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3 font-serif">
              Ready to Book Your Session?
            </h3>
            <p className="text-amber-100 mb-4">
              Call us directly for immediate assistance and availability
            </p>
            <a
              href="tel:+94777990726"
              className="inline-flex items-center bg-white hover:bg-amber-50 text-amber-700 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2" />
              +94 77 799 0726
            </a>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-amber-200/50">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-amber-900 mb-2">
              Personalized Service
            </h4>
            <p className="text-amber-700 text-sm">
              Every session is tailored to your unique vision and story
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-amber-200/50">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-amber-900 mb-2">
              Professional Quality
            </h4>
            <p className="text-amber-700 text-sm">
              High-end equipment and expert techniques for stunning results
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-amber-200/50">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-amber-900 mb-2">Quick Turnaround</h4>
            <p className="text-amber-700 text-sm">
              Edited photos delivered within 1-2 weeks of your session
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }
      `}</style>
    </section>
  );
};

export default VintageContactForm;
