"use client";

import React, { useState, useEffect } from "react";

const VintagePackagePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    plannedDate: "",
    location: "",
    makeupArtist: "",
  });

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Background images for the page
  const backgroundImages = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
  ];

  // Shoot type options
  const shootTypes = [
    { value: "wedding", label: "Wedding Photography" },
    { value: "homecoming", label: "Homecoming Session" },
    { value: "engagement", label: "Engagement Shoot" },
    { value: "casual", label: "Casual Session" },
    { value: "filming", label: "Video/Filming" },
  ];

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.shootType) newErrors.shootType = "Please select a shoot type";
    if (!formData.plannedDate) newErrors.plannedDate = "Please select a date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        shootType: "",
        plannedDate: "",
        location: "",
        makeupArtist: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-3000 ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating vintage elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animation: `float 12s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <div className="w-4 h-4 bg-amber-300 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1
              className="text-4xl mt-5 md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Book Your Dream Session
            </h1>

            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Let's create something magical together. Tell us about your vision
              and we'll make it come to life.
            </p>
          </div>

          {/* Main Form Container */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Package Info */}
            <div className="space-y-8 animate-slide-left">
              {/* Package Highlights */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 font-serif">
                  What's Included
                </h3>

                <div className="space-y-4">
                  {[
                    { text: "Aesthetic vintage-style photography sessions" },
                    { text: "Vintage charm in every captured moment" },
                    { text: "Elegant composition and timeless beauty" },
                    { text: "Professional editing with vintage aesthetics" },
                    { text: "High-quality digital gallery delivery" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-amber-400 rounded-sm"
                      ></div>
                    ))}
                  </div>
                </div>
                <blockquote className="text-white/90 italic mb-4 text-lg">
                  "The vintage photography session exceeded all our
                  expectations. Every shot feels like a piece of art!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b605?w=50&h=50&fit=crop&crop=face"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-2 border-amber-400"
                  />
                  <div>
                    <p className="text-white font-semibold">Sarah & James</p>
                    <p className="text-amber-200 text-sm">Wedding Couple</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="animate-slide-right">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2 font-serif drop-shadow-lg">
                    Book Your Session
                  </h2>
                  <p className="text-white/90 drop-shadow-md">
                    Fill out the details below and we'll get back to you soon!
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-white font-semibold mb-2 drop-shadow-md">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 bg-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white/40 ${
                        errors.name
                          ? "border-red-400 focus:border-red-500"
                          : "border-white/30 focus:border-gray-400"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-300 text-sm mt-1 drop-shadow-md">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2 drop-shadow-md">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 bg-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white/40 ${
                          errors.email
                            ? "border-red-400 focus:border-red-500"
                            : "border-white/30 focus:border-gray-400"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-300 text-sm mt-1 drop-shadow-md">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2 drop-shadow-md">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 bg-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white/40 ${
                          errors.phone
                            ? "border-red-400 focus:border-red-500"
                            : "border-white/30 focus:border-gray-400"
                        }`}
                        placeholder="+94 77 xxx xxxx"
                      />
                      {errors.phone && (
                        <p className="text-red-300 text-sm mt-1 drop-shadow-md">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Shoot Type Selection */}
                  <div>
                    <label className="block text-white font-semibold mb-3 drop-shadow-md">
                      Type of Shoot *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {shootTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white ${
                            formData.shootType === type.value
                              ? "border-gray-400 border-4 shadow-lg bg-white/30"
                              : "border-white/30 hover:border-white/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="shootType"
                            value={type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex items-center justify-center">
                            <span className="font-medium text-center drop-shadow-md">
                              {type.label}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.shootType && (
                      <p className="text-red-300 text-sm mt-1 drop-shadow-md">
                        {errors.shootType}
                      </p>
                    )}
                  </div>

                  {/* Date and Location */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Planned Date *
                      </label>
                      <input
                        type="date"
                        name="plannedDate"
                        value={formData.plannedDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 bg-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white/40 ${
                          errors.plannedDate
                            ? "border-red-400 focus:border-red-500"
                            : "border-gray-400 focus:border-amber-600"
                        }`}
                      />
                      {errors.plannedDate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.plannedDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Location (Optional)
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl border-2 transition-all duration-300 bg-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white/40"
                        placeholder="Preferred location"
                      />
                    </div>
                  </div>

                  {/* Makeup Artist */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Makeup Artist Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="makeupArtist"
                      value={formData.makeupArtist}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border-2 transition-all duration-300 bg-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white/40"
                      placeholder="Enter makeup artist name if you have one"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 ${
                      isSubmitting
                        ? "bg-gray-400 text-amber-900 cursor-not-allowed"
                        : "bg-gray-400 hover:from-amber-700 hover:to-orange-700 text-white"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-900"></div>
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <span>Book My Session</span>
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
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div>
                            <p className="text-green-800 font-semibold">
                              Booking Request Sent!
                            </p>
                            <p className="text-green-700 text-sm">
                              We'll contact you within 24 hours to confirm your
                              session details.
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div>
                            <p className="text-red-800 font-semibold">
                              Something went wrong
                            </p>
                            <p className="text-red-700 text-sm">
                              Please try again or contact us directly.
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  <p className="text-sm text-gray-100 text-center">
                    * Required fields. We'll get back to you within 24 hours
                    with pricing and availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out 0.2s both;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default VintagePackagePage;
