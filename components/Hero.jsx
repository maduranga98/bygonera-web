"use client";

import React, { useState, useEffect } from "react";
import {
  Camera,
  Heart,
  Star,
  ArrowRight,
  Play,
  Pause,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const VintagePhotographyHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Hero images array
  const heroImages = [
    {
      url: "/img1.jpg",
      alt: "Vintage couple portrait with warm golden tones",
      caption: "Timeless Romance",
      title: "Capturing Love Stories",
    },
    {
      url: "/img2.jpg",
      alt: "Couple reading together in vintage setting",
      caption: "Intimate Moments",
      title: "Every Glance Matters",
    },
    {
      url: "/img3.jpg",
      alt: "Vintage couple by scenic lake landscape",
      caption: "Natural Beauty",
      title: "Where Nature Meets Love",
    },
    {
      url: "/img4.jpg",
      alt: "Dramatic landscape with couple silhouette",
      caption: "Epic Landscapes",
      title: "Stories Written in Light",
    },
    {
      url: "/img5.jpg",
      alt: "Golden hour couple portrait in rural setting",
      caption: "Golden Hour Magic",
      title: "When Time Stands Still",
    },
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, heroImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const currentImage = heroImages[currentImageIndex];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full Page Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-90" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover img-vintage-filter"
              />
            </div>
          ))}
        </div>
        {/* Vintage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-amber-900/50 to-amber-900/70"></div>
        <div className="absolute inset-0 bg-vintage-texture opacity-20"></div>
      </div>

      {/* Corner Frame Elements - Over the Image */}
      <div className="corner-frame corner-tl"></div>
      <div className="corner-frame corner-tr"></div>
      <div className="corner-frame corner-bl"></div>
      <div className="corner-frame corner-br"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo Section - Larger Size */}
          <div className="mb-8">
            <img
              src="/logo2.png"
              alt="Bygone Era Logo"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain mx-auto mb-6 vintage-logo-glow"
            />
            <h1
              className="text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-wide mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Bygone Era
            </h1>
            <p
              className="text-amber-200/90 text-xl md:text-2xl italic"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Elegance in Vintage Frames
            </p>
          </div>

          {/* Dynamic Title Based on Current Image */}
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 animate-fade-in text-vintage-shadow"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {currentImage.title}
          </h2>

          {/* Dynamic Caption */}
          <p
            className="text-xl md:text-2xl text-amber-200 mb-8 italic animate-slide-up"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            {currentImage.caption}
          </p>

          {/* Main Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Specializing in vintage-inspired photography that captures the
            elegance and romance of bygone eras. Every frame tells a story,
            every moment becomes a treasured memory.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-amber-200 mr-2 group-hover:animate-pulse" />
                <span className="text-2xl md:text-3xl font-light text-white">
                  500+
                </span>
              </div>
              <p className="text-white/80 text-sm">Happy Couples</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-5 h-5 text-amber-200 mr-2 group-hover:animate-pulse" />
                <span className="text-2xl md:text-3xl font-light text-white">
                  5.0
                </span>
              </div>
              <p className="text-white/80 text-sm">Rating</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <Camera className="w-5 h-5 text-amber-200 mr-2 group-hover:animate-pulse" />
                <span className="text-2xl md:text-3xl font-light text-white">
                  1000+
                </span>
              </div>
              <p className="text-white/80 text-sm">Sessions</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-vintage-ghost group">
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-vintage-secondary group">
              <Phone className="w-5 h-5 mr-2" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white/80 text-sm md:text-base">
            <div className="flex items-center space-x-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+94 77 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>hello@bygoneera.lk</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 border border-amber-200/20">
          <button
            onClick={prevImage}
            className="text-white hover:text-amber-200 transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Previous image"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>

          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-150"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextImage}
            className="text-white hover:text-amber-200 transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Next image"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-white/30 mx-2"></div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white hover:text-amber-200 transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

        .corner-frame {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 3px solid rgba(255, 255, 255, 0.8);
          z-index: 15;
        }

        .corner-tl {
          top: 30px;
          left: 30px;
          border-right: none;
          border-bottom: none;
        }

        .corner-tr {
          top: 30px;
          right: 30px;
          border-left: none;
          border-bottom: none;
        }

        .corner-bl {
          bottom: 30px;
          left: 30px;
          border-right: none;
          border-top: none;
        }

        .corner-br {
          bottom: 30px;
          right: 30px;
          border-left: none;
          border-top: none;
        }

        .vintage-logo-glow {
          filter: drop-shadow(0 0 30px rgba(245, 158, 11, 0.4));
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-in-out;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .img-vintage-filter {
          filter: sepia(0.2) contrast(1.1) brightness(1.05) saturate(0.9);
        }

        .bg-vintage-texture {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(212, 165, 116, 0.1) 1px,
            transparent 0
          );
          background-size: 20px 20px;
        }

        .text-vintage-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .btn-vintage-ghost {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-vintage-ghost:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        .btn-vintage-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-vintage-secondary:hover {
          background: white;
          color: #92400e;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default VintagePhotographyHero;
