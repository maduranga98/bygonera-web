// app/page.js

import AboutSection from "@/components/Aboutus";
import VintagePhotoGallery from "@/components/Album";
import VintageHero from "@/components/Hero";
import Navbar from "@/components/Navbar";

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      <Navbar />
      <VintageHero />
      <AboutSection />
      <VintagePhotoGallery />
    </div>
  );
}
