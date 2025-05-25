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

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-scrolled" : "nav-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png"
              alt="Bygone Era Logo"
              className="w-24 h-24 md:w-20 md:h-20 lg:w-40 lg:h-40 object-contain vintage-logo-glow"
            />
            <div className="hidden sm:block">
              <h1
                className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide vintage-text vintage-title"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Bygone Era
              </h1>
              <p
                className="text-base md:text-lg lg:text-xl vintage-subtitle italic"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Vintage Photography
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link group relative"
              >
                <span>{item.name}</span>
                <div className="nav-underline"></div>
                <div className="nav-ornament"></div>
              </a>
            ))}
          </div>

          {/* Vintage Decorative Element */}
          <div className="hidden lg:flex items-center">
            <div className="vintage-ornamental-divider">
              <div className="ornament-line"></div>
              <div className="ornament-center">
                <Camera className="w-6 h-6" />
              </div>
              <div className="ornament-line"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden mobile-menu-btn"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu ${
          isMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        <div className="mobile-menu-content">
          {/* Mobile Navigation Links */}
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Contact Section */}
          <div className="px-6 py-4 border-t border-amber-200/20">
            <div className="space-y-3">
              <div className="mobile-contact-link">
                <MapPin className="w-5 h-5" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Mobile Social Links */}
          <div className="px-6 py-4 border-t border-amber-200/20">
            <div className="flex space-x-4 justify-center">
              <a href="#" className="social-icon">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

        .nav-transparent {
          background: rgba(139, 69, 19, 0.1);
          backdrop-filter: blur(15px);
          border-bottom: 2px solid rgba(212, 165, 116, 0.3);
          box-shadow: 0 2px 10px rgba(139, 69, 19, 0.1);
        }

        .nav-scrolled {
          background: rgba(254, 243, 199, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 2px solid rgba(212, 165, 116, 0.5);
          box-shadow: 0 4px 20px rgba(139, 69, 19, 0.15);
        }

        .vintage-text {
          color: #fef3c7;
          transition: color 0.3s ease;
          text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
        }

        .nav-scrolled .vintage-text {
          color: #78350f;
          text-shadow: 1px 1px 2px rgba(139, 69, 19, 0.2);
        }

        .vintage-title {
          letter-spacing: 0.1em;
        }

        .vintage-subtitle {
          color: #fde68a;
          transition: color 0.3s ease;
        }

        .nav-scrolled .vintage-subtitle {
          color: #d97706;
        }

        .vintage-logo-glow {
          filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.5)) sepia(0.1);
        }

        .nav-link {
          color: #fef3c7;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          padding: 0.75rem 0;
          text-decoration: none;
          letter-spacing: 0.05em;
          text-shadow: 1px 1px 2px rgba(139, 69, 19, 0.3);
        }

        .nav-scrolled .nav-link {
          color: #78350f;
          text-shadow: none;
        }

        .nav-link:hover {
          color: #fbbf24;
          transform: translateY(-2px);
        }

        .nav-underline {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24);
          transition: width 0.4s ease;
          border-radius: 1px;
        }

        .nav-link:hover .nav-underline {
          width: 120%;
        }

        .nav-ornament {
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #fbbf24;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-link:hover .nav-ornament {
          opacity: 1;
        }

        .vintage-ornamental-divider {
          display: flex;
          align-items: center;
          color: #fef3c7;
          transition: color 0.3s ease;
        }

        .nav-scrolled .vintage-ornamental-divider {
          color: #d97706;
        }

        .ornament-line {
          width: 40px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            currentColor,
            transparent
          );
        }

        .ornament-center {
          margin: 0 1rem;
          padding: 0.5rem;
          border: 1px solid currentColor;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }

        .contact-link {
          display: flex;
          align-items: center;
          color: white;
          font-weight: 400;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .nav-scrolled .contact-link {
          color: #92400e;
        }

        .contact-link:hover {
          color: #fbbf24;
          transform: translateY(-1px);
        }

        .btn-vintage-cta {
          background: linear-gradient(135deg, #d97706, #b45309);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-weight: 500;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
        }

        .btn-vintage-cta:hover {
          background: linear-gradient(135deg, #b45309, #92400e);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(217, 119, 6, 0.4);
        }

        .mobile-menu-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-scrolled .mobile-menu-btn {
          background: rgba(212, 165, 116, 0.1);
          color: #92400e;
          border-color: rgba(212, 165, 116, 0.3);
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(212, 165, 116, 0.2);
          box-shadow: 0 10px 25px rgba(139, 69, 19, 0.15);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .mobile-menu-open {
          max-height: 500px;
          opacity: 1;
        }

        .mobile-menu-closed {
          max-height: 0;
          opacity: 0;
        }

        .mobile-menu-content {
          padding: 1rem 0;
        }

        .mobile-nav-link {
          display: block;
          color: #92400e;
          font-weight: 500;
          font-size: 1.1rem;
          padding: 0.75rem 0;
          text-decoration: none;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
          padding-left: 1rem;
        }

        .mobile-nav-link:hover {
          color: #d97706;
          border-left-color: #fbbf24;
          background: rgba(251, 191, 36, 0.1);
          transform: translateX(8px);
        }

        .mobile-contact-link {
          display: flex;
          align-items: center;
          color: #92400e;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .mobile-contact-link:hover {
          color: #d97706;
        }

        .mobile-contact-link svg {
          margin-right: 0.75rem;
          color: #fbbf24;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(212, 165, 116, 0.1);
          color: #92400e;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(212, 165, 116, 0.3);
        }

        .social-icon:hover {
          background: #fbbf24;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .contact-link span {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .mobile-menu {
            margin: 0 1rem;
            border-radius: 1rem;
            border: 1px solid rgba(212, 165, 116, 0.2);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
