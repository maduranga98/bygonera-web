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

  // Concise testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Amara & Kasun Perera",
      role: "Wedding Couple",
      text: "Our wedding photos are absolutely breathtaking! The vintage aesthetic captured the timeless romance we always dreamed of.",
      photo:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Dilshan Fernando",
      role: "Corporate Executive",
      text: "The vintage portrait session exceeded all expectations. The photographer's attention to detail is remarkable.",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Malika Jayawardena",
      role: "Fashion Designer",
      text: "The artistic vision created the most stunning fashion portfolio. Every shot feels like a piece of art from a bygone era.",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=400&h=400&fit=crop",
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
    <section className="relative py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-800/60 to-red-900/80" />

        {/* Floating vintage elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
                animation: `float 8s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              <Camera className="w-6 h-6 text-amber-300" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6 shadow-xl">
            <Heart className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            What Our Clients Say
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-1 bg-amber-400 rounded-full" />
            <Quote className="w-6 h-6 text-amber-300 fill-current" />
            <div className="w-16 h-1 bg-amber-400 rounded-full" />
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-200/50">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Client Photo */}
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-amber-300 shadow-xl sepia-[0.3] transition-all duration-500"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-full shadow-lg">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-amber-900 mb-1 font-serif">
                  {current.name}
                </h4>
                <p className="text-amber-700 font-medium">{current.role}</p>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-amber-200 fill-current opacity-40" />

                  <blockquote className="text-lg md:text-xl text-amber-900 leading-relaxed font-light italic pl-6 mb-6">
                    "{current.text}"
                  </blockquote>

                  <Quote className="absolute -bottom-4 -right-4 w-12 h-12 text-amber-200 fill-current opacity-40 rotate-180" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={prevTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? "w-8 h-3 bg-white shadow-lg"
                      : "w-3 h-3 bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 md:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              Create Your Own Story
            </h3>
            <p className="text-amber-100 mb-6">
              Join our family of satisfied clients and capture your precious
              moments with vintage elegance
            </p>

            <button className="bg-white hover:bg-amber-50 text-amber-700 px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Your Session
            </button>
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
            transform: translateY(-10px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default VintageTestimonials;
