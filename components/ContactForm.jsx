"use client";

import React, { useState } from "react";
import {
  Camera,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
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
    <section className="relative py-16 md:py-20 bg-gray-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>

        {/* Minimal decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #6b7280 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Professional Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-6">
            <Camera className="w-8 h-8 text-gray-700 mx-auto mb-4" />
            <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 font-serif tracking-wide">
            Let's Discuss Your Vision
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional vintage photography services crafted to capture your
            most precious moments with timeless elegance.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-6 font-serif">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2.5 rounded-lg">
                    <Phone className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Phone</p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      +94 77 799 0726
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2.5 rounded-lg">
                    <Mail className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      bygoneeraartist@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2.5 rounded-lg">
                    <MapPin className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Location
                    </p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      Kuliyapitiya, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2.5 rounded-lg">
                    <Clock className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Business Hours
                    </p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      Monday - Saturday
                    </p>
                    <p className="text-gray-600 text-sm">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4 font-serif">
                Follow Our Work
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Stay updated with our latest photography projects and
                behind-the-scenes moments.
              </p>

              <div className="flex space-x-3">
                <a
                  href="https://web.facebook.com/bygoneeraartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4 text-gray-700" />
                </a>
                <a
                  href="https://www.instagram.com/bygoneeraartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4 text-gray-700" />
                </a>
              </div>
            </div>

            {/* Professional Note */}
            <div className="bg-gray-900 rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-lg font-medium mb-3 font-serif">
                Professional Service
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We typically respond to all inquiries within 2-4 hours during
                business hours. Each session is personally crafted to reflect
                your unique story.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Available for bookings</span>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-6 font-serif">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200 bg-white text-gray-900"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200 bg-white text-gray-900"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200 bg-white text-gray-900"
                      placeholder="+94 77 xxx xxxx"
                    />
                  </div>
                </div>

                {/* Service and Date */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Photography Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200 bg-white text-gray-900"
                      required
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
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200 bg-white text-gray-900"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Tell Us About Your Vision *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 resize-none transition-all duration-200 bg-white text-gray-900"
                    placeholder="Describe your photography needs, style preferences, location ideas, or any special requirements..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      submitStatus === "success"
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800 text-sm">
                          Thank you! Your message has been sent successfully.
                          We'll get back to you soon.
                        </p>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-800 text-sm">
                          Sorry, there was an error sending your message. Please
                          try again or contact us directly.
                        </p>
                      </>
                    )}
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. Your information is kept private and
                  secure.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Professional Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Camera className="w-5 h-5 text-gray-700" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2 text-sm">
              Personalized Approach
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every session is tailored to your unique vision and story
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-5 h-5 text-gray-700" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2 text-sm">
              Professional Quality
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              High-end equipment and expert techniques for exceptional results
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-5 h-5 text-gray-700" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2 text-sm">
              Timely Delivery
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professionally edited photos delivered within 1-2 weeks
            </p>
          </div>
        </div>

        {/* Direct Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-3 font-serif">
              Prefer to speak directly?
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Call us for immediate assistance and to discuss your photography
              needs
            </p>
            <a
              href="tel:+94777990726"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              +94 77 799 0726
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VintageContactForm;
