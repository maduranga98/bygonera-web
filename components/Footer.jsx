"use client";

import React from "react";
import {
  Camera,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Instagram,
  Facebook,
  Star,
  Award,
  Users,
  ArrowUp,
} from "lucide-react";

const VintageFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      "Wedding Photography",
      "Portrait Sessions",
      "Family Photography",
      "Fashion Photography",
      "Event Photography",
      "Photo Restoration",
    ],
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Services", href: "#services" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Vintage texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)
            `,
              backgroundSize: "300px 300px, 400px 400px",
            }}
          />
        </div>

        {/* Floating vintage elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 4) * 25}%`,
                animation: `float 12s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              <Camera className="w-3 h-3 text-amber-300" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif">Bygone Era</h3>
                  <p className="text-amber-200 italic">Artist</p>
                </div>
              </div>

              <p className="text-amber-100 mb-6 leading-relaxed">
                Capturing timeless elegance through vintage-inspired
                photography. Every moment becomes a treasured memory with our
                artistic touch.
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-amber-200 text-sm">5.0 Rating</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/bygoneeraartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/bygoneeraartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 font-serif flex items-center">
                <Award className="w-5 h-5 mr-2 text-amber-400" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-amber-200 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <div className="w-1 h-1 bg-amber-400 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 font-serif flex items-center">
                <Heart className="w-5 h-5 mr-2 text-amber-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-amber-200 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <div className="w-1 h-1 bg-amber-400 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 font-serif flex items-center">
                <Users className="w-5 h-5 mr-2 text-amber-400" />
                Get In Touch
              </h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="bg-amber-500/20 p-2 rounded-lg group-hover:bg-amber-500/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-amber-200 text-sm">Phone</p>
                    <a
                      href="tel:+94777990726"
                      className="text-white hover:text-amber-300 transition-colors"
                    >
                      +94 77 799 0726
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="bg-amber-500/20 p-2 rounded-lg group-hover:bg-amber-500/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-amber-200 text-sm">Email</p>
                    <a
                      href="mailto:bygoneeraartist@gmail.com"
                      className="text-white hover:text-amber-300 transition-colors"
                    >
                      bygoneeraartist@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="bg-amber-500/20 p-2 rounded-lg group-hover:bg-amber-500/30 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-amber-200 text-sm">Location</p>
                    <p className="text-white">Kuliyapitiya, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="bg-amber-500/20 p-2 rounded-lg group-hover:bg-amber-500/30 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-amber-200 text-sm">Working Hours</p>
                    <p className="text-white text-sm">Mon - Sat: 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Book Session
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent h-px"></div>
          <div className="flex justify-center">
            <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center border-4 border-amber-900">
              <Heart className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-amber-200 text-sm">
              <p>© {currentYear} Bygone Era Artist. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Lumora Ventures Credit */}
            <div className="flex items-center space-x-3">
              <span className="text-amber-200 text-sm">Solution by</span>
              <a
                href="https://www.lumoraventures.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 border border-amber-300/30"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">L</span>
                </div>
                <span className="text-white font-medium text-sm">
                  Lumora Ventures PVT Ltd
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-20"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(2deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default VintageFooter;
