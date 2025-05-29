"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Camera,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MapPin,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Packages", href: "/packages" }, // New packages link
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-amber-200/50"
            : "bg-black/20 backdrop-blur-md border-b border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section - Clean logo only */}
            <div className="flex items-center">
              <div className="relative">
                <a href="/">
                  <img
                    src="/logo.png"
                    alt="Bygone Era - Vintage Photography"
                    className={`object-contain transition-all duration-300 hover:scale-110 cursor-pointer ${
                      isScrolled
                        ? "w-16 h-16 lg:w-20 lg:h-20"
                        : "w-20 h-20 lg:w-44 lg:h-44"
                    }`}
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-lg animate-pulse"></div>
              </div>
            </div>

            {/* Desktop Navigation - Simplified */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-amber-900 hover:text-amber-700"
                      : "text-white hover:text-amber-300"
                  } ${
                    item.name === "Packages"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-orange-600"
                      : ""
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.name !== "Packages" && (
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-amber-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Contact Info - Desktop only */}
            <div className="hidden xl:flex items-center space-x-4">
              <a
                href="tel:+94777990726"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "bg-amber-100 text-amber-900 hover:bg-amber-200"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+94 77 799 0726</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-amber-100 text-amber-900 hover:bg-amber-200"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Improved */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/98 backdrop-blur-xl border-t border-amber-200/50 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`block py-3 px-4 font-medium rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 ${
                    item.name === "Packages"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                      : "text-amber-900 hover:bg-amber-50 hover:text-amber-700"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Contact Section */}
              <div className="pt-4 border-t border-amber-200/50 space-y-3">
                <a
                  href="tel:+94777990726"
                  className="flex items-center space-x-3 py-3 px-4 text-amber-900 rounded-xl hover:bg-amber-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span>+94 77 799 0726</span>
                </a>

                <a
                  href="mailto:bygoneeraartist@gmail.com"
                  className="flex items-center space-x-3 py-3 px-4 text-amber-900 rounded-xl hover:bg-amber-50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span>bygoneeraartist@gmail.com</span>
                </a>

                <div className="flex items-center space-x-3 py-3 px-4 text-amber-900">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span>Kuliyapitiya, Sri Lanka</span>
                </div>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-amber-200/50">
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://web.facebook.com/bygoneeraartist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-100 hover:bg-amber-200 text-amber-900 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/bygoneeraartist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-100 hover:bg-amber-200 text-amber-900 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <a
                  href="/packages"
                  onClick={handleLinkClick}
                  className="block w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Your Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");
      `}</style>
    </>
  );
};

export default Navbar;
