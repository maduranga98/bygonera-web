// app/page.js

import AboutSection from "@/components/Aboutus";
import VintagePhotoGallery from "@/components/Album";
import VintageContactForm from "@/components/ContactForm";
import VintageFooter from "@/components/Footer";
import VintageHero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VintageTestimonials from "@/components/Testimonials";

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      <Navbar />
      <VintageHero />
      <AboutSection />
      <VintagePhotoGallery />
      <VintageTestimonials />
      <VintageContactForm />
      <VintageFooter />
    </div>
  );
}
