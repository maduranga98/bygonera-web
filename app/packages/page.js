// app/packages/page.js

import Navbar from "@/components/Navbar";
import VintageFooter from "@/components/Footer";
import VintagePackagePage from "@/components/PackagePage";

export const metadata = {
  title: "Book Your Session - Vintage Photography Packages | Bygone Era Artist",
  description:
    "Book your dream vintage photography session. Choose from wedding, engagement, casual sessions and more. Professional vintage photography in Sri Lanka.",
  keywords: [
    "book photography session",
    "vintage photography packages",
    "wedding photography booking",
    "engagement photo session",
    "photography pricing Sri Lanka",
    "vintage portrait session",
  ],
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VintagePackagePage />
      <VintageFooter />
    </div>
  );
}
