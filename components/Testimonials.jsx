"use client";

import React, { useState, useEffect } from "react";
import {
  Quote,
  Star,
  Camera,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const VintageTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Compact testimonials with related background images
  const testimonials = [
    {
      id: 1,
      name: "Amara & Kasun Perera",
      role: "Wedding Couple",
      text: "Our wedding photos are absolutely breathtaking! The vintage aesthetic captured the timeless romance we always dreamed of.",
      photo:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop",
      category: "Wedding",
    },
    {
      id: 2,
      name: "Dilshan Fernando",
      role: "Executive",
      text: "The vintage portrait session exceeded all expectations. The photographer's attention to detail is remarkable.",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
      category: "Portrait",
    },
    {
      id: 3,
      name: "Malika Jayawardena",
      role: "Fashion Designer",
      text: "The artistic vision created the most stunning fashion portfolio. Every shot feels like art from a bygone era.",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=300&h=300&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=1920&h=1080&fit=crop",
      category: "Fashion",
    },
    {
      id: 4,
      name: "Rajesh & Priya",
      role: "Anniversary Couple",
      text: "Celebrating our 25th anniversary with these vintage-inspired photos was magical. Beautiful work!",
      photo:
        "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=300&h=300&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1920&h=1080&fit=crop",
      category: "Couple",
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Dynamic Background - Changes with each testimonial */}
      <div className="absolute inset-0">
        <img
          key={current.id}
          src={current.backgroundImage}
          alt={`${current.name}'s photography session`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out sepia-[0.4] brightness-60"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-amber-900/70 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <img
            src="\logo2.png"
            alt="logo"
            className="mb-6 inline-flex items-center justify-center w-60"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Client Stories
          </h2>

          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
            <Quote className="w-5 h-5 text-amber-300 fill-current" />
            <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
          </div>
        </div>

        {/* Compact Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 border border-amber-200/50">
            <div className="grid md:grid-cols-4 gap-6 items-center">
              {/* Compact Client Section */}
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-3 border-amber-300 shadow-xl sepia-[0.2] transition-all duration-700"
                  />
                  {/* <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-amber-500 to-orange-500 p-1.5 rounded-full shadow-lg">
                    <Camera className="w-3 h-3 text-white" />
                  </div> */}
                </div>

                <h4 className="text-lg font-bold text-amber-900 mb-1 font-serif">
                  {current.name}
                </h4>
                <p className="text-amber-700 text-sm mb-2">{current.role}</p>
                <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
                  {current.category}
                </span>

                {/* Compact Rating */}
                <div className="flex justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-amber-500 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Compact Testimonial Content */}
              <div className="md:col-span-3">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-200 fill-current opacity-40" />

                  <blockquote className="text-base md:text-lg text-amber-900 leading-relaxed font-light italic pl-4 pr-2">
                    "{current.text}"
                  </blockquote>

                  <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-amber-200 fill-current opacity-40 rotate-180" />
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-start space-x-4 mt-4 pt-3 border-t border-amber-200">
                  <div className="flex items-center space-x-1 text-amber-700">
                    <Heart className="w-3 h-3 text-red-500 fill-current" />
                    <span className="text-xs">Verified</span>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-700">
                    <Camera className="w-3 h-3 text-amber-600" />
                    <span className="text-xs">Professional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Navigation */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Compact Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? "w-6 h-2 bg-white shadow-lg"
                      : "w-2 h-2 bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-3">
            <p className="text-white/70 text-xs">
              {currentTestimonial + 1} / {testimonials.length}
            </p>
          </div>
        </div>

        {/* Compact CTA */}
        <div className="text-center mt-10">
          <div className="bg-gradient-to-r from-amber-600/90 to-orange-600/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl max-w-2xl mx-auto border border-amber-400/30">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-serif">
              Create Your Story
            </h3>
            <p className="text-amber-100 text-sm mb-4">
              Join our satisfied clients and capture your moments with vintage
              elegance
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white hover:bg-amber-50 text-amber-700 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Session
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-amber-700 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VintageTestimonials;
