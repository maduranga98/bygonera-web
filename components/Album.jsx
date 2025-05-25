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
} from "lucide-react";

const CreativeVintageGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [pageFlipping, setPageFlipping] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [viewMode, setViewMode] = useState("book"); // 'book', 'polaroid', 'filmstrip'
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [bookmarkedImages, setBookmarkedImages] = useState(new Set());
  const [filterEffect, setFilterEffect] = useState("vintage");
  const autoplayRef = useRef(null);

  // Enhanced album data with more metadata
  const albums = [
    {
      id: 1,
      title: "Timeless Portraits",
      subtitle: "A Collection of Classic Souls",
      theme:
        "Classic black & white portraits that capture the essence of timeless beauty and character",
      coverBg:
        "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/475876270_122209848476081572_3536803345786777613_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE9WLzT0O72AVmKRnh58yXbQuyIhT2XO6VC7IiFPZc7pQb75jmcffzlFTWwf4TE8Yczxj0ElPrkGFuCnHZMUZCw&_nc_ohc=70MndRyZUxYQ7kNvwFKAHeB&_nc_oc=Adn5Jow87eyN3kDHw1nUIRxapli2CnbuqtfebVnKVJu4h93PLIzwgV6GU3AY9CYJfn1QSbWyLp-BvKpsdunPPkgB&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=0gm_g7uf-cl-hrk-7i1uvw&oh=00_AfLzoob-Vt7d_4frWukDpH0h-XIw3GPsQFeQv2I4TnQ98g&oe=68388F56",
      ornament: "◊ ◊ ◊",
      year: "MCMXX",
      location: "Paris Studio",
      photographer: "Henri Beaumont",
      mood: "dramatic",
      era: "1920s",
      color: "sepia",
      images: [
        {
          url: "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/475876270_122209848476081572_3536803345786777613_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE9WLzT0O72AVmKRnh58yXbQuyIhT2XO6VC7IiFPZc7pQb75jmcffzlFTWwf4TE8Yczxj0ElPrkGFuCnHZMUZCw&_nc_ohc=70MndRyZUxYQ7kNvwFKAHeB&_nc_oc=Adn5Jow87eyN3kDHw1nUIRxapli2CnbuqtfebVnKVJu4h93PLIzwgV6GU3AY9CYJfn1QSbWyLp-BvKpsdunPPkgB&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=0gm_g7uf-cl-hrk-7i1uvw&oh=00_AfLzoob-Vt7d_4frWukDpH0h-XIw3GPsQFeQv2I4TnQ98g&oe=68388F56",
          title: "The Contemplative Soul",
          date: "March 15, 1923",
          story:
            "A moment of quiet reflection captured in the artist's private studio.",
        },
        {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
          title: "Portrait of Elegance",
          date: "April 2, 1923",
          story:
            "The embodiment of grace and sophistication from the Jazz Age.",
        },
        {
          url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop",
          title: "Gentleman's Promise",
          date: "May 18, 1923",
          story:
            "A distinguished portrait that speaks of honor and determination.",
        },
        {
          url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop",
          title: "Eyes of Time",
          date: "June 7, 1923",
          story: "Windows to the soul, capturing the wisdom of generations.",
        },
      ],
    },
    {
      id: 2,
      title: "Golden Hour Romance",
      subtitle: "Love in Warm Light",
      theme:
        "Warm, dreamy couple sessions bathed in the magical glow of golden hour",
      coverBg:
        "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/472264616_122204505326081572_2685119203017689044_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE_-RQvmf9cUk-ZcMITLFAIGYqO7ldHHOYZio7uV0cc5qLO3CdHoUqbB-smx-O7GYT-ageex348qxTZFI5Qu0mb&_nc_ohc=rexRCik9h2EQ7kNvwGgbYBl&_nc_oc=Adm-obnPgKO54ZUlQczE732b_9-9gvyI-F3tH-RSL9-bI4xNQ6GfJ2NiB7rpNo8Sh3-GG4jbEwQ1GM40ZHE3dO_K&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=0rwcx82eLHiCFhgSdIaBMw&oh=00_AfJtGmDSFipdjaAXXN2IZvc9Xvx3tuOEnldAdnmcfDQybg&oe=6838786A",
      ornament: "❦ ❦ ❦",
      year: "MCMXXV",
      location: "Countryside Meadow",
      photographer: "Claire Dubois",
      mood: "romantic",
      era: "1920s",
      color: "warm",
      images: [
        {
          url: "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/472264616_122204505326081572_2685119203017689044_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE_-RQvmf9cUk-ZcMITLFAIGYqO7ldHHOYZio7uV0cc5qLO3CdHoUqbB-smx-O7GYT-ageex348qxTZFI5Qu0mb&_nc_ohc=rexRCik9h2EQ7kNvwGgbYBl&_nc_oc=Adm-obnPgKO54ZUlQczE732b_9-9gvyI-F3tH-RSL9-bI4xNQ6GfJ2NiB7rpNo8Sh3-GG4jbEwQ1GM40ZHE3dO_K&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=0rwcx82eLHiCFhgSdIaBMw&oh=00_AfJtGmDSFipdjaAXXN2IZvc9Xvx3tuOEnldAdnmcfDQybg&oe=6838786A",
          title: "Sunset Embrace",
          date: "September 12, 1925",
          story: "Love illuminated by nature's most beautiful light.",
        },
        {
          url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop",
          title: "Tender Moments",
          date: "September 13, 1925",
          story: "Gentle whispers shared beneath the evening sky.",
        },
        {
          url: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=800&h=600&fit=crop",
          title: "Dancing Hearts",
          date: "September 14, 1925",
          story: "Two souls moving as one in perfect harmony.",
        },
        {
          url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
          title: "Promise of Forever",
          date: "September 15, 1925",
          story: "A vow made eternal by the golden hour's blessing.",
        },
      ],
    },
    {
      id: 3,
      title: "Vintage Weddings",
      subtitle: "Eternal Vows & Promises",
      theme:
        "Elegant matrimonial memories captured with the grace and sophistication of yesteryear",
      coverBg:
        "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/470806573_122202447536081572_6676017755273783372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG-_-UKlQze_wX3r2uFNEHx2sc5bUUxo6vaxzltRTGjq8C6hm3Um_bTk2GFf0q7d07jQXd2AKf68FmUyvw7fHpH&_nc_ohc=nC188ggJ4_AQ7kNvwFSPgYA&_nc_oc=AdnWTmE9GG-oavdT-JO4DV4zWhjrNT5bexYiUg6YuIG9TcncB9m7JA45XHXFxa7iZXhx7CN_GbIyoI4umBlf-b_1&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=wbo1k2UJtars2oXmJOubVQ&oh=00_AfJQetVjh3dBWBDM3-ZUjdzG1QPFdpfhr12C1xCj7CIhdw&oe=68387C15",
      ornament: "✤ ✤ ✤",
      year: "MCMXXX",
      location: "Cathedral Gardens",
      photographer: "Augustus Wells",
      mood: "ceremonial",
      era: "1930s",
      color: "classical",
      images: [
        {
          url: "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/470806573_122202447536081572_6676017755273783372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG-_-UKlQze_wX3r2uFNEHx2sc5bUUxo6vaxzltRTGjq8C6hm3Um_bTk2GFf0q7d07jQXd2AKf68FmUyvw7fHpH&_nc_ohc=nC188ggJ4_AQ7kNvwFSPgYA&_nc_oc=AdnWTmE9GG-oavdT-JO4DV4zWhjrNT5bexYiUg6YuIG9TcncB9m7JA45XHXFxa7iZXhx7CN_GbIyoI4umBlf-b_1&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=wbo1k2UJtars2oXmJOubVQ&oh=00_AfJQetVjh3dBWBDM3-ZUjdzG1QPFdpfhr12C1xCj7CIhdw&oe=68387C15",
          title: "Sacred Ceremony",
          date: "June 14, 1930",
          story: "The moment two hearts became one before God and family.",
        },
        {
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
          title: "Bridal Grace",
          date: "June 14, 1930",
          story: "Elegance embodied in silk and lace, radiant with joy.",
        },
        {
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
          title: "Wedding Party",
          date: "June 14, 1930",
          story: "Friends and family gathered to celebrate eternal love.",
        },
        {
          url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop",
          title: "First Dance",
          date: "June 14, 1930",
          story: "The beginning of a lifetime of dancing together.",
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

  const filterClasses = {
    vintage: "sepia-[0.4] contrast-110 brightness-95 saturate-75",
    classic: "grayscale contrast-120 brightness-90",
    warm: "sepia-[0.2] saturate-110 brightness-105 contrast-105",
    cold: "hue-rotate-180 saturate-90 contrast-110",
    original: "",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Enhanced Header with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 text-white min-h-[70vh] flex items-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse">
            <svg
              className="w-full h-full"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="vintage-pattern"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <g fill="none" fillRule="evenodd">
                    <g fill="#ffffff" fillOpacity="0.1">
                      <path d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z" />
                    </g>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#vintage-pattern)" />
            </svg>
          </div>
        </div>

        <div className="relative container mx-auto px-6 py-16 text-center">
          {/* Floating Camera Animation */}
          <div className="mb-8 relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <Camera className="w-12 h-12 text-amber-900" />
            </div>
            {/* Floating particles */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-300 rounded-full opacity-60 animate-ping"
                  style={{
                    left: `${i * 60 - 150}px`,
                    top: `${-20 - i * 10}px`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: "2s",
                  }}
                />
              ))}
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent bg-300% animate-gradient">
              Bygone Era
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-amber-100">Artist</span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where memories become eternal masterpieces, and every frame tells a
            story that transcends time.
          </p>

          {/* Enhanced Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              {
                icon: Star,
                text: "Award Winning",
                color: "from-yellow-400 to-amber-500",
              },
              {
                icon: Heart,
                text: "Vintage Soul",
                color: "from-red-400 to-rose-500",
              },
              {
                icon: Camera,
                text: "Professional",
                color: "from-blue-400 to-indigo-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex items-center px-6 py-3 bg-gradient-to-r ${feature.color} text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
              >
                <feature.icon className="w-5 h-5 mr-2 fill-current" />
                <span className="font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-amber-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-amber-200 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Gallery Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 font-serif">
            Our Vintage Collections
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Step into our world of timeless photography. Each collection is a
            carefully curated journey through different eras, moods, and stories
            that capture the essence of vintage elegance.
          </p>
        </div>

        {/* 3D Book Shelf Effect */}
        <div className="relative max-w-7xl mx-auto">
          {/* Shelf Background */}
          <div className="absolute -top-8 -bottom-8 left-0 right-0 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg shadow-2xl transform perspective-1000 skew-y-1 opacity-50"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
            {albums.map((album, index) => (
              <div
                key={album.id}
                className="group cursor-pointer transform transition-all duration-700 hover:scale-110 hover:rotate-2 hover:-translate-y-6"
                onClick={() => openAlbum(album)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Vintage Book Cover */}
                <div className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 p-2 rounded-lg shadow-2xl border-2 border-amber-800 aspect-[3/4] transform perspective-1000 hover:shadow-3xl transition-all duration-700">
                  {/* Multiple Book Spine Shadows */}
                  <div className="absolute -left-4 top-3 bottom-3 w-8 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 rounded-l-lg shadow-xl transform -skew-y-2"></div>
                  <div className="absolute -left-6 top-4 bottom-4 w-4 bg-gradient-to-r from-amber-950 to-amber-900 rounded-l-lg opacity-60 transform -skew-y-1"></div>

                  {/* Book Cover Content */}
                  <div className="relative h-full bg-gradient-to-br from-amber-100 to-yellow-50 rounded-md overflow-hidden border border-amber-600">
                    {/* Background Image with Enhanced Effects */}
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
                    <div className="relative h-full flex flex-col justify-between p-8 text-center">
                      {/* Top Section */}
                      <div className="flex-1 flex flex-col justify-start items-center">
                        <div className="mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-yellow-700 rounded-full flex items-center justify-center shadow-lg">
                            <Camera className="w-8 h-8 text-amber-100" />
                          </div>
                        </div>
                        <div className="text-amber-800 text-2xl font-serif tracking-widest mb-4">
                          {album.ornament}
                        </div>
                        <div className="text-xs text-amber-600 font-serif tracking-[0.3em] uppercase">
                          {album.era} • {album.location}
                        </div>
                      </div>

                      {/* Middle Section - Enhanced Title */}
                      <div className="flex-2 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-amber-900 mb-3 font-serif leading-tight tracking-wide transform group-hover:scale-105 transition-transform duration-300">
                          {album.title}
                        </h3>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-3"></div>
                        <p className="text-amber-700 text-sm font-serif italic tracking-wide mb-2">
                          {album.subtitle}
                        </p>
                        <div className="text-xs text-amber-600 font-serif">
                          By {album.photographer}
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div className="flex-1 flex flex-col justify-end">
                        <div className="text-amber-700 text-sm font-serif tracking-widest mb-3">
                          {album.year}
                        </div>
                        <div className="text-amber-800 text-xs font-serif tracking-widest border-t border-amber-600 pt-3">
                          BYGONE ERA ARTIST
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Corner Ornaments */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-3 border-t-3 border-amber-700 opacity-70"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-3 border-t-3 border-amber-700 opacity-70"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-3 border-b-3 border-amber-700 opacity-70"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-3 border-b-3 border-amber-700 opacity-70"></div>

                    {/* Magical Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></div>
                  </div>

                  {/* Enhanced Book Pages Effect */}
                  <div className="absolute -right-1 top-2 bottom-2 w-3 bg-gradient-to-b from-white via-amber-50 to-white rounded-r-sm shadow-inner border-r border-amber-300"></div>
                  <div className="absolute -right-2 top-3 bottom-3 w-2 bg-gradient-to-b from-amber-100 to-amber-200 rounded-r-sm opacity-80"></div>
                  <div className="absolute -right-3 top-4 bottom-4 w-1 bg-gradient-to-b from-amber-200 to-amber-300 rounded-r-sm opacity-60"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Page Turning Animation */}
      {isOpening && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative">
            {/* Multiple page turning layers for realistic effect */}
            <div className="relative w-96 h-96">
              {/* Base book */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-yellow-800 rounded-lg shadow-2xl"></div>

              {/* Page 1 - turning */}
              <div className="absolute inset-2 bg-gradient-to-br from-amber-100 to-yellow-50 rounded-md shadow-lg transform-gpu origin-left animate-[pageFlip1_1.2s_ease-in-out]"></div>

              {/* Page 2 - turning */}
              <div className="absolute inset-2 bg-gradient-to-br from-white to-amber-50 rounded-md shadow-lg transform-gpu origin-left animate-[pageFlip2_1.2s_ease-in-out_0.2s]"></div>

              {/* Page 3 - turning */}
              <div className="absolute inset-2 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-md shadow-lg transform-gpu origin-left animate-[pageFlip3_1.2s_ease-in-out_0.4s]"></div>

              {/* Enhanced Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-12 translate-x-[-100%] animate-[shimmer_1.2s_ease-in-out_infinite]"></div>
            </div>

            <p className="text-white text-center mt-8 text-xl font-serif animate-pulse">
              Opening the album...
            </p>
          </div>
        </div>
      )}

      {/* Revolutionary Album Viewer Modal */}
      {selectedAlbum && !isOpening && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
          {/* Enhanced Control Bar */}
          <div className="relative z-[60] flex justify-between items-center p-4 bg-gradient-to-r from-black/90 to-black/70 backdrop-blur-sm border-b border-amber-500/30">
            {/* Left Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={closeAlbum}
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 text-amber-900 rounded-full transition-all duration-300 font-serif text-sm shadow-xl border-2 border-amber-600 flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Close Album</span>
              </button>

              {/* View Mode Selector */}
              <div className="flex items-center space-x-2 bg-white/10 rounded-full p-1 backdrop-blur-sm">
                {[
                  { mode: "book", icon: "📖" },
                  { mode: "polaroid", icon: "📷" },
                  { mode: "filmstrip", icon: "🎞️" },
                ].map((view) => (
                  <button
                    key={view.mode}
                    onClick={() => setViewMode(view.mode)}
                    className={`px-3 py-2 rounded-full text-sm transition-all duration-300 ${
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
            <div className="flex items-center space-x-2">
              {/* Filter Selector */}
              <select
                value={filterEffect}
                onChange={(e) => setFilterEffect(e.target.value)}
                className="bg-white/10 text-white border border-amber-500/30 rounded-lg px-3 py-2 text-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="vintage">Vintage</option>
                <option value="classic">Classic B&W</option>
                <option value="warm">Warm Tone</option>
                <option value="cold">Cool Tone</option>
                <option value="original">Original</option>
              </select>

              {/* Autoplay Control */}
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  isAutoplay
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white/10 text-amber-200 hover:bg-white/20"
                }`}
              >
                {isAutoplay ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>

              {/* Bookmark Control */}
              <button
                onClick={() => toggleBookmark(currentImageIndex)}
                className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  bookmarkedImages.has(
                    `${selectedAlbum.id}-${currentImageIndex}`
                  )
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white/10 text-amber-200 hover:bg-white/20"
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeAlbum}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 flex items-center justify-center p-4 perspective-1000">
            {viewMode === "book" && (
              /* Traditional Book View */
              <div className="relative max-w-7xl w-full h-full max-h-[calc(100vh-120px)]">
                <div className="relative w-full h-full bg-gradient-to-br from-amber-900 to-yellow-800 rounded-lg shadow-2xl p-2 md:p-6 transform-gpu">
                  <div className="w-full h-full bg-white rounded-md shadow-inner flex flex-col md:flex-row overflow-hidden">
                    {/* Left Page - Enhanced Story Info */}
                    <div className="flex-1 bg-gradient-to-br from-amber-50 to-yellow-50 p-4 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-amber-200 flex flex-col justify-center relative overflow-y-auto">
                      {pageFlipping && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-y-2 translate-x-[-100%] animate-[pageSlide_0.6s_ease-in-out] z-10"></div>
                      )}

                      <div className="text-center max-w-xs md:max-w-md mx-auto">
                        <div className="mb-6 mx-auto">
                          <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto shadow-lg">
                            <Camera className="w-8 h-8 text-amber-100" />
                          </div>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-3 font-serif">
                          {selectedAlbum.images[currentImageIndex].title}
                        </h2>
                        <div className="w-24 h-0.5 bg-amber-700 mx-auto mb-4"></div>

                        <p className="text-amber-600 text-sm md:text-base mb-6 italic">
                          {selectedAlbum.images[currentImageIndex].date}
                        </p>

                        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-lg border-2 border-amber-200 shadow-inner mb-8">
                          <p className="text-amber-800 leading-relaxed font-serif">
                            "{selectedAlbum.images[currentImageIndex].story}"
                          </p>
                        </div>

                        {/* Enhanced Metadata */}
                        <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
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
                        <div className="flex justify-center space-x-3 mb-8">
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
                              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                index === currentImageIndex
                                  ? "bg-amber-600 scale-125 shadow-lg"
                                  : "bg-amber-300 hover:bg-amber-400 hover:scale-110"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="text-amber-700 text-2xl font-serif mb-8">
                          {selectedAlbum.ornament}
                        </div>
                      </div>
                    </div>

                    {/* Right Page - Enhanced Image Display */}
                    <div className="flex-1 relative bg-gradient-to-br from-white to-amber-50 overflow-hidden">
                      {pageFlipping && (
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent transform skew-y-2 translate-x-[100%] animate-[pageSlide_0.6s_ease-in-out] z-20"></div>
                      )}

                      <div className="absolute inset-0 p-4 md:p-8">
                        <div className="w-full h-full relative bg-white shadow-2xl rounded-sm overflow-hidden border-4 border-amber-200">
                          <img
                            src={selectedAlbum.images[currentImageIndex].url}
                            alt={selectedAlbum.images[currentImageIndex].title}
                            className={`w-full h-full object-cover transition-all duration-500 ${filterClasses[filterEffect]}`}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-amber-100/5"></div>

                          {/* Enhanced Photo Details Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                            <div className="text-white flex justify-between items-end">
                              <div>
                                <h3 className="text-xl font-serif mb-1">
                                  {
                                    selectedAlbum.images[currentImageIndex]
                                      .title
                                  }
                                </h3>
                                <p className="text-amber-200 text-sm opacity-90">
                                  {selectedAlbum.images[currentImageIndex].date}{" "}
                                  • {selectedAlbum.year}
                                </p>
                              </div>
                              <div className="flex space-x-2">
                                <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                                  <Download className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                                  <Share2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Photo Corners */}
                          <div className="absolute top-3 left-3 w-6 h-6 border-l-4 border-t-4 border-amber-400 opacity-70"></div>
                          <div className="absolute top-3 right-3 w-6 h-6 border-r-4 border-t-4 border-amber-400 opacity-70"></div>
                          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-4 border-b-4 border-amber-400 opacity-70"></div>
                          <div className="absolute bottom-3 right-3 w-6 h-6 border-l-4 border-b-4 border-amber-400 opacity-70"></div>
                        </div>
                      </div>

                      {/* Enhanced Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        disabled={pageFlipping}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-white rounded-full transition-all duration-300 shadow-2xl z-30 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
                      </button>
                      <button
                        onClick={nextImage}
                        disabled={pageFlipping}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-white rounded-full transition-all duration-300 shadow-2xl z-30 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {viewMode === "polaroid" && (
              /* Polaroid Stack View */
              <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
                {selectedAlbum.images.map((image, index) => {
                  const offset = index - currentImageIndex;
                  const isActive = index === currentImageIndex;

                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 cursor-pointer ${
                        isActive ? "z-20 scale-110" : "z-10"
                      }`}
                      style={{
                        transform: `translateX(${offset * 50}px) translateY(${
                          offset * 20
                        }px) rotate(${offset * 5}deg)`,
                        opacity:
                          Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                      }}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <div className="bg-white p-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <img
                          src={image.url}
                          alt={image.title}
                          className={`w-80 h-96 object-cover mb-4 ${filterClasses[filterEffect]}`}
                        />
                        <div className="text-center">
                          <h3 className="font-serif text-lg text-gray-800 mb-1">
                            {image.title}
                          </h3>
                          <p className="text-sm text-gray-600">{image.date}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {viewMode === "filmstrip" && (
              /* Film Strip View */
              <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-lg overflow-hidden">
                <div className="relative w-full max-w-6xl h-96 bg-black rounded-lg overflow-hidden border-4 border-gray-800">
                  {/* Film perforations */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 flex justify-between items-center px-4">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-black rounded-sm"
                      ></div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-900 flex justify-between items-center px-4">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-black rounded-sm"
                      ></div>
                    ))}
                  </div>

                  {/* Film frames */}
                  <div className="flex items-center h-full py-8 px-4 space-x-4 overflow-x-auto">
                    {selectedAlbum.images.map((image, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                          index === currentImageIndex
                            ? "scale-110 ring-4 ring-amber-400"
                            : "opacity-70 hover:opacity-100"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img
                          src={image.url}
                          alt={image.title}
                          className={`w-64 h-80 object-cover border-2 border-white ${filterClasses[filterEffect]}`}
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
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 bg-amber-300 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Create Your Own Vintage Legacy?
          </h3>
          <p className="text-xl md:text-2xl text-amber-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's craft your personal collection of timeless memories. Every
            story deserves to be preserved with the elegance and artistry of
            vintage photography.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Commission Your Collection
            </button>
            <button className="border-2 border-amber-400 text-amber-100 hover:bg-amber-400 hover:text-amber-900 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

export default CreativeVintageGallery;
