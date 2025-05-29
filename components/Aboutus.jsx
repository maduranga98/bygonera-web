"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [counters, setCounters] = useState({
    clients: 0,
    sessions: 0,
    years: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Target numbers for animation
  const targetNumbers = {
    clients: 500,
    sessions: 1000,
    years: 5,
  };

  // Portfolio images that subtly showcase work
  const portfolioImages = [
    "/aboutus/img6.jpg",
    "/aboutus/img7.jpg",
    "/aboutus/img8.jpg",
    "/aboutus/img9.jpg",
    "/aboutus/img10.jpg",
    "/aboutus/img11.jpg",
  ];

  // Fixed positions for floating elements to prevent hydration mismatch
  const floatingElements = [
    { left: 10, top: 15, size: "w-3 h-3", delay: 0, duration: 8 },
    { left: 85, top: 25, size: "w-2 h-2", delay: 1, duration: 9 },
    { left: 20, top: 70, size: "w-4 h-4", delay: 2, duration: 7 },
    { left: 70, top: 80, size: "w-3 h-3", delay: 3, duration: 10 },
    { left: 45, top: 40, size: "w-2 h-2", delay: 4, duration: 8 },
    { left: 90, top: 60, size: "w-3 h-3", delay: 5, duration: 9 },
    { left: 15, top: 90, size: "w-2 h-2", delay: 6, duration: 7 },
    { left: 60, top: 10, size: "w-4 h-4", delay: 7, duration: 11 },
    { left: 35, top: 55, size: "w-3 h-3", delay: 8, duration: 8 },
    { left: 80, top: 35, size: "w-2 h-2", delay: 9, duration: 9 },
    { left: 5, top: 45, size: "w-3 h-3", delay: 2, duration: 10 },
    { left: 95, top: 20, size: "w-2 h-2", delay: 4, duration: 8 },
    { left: 25, top: 85, size: "w-4 h-4", delay: 6, duration: 9 },
    { left: 75, top: 65, size: "w-3 h-3", delay: 8, duration: 7 },
    { left: 50, top: 95, size: "w-2 h-2", delay: 1, duration: 11 },
    { left: 40, top: 30, size: "w-3 h-3", delay: 3, duration: 8 },
    { left: 65, top: 75, size: "w-2 h-2", delay: 5, duration: 9 },
    { left: 30, top: 5, size: "w-4 h-4", delay: 7, duration: 10 },
    { left: 85, top: 50, size: "w-3 h-3", delay: 9, duration: 8 },
    { left: 55, top: 15, size: "w-2 h-2", delay: 0, duration: 9 },
  ];

  // Counter animation effect (slower)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate clients counter (slower)
          let clientsCount = 0;
          const clientsInterval = setInterval(() => {
            clientsCount += 8;
            if (clientsCount >= targetNumbers.clients) {
              clientsCount = targetNumbers.clients;
              clearInterval(clientsInterval);
            }
            setCounters((prev) => ({ ...prev, clients: clientsCount }));
          }, 80);

          // Animate sessions counter (slower)
          let sessionsCount = 0;
          const sessionsInterval = setInterval(() => {
            sessionsCount += 12;
            if (sessionsCount >= targetNumbers.sessions) {
              sessionsCount = targetNumbers.sessions;
              clearInterval(sessionsInterval);
            }
            setCounters((prev) => ({ ...prev, sessions: sessionsCount }));
          }, 60);

          // Animate years counter (slower)
          let yearsCount = 0;
          const yearsInterval = setInterval(() => {
            yearsCount += 1;
            if (yearsCount >= targetNumbers.years) {
              yearsCount = targetNumbers.years;
              clearInterval(yearsInterval);
            }
            setCounters((prev) => ({ ...prev, years: yearsCount }));
          }, 600);
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById("stats-section");
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Auto-advance images
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, portfolioImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Dynamic Background Slideshow using portfolio images */}
      <div className="absolute inset-0">
        {portfolioImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[6000ms] ${
              Math.floor(currentImageIndex / 2) % portfolioImages.length ===
              index
                ? "opacity-50"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/40 via-orange-700/30 to-red-800/40"></div>

        {/* Fixed floating vintage elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements.map((element, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
                animation: `float ${element.duration}s ease-in-out infinite alternate`,
              }}
            >
              <div
                className={`${element.size} border border-amber-300 rounded-full opacity-60`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Floating Header */}
        <div className="text-center mb-20">
          <img src="\logo2.png" alt="Logo" className="w-64  mx-auto mb-6" />
          <p className="text-2xl text-amber-100 font-light italic max-w-3xl mx-auto drop-shadow-lg">
            "More than just photographs, it's your story in art"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Dynamic Portfolio Showcase */}
          <div className="space-y-6">
            {/* Main Portfolio Slider - Removed wide frame */}
            <div className="relative group">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl h-96 shadow-2xl">
                  <img
                    src={portfolioImages[currentImageIndex]}
                    alt="Portfolio showcase"
                    className="w-full h-full object-cover transition-all duration-1000 sepia-[0.4] hover:sepia-0 transform hover:scale-105"
                  />

                  {/* Navigation Controls */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-700 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-700 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Centered Image Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {portfolioImages.length}
                  </div>
                </div>

                {/* Portfolio Thumbnails */}
                <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                  {portfolioImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? "border-amber-500 shadow-lg scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover sepia-[0.3]"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Story */}
          <div>
            <div className="bg-amber-50/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-amber-200/50 relative overflow-hidden vintage-paper-texture">
              {/* Vintage paper texture overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100"></div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.03) 0%, transparent 50%), 
                    radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(101, 71, 41, 0.02) 0%, transparent 70%)
                  `,
                    backgroundSize: "100px 100px, 150px 150px, 200px 200px",
                  }}
                ></div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    linear-gradient(45deg, transparent 30%, rgba(139, 69, 19, 0.02) 40%, transparent 50%),
                    linear-gradient(-45deg, transparent 30%, rgba(160, 82, 45, 0.02) 40%, transparent 50%)
                  `,
                  }}
                ></div>
              </div>

              {/* Decorative vintage corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>

              <h3 className="text-4xl font-bold text-amber-900 mb-6 font-serif relative">
                Our Story
              </h3>
              <div className="space-y-4 text-amber-800/90 leading-relaxed relative">
                <p className="text-lg font-light">
                  At Bygone Era, we don't just capture moments-we create
                  timeless, elegant memories filled with emotion and artistry.
                  Every photograph tells a story, preserving the feelings that
                  make it special. We take the time to understand your vision,
                  uncovering what matters most to you.
                </p>
                <p>
                  Through a personalized approach, we craft a unique plan to
                  bring your dream to life. Behind the lens is Manusha
                  Hasaranga, an artist with nearly six years of experience. With
                  a passion for storytelling, he transforms photographs into
                  emotions you can relive forever. On your most cherished day,
                  we promise more than just images —we create memories that feel
                  as beautiful as they look. Because at Bygone Era, your moments
                  deserve to be timeless.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Row - More Attractive without Icons */}
        <div id="stats-section" className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: counters.clients,
                suffix: "+",
                label: "Happy Clients",
                gradient: "from-amber-500 via-orange-500 to-yellow-500",
                shadowColor: "shadow-amber-500/50",
                borderGradient: "from-amber-400 to-orange-400",
              },
              {
                number: counters.sessions,
                suffix: "+",
                label: "Sessions",
                gradient: "from-orange-500 via-red-500 to-pink-500",
                shadowColor: "shadow-orange-500/50",
                borderGradient: "from-orange-400 to-red-400",
              },
              {
                number: counters.years,
                suffix: "+",
                label: "Years Experience",
                gradient: "from-red-500 via-pink-500 to-purple-500",
                shadowColor: "shadow-red-500/50",
                borderGradient: "from-red-400 to-pink-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>

                {/* Main Card */}
                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-amber-200/30 text-center hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden">
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100"></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                        radial-gradient(circle at 30% 30%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, rgba(160, 82, 45, 0.05) 0%, transparent 50%)
                      `,
                        backgroundSize: "100px 100px, 150px 150px",
                      }}
                    ></div>
                  </div>

                  {/* Number with Gradient Text */}
                  <div className="relative mb-4">
                    <div
                      className={`text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2 font-serif`}
                    >
                      {stat.number}
                      <span className="text-4xl">{stat.suffix}</span>
                    </div>

                    {/* Animated underline */}
                    <div className="w-20 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
                  </div>

                  {/* Label */}
                  <div className="text-amber-700 font-medium text-lg tracking-wide">
                    {stat.label}
                  </div>

                  {/* Hover Effect - Gradient Orb */}
                  <div
                    className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
