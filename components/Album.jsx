"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Heart,
  Star,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Share2,
  Bookmark,
  RotateCcw,
  Maximize2,
  Grid3X3,
  List,
} from "lucide-react";

const CreativeVintageGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [pageFlipping, setPageFlipping] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [viewMode, setViewMode] = useState("book");
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [bookmarkedImages, setBookmarkedImages] = useState(new Set());
  const [filterEffect, setFilterEffect] = useState("vintage");
  const [albumViewMode, setAlbumViewMode] = useState("carousel"); // 'carousel', 'grid'
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const autoplayRef = useRef(null);
  const carouselRef = useRef(null);

  // Enhanced album data with 6 albums
  const albums = [
    {
      id: 1,
      title: "Timeless Portraits",
      subtitle: "Classic Souls",
      theme: "Classic black & white portraits capturing timeless beauty",
      coverBg:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      ornament: "◊ ◊ ◊",
      year: "MCMXX",
      location: "Paris Studio",
      photographer: "Henri Beaumont",
      mood: "dramatic",
      era: "1920s",
      color: "sepia",
      category: "portraits",
      images: [
        {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
          title: "The Contemplative Soul",
          date: "March 15, 1923",
          story:
            "A moment of quiet reflection captured in the artist's private studio.",
        },
        {
          url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop",
          title: "Portrait of Elegance",
          date: "April 2, 1923",
          story:
            "The embodiment of grace and sophistication from the Jazz Age.",
        },
        {
          url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop",
          title: "Gentleman's Promise",
          date: "May 18, 1923",
          story:
            "A distinguished portrait that speaks of honor and determination.",
        },
      ],
    },
    {
      id: 2,
      title: "Golden Hour Romance",
      subtitle: "Love in Warm Light",
      theme: "Warm, dreamy couple sessions bathed in golden hour magic",
      coverBg:
        "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop",
      ornament: "❦ ❦ ❦",
      year: "MCMXXV",
      location: "Countryside Meadow",
      photographer: "Claire Dubois",
      mood: "romantic",
      era: "1920s",
      color: "warm",
      category: "couples",
      images: [
        {
          url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop",
          title: "Sunset Embrace",
          date: "September 12, 1925",
          story: "Love illuminated by nature's most beautiful light.",
        },
        {
          url: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=800&h=600&fit=crop",
          title: "Tender Moments",
          date: "September 13, 1925",
          story: "Gentle whispers shared beneath the evening sky.",
        },
      ],
    },
    {
      id: 3,
      title: "Vintage Weddings",
      subtitle: "Eternal Vows",
      theme: "Elegant matrimonial memories with vintage sophistication",
      coverBg:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      ornament: "✤ ✤ ✤",
      year: "MCMXXX",
      location: "Cathedral Gardens",
      photographer: "Augustus Wells",
      mood: "ceremonial",
      era: "1930s",
      color: "classical",
      category: "weddings",
      images: [
        {
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
          title: "Sacred Ceremony",
          date: "June 14, 1930",
          story: "The moment two hearts became one before God and family.",
        },
        {
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
          title: "Bridal Grace",
          date: "June 14, 1930",
          story: "Elegance embodied in silk and lace, radiant with joy.",
        },
      ],
    },
    {
      id: 4,
      title: "Urban Chronicles",
      subtitle: "City Life Stories",
      theme: "Street photography capturing the pulse of urban life",
      coverBg:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      ornament: "◢ ◣ ◤ ◥",
      year: "MCMXXXV",
      location: "Metropolitan Streets",
      photographer: "Marcus Stone",
      mood: "dynamic",
      era: "1930s",
      color: "monochrome",
      category: "street",
      images: [
        {
          url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
          title: "Morning Rush",
          date: "October 8, 1935",
          story: "The city awakens with purpose and determination.",
        },
        {
          url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
          title: "Evening Reflections",
          date: "October 9, 1935",
          story: "Shadows and light dance in the urban landscape.",
        },
      ],
    },
    {
      id: 5,
      title: "Nature's Canvas",
      subtitle: "Wilderness Poetry",
      theme: "Breathtaking landscapes frozen in time",
      coverBg:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      ornament: "⟐ ⟐ ⟐",
      year: "MCMXL",
      location: "Mountain Ranges",
      photographer: "Elena Winters",
      mood: "serene",
      era: "1940s",
      color: "natural",
      category: "landscape",
      images: [
        {
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          title: "Mountain Majesty",
          date: "July 20, 1940",
          story: "Where earth touches sky in perfect harmony.",
        },
        {
          url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
          title: "Forest Whispers",
          date: "July 21, 1940",
          story: "Ancient trees tell stories in the morning mist.",
        },
      ],
    },
    {
      id: 6,
      title: "Artistic Expressions",
      subtitle: "Creative Visions",
      theme: "Abstract and artistic interpretations of life and beauty",
      coverBg:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      ornament: "✦ ✧ ✩",
      year: "MCMXLV",
      location: "Artist Studio",
      photographer: "Vincent Artois",
      mood: "creative",
      era: "1940s",
      color: "artistic",
      category: "artistic",
      images: [
        {
          url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
          title: "Light & Shadow",
          date: "December 3, 1945",
          story: "Playing with contrasts to reveal hidden beauty.",
        },
        {
          url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
          title: "Abstract Dreams",
          date: "December 4, 1945",
          story: "Where reality meets imagination in perfect balance.",
        },
      ],
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoplay && selectedAlbum) {
      autoplayRef.current = setInterval(() => {
        setPageFlipping(true);
        setTimeout(() => {
          setCurrentImageIndex((prev) =>
            prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
          );
          setPageFlipping(false);
        }, 600);
      }, 4000);
    } else {
      clearInterval(autoplayRef.current);
    }

    return () => clearInterval(autoplayRef.current);
  }, [isAutoplay, selectedAlbum]);

  const openAlbum = (album) => {
    setIsOpening(true);
    setTimeout(() => {
      setSelectedAlbum(album);
      setCurrentImageIndex(0);
      setIsOpening(false);
    }, 1200);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setIsAutoplay(false);
    clearInterval(autoplayRef.current);
  };

  const toggleBookmark = (imageIndex) => {
    const newBookmarks = new Set(bookmarkedImages);
    const key = `${selectedAlbum.id}-${imageIndex}`;

    if (newBookmarks.has(key)) {
      newBookmarks.delete(key);
    } else {
      newBookmarks.add(key);
    }
    setBookmarkedImages(newBookmarks);
  };

  const nextImage = () => {
    if (selectedAlbum && !pageFlipping) {
      setPageFlipping(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) =>
          prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
        );
        setPageFlipping(false);
      }, 600);
    }
  };

  const prevImage = () => {
    if (selectedAlbum && !pageFlipping) {
      setPageFlipping(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) =>
          prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
        );
        setPageFlipping(false);
      }, 600);
    }
  };

  // Carousel navigation
  const nextSlide = () => {
    const maxSlides = Math.ceil(albums.length / getItemsPerSlide());
    setCurrentSlideIndex((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(albums.length / getItemsPerSlide());
    setCurrentSlideIndex((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3;
  };

  const filterClasses = {
    vintage: "sepia-[0.4] contrast-110 brightness-95 saturate-75",
    classic: "grayscale contrast-120 brightness-90",
    warm: "sepia-[0.2] saturate-110 brightness-105 contrast-105",
    cold: "hue-rotate-180 saturate-90 contrast-110",
    original: "",
  };

  // Enhanced Book Component
  const BookCover = ({ album, index, onClick }) => (
    <div
      className="group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:rotate-1 hover:-translate-y-4"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 p-2 rounded-lg shadow-2xl border-2 border-amber-800 aspect-[3/4] transform perspective-1000 hover:shadow-3xl transition-all duration-700">
        {/* Book Spine Shadows */}
        <div className="absolute -left-2 sm:-left-4 top-3 bottom-3 w-4 sm:w-8 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 rounded-l-lg shadow-xl transform -skew-y-2"></div>
        <div className="absolute -left-3 sm:-left-6 top-4 bottom-4 w-2 sm:w-4 bg-gradient-to-r from-amber-950 to-amber-900 rounded-l-lg opacity-60 transform -skew-y-1"></div>

        {/* Book Cover Content */}
        <div className="relative h-full bg-gradient-to-br from-amber-100 to-yellow-50 rounded-md overflow-hidden border border-amber-600">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={album.coverBg}
              alt={album.title}
              className="w-full h-full object-cover opacity-70 sepia-[0.6] brightness-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-transparent to-amber-800/60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/30 to-yellow-300/40 mix-blend-overlay"></div>
          </div>

          {/* Enhanced Typography */}
          <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 text-center">
            {/* Top Section */}
            <div className="flex-1 flex flex-col justify-start items-center">
              <div className="mb-3 sm:mb-6">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-700 to-yellow-700 rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="w-5 h-5 sm:w-8 sm:h-8 text-amber-100" />
                </div>
              </div>
              <div className="text-amber-800 text-lg sm:text-2xl font-serif tracking-widest mb-2 sm:mb-4">
                {album.ornament}
              </div>
              <div className="text-xs text-amber-600 font-serif tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                {album.era} • {album.location}
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex-2 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-900 mb-2 sm:mb-3 font-serif leading-tight tracking-wide transform group-hover:scale-105 transition-transform duration-300">
                {album.title}
              </h3>
              <div className="w-12 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-2 sm:mb-3"></div>
              <p className="text-amber-700 text-xs sm:text-sm font-serif italic tracking-wide mb-1 sm:mb-2">
                {album.subtitle}
              </p>
              <div className="text-xs text-amber-600 font-serif">
                By {album.photographer}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex-1 flex flex-col justify-end">
              <div className="text-amber-700 text-xs sm:text-sm font-serif tracking-widest mb-2 sm:mb-3">
                {album.year}
              </div>
              <div className="text-amber-800 text-xs font-serif tracking-widest border-t border-amber-600 pt-2 sm:pt-3">
                VINTAGE COLLECTION
              </div>
            </div>
          </div>

          {/* Corner Ornaments */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 sm:w-8 h-4 sm:h-8 border-l-2 sm:border-l-3 border-t-2 sm:border-t-3 border-amber-700 opacity-70"></div>
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 sm:w-8 h-4 sm:h-8 border-r-2 sm:border-r-3 border-t-2 sm:border-t-3 border-amber-700 opacity-70"></div>
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 sm:w-8 h-4 sm:h-8 border-l-2 sm:border-l-3 border-b-2 sm:border-b-3 border-amber-700 opacity-70"></div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 sm:w-8 h-4 sm:h-8 border-r-2 sm:border-r-3 border-b-2 sm:border-b-3 border-amber-700 opacity-70"></div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></div>
        </div>

        {/* Book Pages Effect */}
        <div className="absolute -right-1 top-2 bottom-2 w-2 sm:w-3 bg-gradient-to-b from-white via-amber-50 to-white rounded-r-sm shadow-inner border-r border-amber-300"></div>
        <div className="absolute -right-2 top-3 bottom-3 w-1 sm:w-2 bg-gradient-to-b from-amber-100 to-amber-200 rounded-r-sm opacity-80"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Enhanced Gallery Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-900 mb-4 sm:mb-6 font-serif">
            Our Vintage Collections
          </h2>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-4 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed px-4">
            Step into our world of timeless photography. Each collection is a
            carefully curated journey through different eras, moods, and
            stories.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-amber-200">
            <button
              onClick={() => setAlbumViewMode("carousel")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                albumViewMode === "carousel"
                  ? "bg-amber-500 text-white shadow-md"
                  : "text-amber-700 hover:bg-amber-100"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
              <span className="text-sm font-medium">Carousel</span>
            </button>
            <button
              onClick={() => setAlbumViewMode("grid")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                albumViewMode === "grid"
                  ? "bg-amber-500 text-white shadow-md"
                  : "text-amber-700 hover:bg-amber-100"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              <span className="text-sm font-medium">Grid</span>
            </button>
          </div>
        </div>

        {/* Dynamic Album Display */}
        {albumViewMode === "carousel" ? (
          /* Enhanced Carousel View */
          <div className="relative max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlideIndex * 100}%)`,
                }}
              >
                {Array.from({
                  length: Math.ceil(albums.length / getItemsPerSlide()),
                }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4"
                  >
                    {albums
                      .slice(
                        slideIndex * getItemsPerSlide(),
                        (slideIndex + 1) * getItemsPerSlide()
                      )
                      .map((album, index) => (
                        <BookCover
                          key={album.id}
                          album={album}
                          index={index}
                          onClick={() => openAlbum(album)}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-4 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-white rounded-full transition-all duration-300 shadow-2xl z-10 group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-4 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-white rounded-full transition-all duration-300 shadow-2xl z-10 group"
            >
              <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({
                length: Math.ceil(albums.length / getItemsPerSlide()),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex
                      ? "bg-amber-600 scale-125 shadow-lg"
                      : "bg-amber-300 hover:bg-amber-400 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Enhanced Grid View */
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {albums.map((album, index) => (
                <BookCover
                  key={album.id}
                  album={album}
                  index={index}
                  onClick={() => openAlbum(album)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Page Turning Animation */}
      {isOpening && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative">
            <div className="relative w-64 h-64 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-yellow-800 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-amber-100 to-yellow-50 rounded-md shadow-lg transform-gpu origin-left animate-[pageFlip1_1.2s_ease-in-out]"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-white to-amber-50 rounded-md shadow-lg transform-gpu origin-left animate-[pageFlip2_1.2s_ease-in-out_0.2s]"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-md shadow-lg transform-gpu origin-left animate-[pageFlip3_1.2s_ease-in-out_0.4s]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-12 translate-x-[-100%] animate-[shimmer_1.2s_ease-in-out_infinite]"></div>
            </div>
            <p className="text-white text-center mt-4 sm:mt-8 text-lg sm:text-xl font-serif animate-pulse">
              Opening the album...
            </p>
          </div>
        </div>
      )}

      {/* Enhanced Album Viewer Modal */}
      {selectedAlbum && !isOpening && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
          {/* Enhanced Control Bar */}
          <div className="relative z-[60] flex justify-between items-center p-2 sm:p-4 bg-gradient-to-r from-black/90 to-black/70 backdrop-blur-sm border-b border-amber-500/30">
            {/* Left Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={closeAlbum}
                className="px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 text-amber-900 rounded-full transition-all duration-300 font-serif text-sm shadow-xl border-2 border-amber-600 flex items-center space-x-1 sm:space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Close Album</span>
                <span className="sm:hidden">Close</span>
              </button>

              {/* View Mode Selector */}
              <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 rounded-full p-1 backdrop-blur-sm">
                {[
                  { mode: "book", icon: "📖" },
                  { mode: "polaroid", icon: "📷" },
                  { mode: "filmstrip", icon: "🎞️" },
                ].map((view) => (
                  <button
                    key={view.mode}
                    onClick={() => setViewMode(view.mode)}
                    className={`px-2 py-1 sm:px-3 sm:py-2 rounded-full text-sm transition-all duration-300 ${
                      viewMode === view.mode
                        ? "bg-amber-500 text-white shadow-lg"
                        : "text-amber-200 hover:bg-white/10"
                    }`}
                  >
                    {view.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Center Info */}
            <div className="hidden md:flex flex-col items-center text-center">
              <h3 className="text-white font-serif text-lg">
                {selectedAlbum.title}
              </h3>
              <p className="text-amber-200 text-sm">
                {currentImageIndex + 1} of {selectedAlbum.images.length}
              </p>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Filter Selector */}
              <select
                value={filterEffect}
                onChange={(e) => setFilterEffect(e.target.value)}
                className="bg-white/10 text-white border border-amber-500/30 rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="vintage">Vintage</option>
                <option value="classic">Classic</option>
                <option value="warm">Warm</option>
                <option value="cold">Cool</option>
                <option value="original">Original</option>
              </select>

              {/* Autoplay Control */}
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  isAutoplay
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white/10 text-amber-200 hover:bg-white/20"
                }`}
              >
                {isAutoplay ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>

              {/* Bookmark Control */}
              <button
                onClick={() => toggleBookmark(currentImageIndex)}
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  bookmarkedImages.has(
                    `${selectedAlbum.id}-${currentImageIndex}`
                  )
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white/10 text-amber-200 hover:bg-white/20"
                }`}
              >
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeAlbum}
                className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 flex items-center justify-center p-2 sm:p-4 perspective-1000 overflow-hidden">
            {viewMode === "book" && (
              /* Enhanced Book View */
              <div className="relative w-full h-full max-w-7xl max-h-[calc(100vh-120px)]">
                <div className="relative w-full h-full bg-gradient-to-br from-amber-900 to-yellow-800 rounded-lg shadow-2xl p-1 sm:p-2 md:p-6 transform-gpu">
                  <div className="w-full h-full bg-white rounded-md shadow-inner flex flex-col md:flex-row overflow-hidden">
                    {/* Left Page - Story Info */}
                    <div className="flex-1 bg-gradient-to-br from-amber-50 to-yellow-50 p-3 sm:p-4 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-amber-200 flex flex-col justify-center relative overflow-y-auto">
                      {pageFlipping && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-y-2 translate-x-[-100%] animate-[pageSlide_0.6s_ease-in-out] z-10"></div>
                      )}

                      <div className="text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                        <div className="mb-4 sm:mb-6 mx-auto">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto shadow-lg">
                            <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-amber-100" />
                          </div>
                        </div>

                        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-amber-900 mb-2 sm:mb-3 font-serif">
                          {selectedAlbum.images[currentImageIndex].title}
                        </h2>
                        <div className="w-16 sm:w-24 h-0.5 bg-amber-700 mx-auto mb-3 sm:mb-4"></div>

                        <p className="text-amber-600 text-sm md:text-base mb-4 sm:mb-6 italic">
                          {selectedAlbum.images[currentImageIndex].date}
                        </p>

                        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-3 sm:p-4 md:p-6 rounded-lg border-2 border-amber-200 shadow-inner mb-4 sm:mb-6 md:mb-8">
                          <p className="text-amber-800 text-sm sm:text-base leading-relaxed font-serif">
                            "{selectedAlbum.images[currentImageIndex].story}"
                          </p>
                        </div>

                        {/* Metadata */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm">
                          <div className="text-center">
                            <p className="text-amber-600 font-semibold">
                              Location
                            </p>
                            <p className="text-amber-800">
                              {selectedAlbum.location}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-amber-600 font-semibold">
                              Photographer
                            </p>
                            <p className="text-amber-800">
                              {selectedAlbum.photographer}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-amber-600 font-semibold">Era</p>
                            <p className="text-amber-800">
                              {selectedAlbum.era}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-amber-600 font-semibold">Mood</p>
                            <p className="text-amber-800 capitalize">
                              {selectedAlbum.mood}
                            </p>
                          </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 md:mb-8">
                          {selectedAlbum.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                if (!pageFlipping) {
                                  setPageFlipping(true);
                                  setTimeout(() => {
                                    setCurrentImageIndex(index);
                                    setPageFlipping(false);
                                  }, 300);
                                }
                              }}
                              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                                index === currentImageIndex
                                  ? "bg-amber-600 scale-125 shadow-lg"
                                  : "bg-amber-300 hover:bg-amber-400 hover:scale-110"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="text-amber-700 text-lg sm:text-2xl font-serif mb-4 sm:mb-8">
                          {selectedAlbum.ornament}
                        </div>
                      </div>
                    </div>

                    {/* Right Page - Image Display */}
                    <div className="flex-1 relative bg-gradient-to-br from-white to-amber-50 overflow-hidden">
                      {pageFlipping && (
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent transform skew-y-2 translate-x-[100%] animate-[pageSlide_0.6s_ease-in-out] z-20"></div>
                      )}

                      <div className="absolute inset-0 p-2 sm:p-4 md:p-8">
                        <div className="w-full h-full relative bg-white shadow-2xl rounded-sm overflow-hidden border-2 sm:border-4 border-amber-200">
                          <img
                            src={selectedAlbum.images[currentImageIndex].url}
                            alt={selectedAlbum.images[currentImageIndex].title}
                            className={`w-full h-full object-cover transition-all duration-500 ${filterClasses[filterEffect]}`}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-amber-100/5"></div>

                          {/* Photo Details Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 md:p-6">
                            <div className="text-white flex justify-between items-end">
                              <div>
                                <h3 className="text-base sm:text-lg md:text-xl font-serif mb-1">
                                  {
                                    selectedAlbum.images[currentImageIndex]
                                      .title
                                  }
                                </h3>
                                <p className="text-amber-200 text-xs sm:text-sm opacity-90">
                                  {selectedAlbum.images[currentImageIndex].date}{" "}
                                  • {selectedAlbum.year}
                                </p>
                              </div>
                              <div className="flex space-x-1 sm:space-x-2">
                                <button className="p-1 sm:p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                                <button className="p-1 sm:p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Photo Corners */}
                          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-4 sm:w-6 h-4 sm:h-6 border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-amber-400 opacity-70"></div>
                          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-4 sm:w-6 h-4 sm:h-6 border-r-2 sm:border-r-4 border-t-2 sm:border-t-4 border-amber-400 opacity-70"></div>
                          <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-4 sm:w-6 h-4 sm:h-6 border-l-2 sm:border-l-4 border-b-2 sm:border-b-4 border-amber-400 opacity-70"></div>
                          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-4 sm:w-6 h-4 sm:h-6 border-r-2 sm:border-r-4 border-b-2 sm:border-b-4 border-amber-400 opacity-70"></div>
                        </div>
                      </div>

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        disabled={pageFlipping}
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-4 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-white rounded-full transition-all duration-300 shadow-2xl z-30 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200" />
                      </button>
                      <button
                        onClick={nextImage}
                        disabled={pageFlipping}
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-4 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-white rounded-full transition-all duration-300 shadow-2xl z-30 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {viewMode === "polaroid" && (
              /* Enhanced Polaroid Stack View */
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
                  {selectedAlbum.images.map((image, index) => {
                    const offset = index - currentImageIndex;
                    const isActive = index === currentImageIndex;

                    return (
                      <div
                        key={index}
                        className={`absolute transition-all duration-700 cursor-pointer ${
                          isActive ? "z-20 scale-100 sm:scale-110" : "z-10"
                        }`}
                        style={{
                          transform: `translateX(${offset * 30}px) translateY(${
                            offset * 15
                          }px) rotate(${offset * 3}deg)`,
                          opacity:
                            Math.abs(offset) > 2
                              ? 0
                              : 1 - Math.abs(offset) * 0.3,
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <div className="bg-white p-3 sm:p-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                          <img
                            src={image.url}
                            alt={image.title}
                            className={`w-60 h-72 sm:w-80 sm:h-96 object-cover mb-3 sm:mb-4 ${filterClasses[filterEffect]}`}
                          />
                          <div className="text-center">
                            <h3 className="font-serif text-base sm:text-lg text-gray-800 mb-1">
                              {image.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {image.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {viewMode === "filmstrip" && (
              /* Enhanced Film Strip View */
              <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-lg overflow-hidden">
                <div className="relative w-full max-w-6xl h-64 sm:h-80 md:h-96 bg-black rounded-lg overflow-hidden border-2 sm:border-4 border-gray-800">
                  {/* Film perforations */}
                  <div className="absolute top-0 left-0 right-0 h-4 sm:h-6 md:h-8 bg-gray-900 flex justify-between items-center px-2 sm:px-4">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-sm"
                      ></div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 md:h-8 bg-gray-900 flex justify-between items-center px-2 sm:px-4">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-sm"
                      ></div>
                    ))}
                  </div>

                  {/* Film frames */}
                  <div className="flex items-center h-full py-4 sm:py-6 md:py-8 px-2 sm:px-4 space-x-2 sm:space-x-4 overflow-x-auto">
                    {selectedAlbum.images.map((image, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                          index === currentImageIndex
                            ? "scale-110 ring-2 sm:ring-4 ring-amber-400"
                            : "opacity-70 hover:opacity-100"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img
                          src={image.url}
                          alt={image.title}
                          className={`w-40 h-48 sm:w-52 sm:h-64 md:w-64 md:h-80 object-cover border-2 border-white ${filterClasses[filterEffect]}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Enhanced Footer CTA */}
      <div className="relative bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-50 py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-orange-400/5 to-yellow-500/10"></div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-orange-300/15 to-amber-400/15 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-300/25 to-amber-300/25 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-br from-amber-400/20 to-orange-300/20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #d97706 2px, transparent 2px)`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          {/* Enhanced Heading */}
          <div className="mb-6 sm:mb-8">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full shadow-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
              <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div> */}
            <img
              src="\logo2.png"
              alt="logo"
              className="inline-flex items-center justify-center w-60"
            />
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-serif bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent leading-tight">
              Ready to Create Your Own
              <br />
              <span className="relative">
                Vintage Legacy?
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-60"></div>
              </span>
            </h3>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-amber-800/80 mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Let's craft your personal collection of timeless memories. Every
            story deserves to be preserved with the elegance and artistry of
            vintage photography.
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-12">
            <button className="group relative w-full sm:w-auto bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 hover:from-amber-500 hover:via-orange-400 hover:to-yellow-400 text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span>Commission Your Collection</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
            </button>

            <button className="group relative w-full sm:w-auto bg-white/80 backdrop-blur-sm border-3 border-amber-400 text-amber-700 hover:text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span>View Portfolio</span>
                <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"></div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pageFlip1 {
          0% {
            transform: rotateY(0deg) scale(1);
          }
          50% {
            transform: rotateY(-90deg) scale(0.8);
          }
          100% {
            transform: rotateY(-180deg) scale(0.6);
          }
        }

        @keyframes pageFlip2 {
          0% {
            transform: rotateY(0deg) scale(1);
          }
          50% {
            transform: rotateY(-90deg) scale(0.8);
          }
          100% {
            transform: rotateY(-180deg) scale(0.6);
          }
        }

        @keyframes pageFlip3 {
          0% {
            transform: rotateY(0deg) scale(1);
          }
          50% {
            transform: rotateY(-90deg) scale(0.8);
          }
          100% {
            transform: rotateY(-180deg) scale(0.6);
          }
        }

        @keyframes shimmer {
          0% {
            transform: rotate(12deg) translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: rotate(12deg) translateX(200%);
            opacity: 0;
          }
        }

        @keyframes pageSlide {
          0% {
            transform: translateX(-100%) skewY(-2deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) skewY(2deg);
            opacity: 0;
          }
        }

        .bg-300% {
          background-size: 300% 300%;
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .border-l-3 {
          border-left-width: 3px;
        }
        .border-t-3 {
          border-top-width: 3px;
        }
        .border-r-3 {
          border-right-width: 3px;
        }
        .border-b-3 {
          border-bottom-width: 3px;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 500px;
          }
        }

        /* Enhanced responsive utilities */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Smooth scrolling for mobile */
        @media (max-width: 640px) {
          .overflow-x-auto {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
};

export default CreativeVintageGallery;
