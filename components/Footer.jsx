"use client";

import React from "react";
import {
  Camera,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

const VintageFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #6b7280 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium font-serif">
                    Bygone Era Artist
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Capturing timeless elegance through vintage-inspired
                photography. Every moment becomes a treasured memory with our
                artistic touch.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                <a
                  href="https://web.facebook.com/bygoneeraartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-lg transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4 text-gray-300" />
                </a>
                <a
                  href="https://www.instagram.com/bygoneeraartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-lg transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4 font-serif">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-medium mb-4 font-serif">
                Contact Information
              </h4>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-800 p-2 rounded-lg mt-0.5">
                    <Phone className="w-3 h-3 text-gray-400" />
                  </div>
                  <div>
                    <a
                      href="tel:+94777990726"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      +94 77 799 0726
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gray-800 p-2 rounded-lg mt-0.5">
                    <Mail className="w-3 h-3 text-gray-400" />
                  </div>
                  <div>
                    <a
                      href="mailto:bygoneeraartist@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      bygoneeraartist@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gray-800 p-2 rounded-lg mt-0.5">
                    <MapPin className="w-3 h-3 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      Kuliyapitiya, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} Bygone Era Artist. All rights reserved.</p>
            </div>

            {/* Lumora Ventures Credit */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Solution by</span>
              <a
                href="https://www.lumoraventures.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-colors duration-200"
              >
                <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-white">L</span>
                </div>
                <span className="text-gray-300 font-medium text-sm">
                  Lumora Ventures
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg shadow-lg transition-colors duration-200 z-20"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-300" />
        </button>
      </div>
    </footer>
  );
};

export default VintageFooter;
