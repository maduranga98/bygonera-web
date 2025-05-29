"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";

const VintagePhotographyHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const heroImages = [
    {
      url: "/img2.webp",
      alt: "Couple reading together in vintage setting",
    },
    {
      url: "/img3.webp",
      alt: "Vintage couple by scenic lake landscape",
    },
    {
      url: "/img4.webp",
      alt: "Dramatic landscape with couple silhouette",
    },
    {
      url: "/img5.webp",
      alt: "Golden hour couple portrait in rural setting",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6">
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-6xl mx-auto">
          <div className="mb-12 animate-slide-up">
            <h1
              className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-light text-white leading-none tracking-wider"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Elegance in vintage frames
            </h1>
          </div>
        </div>

        <div className="flex-shrink-0 pb-12">
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#portfolio"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-white/50 px-10 py-4 rounded-full font-medium transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3"
            >
              <span className="text-lg">View Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="tel:+94777990726"
              className="group bg-white hover:bg-white/95 text-amber-900 hover:text-amber-800 px-10 py-4 rounded-full font-medium transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">Book Session</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap");

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }

        @supports (backdrop-filter: blur(10px)) {
          .backdrop-blur-md {
            backdrop-filter: blur(10px);
          }
        }

        @media (max-width: 768px) {
          .text-8xl {
            font-size: 3.5rem;
          }
          .text-7xl {
            font-size: 3rem;
          }
          .text-6xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VintagePhotographyHero;
