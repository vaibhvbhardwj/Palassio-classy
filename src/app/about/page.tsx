import Link from "next/link";
import Image from "next/image";
import { HOTEL_INFO } from "@/data/hotelContent";
import { ShieldCheck, Heart, MapPin, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Hotel Palassio International Lucknow",
  description: "Learn about Hotel Palassio International's hospitality story, property overview, facilities, and service philosophy in Gomti Nagar Extension."
};

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">OUR STORY & PHILOSOPHY</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">
          Welcome to Hotel Palassio International
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Founded on the core principles of warmth, efficiency, and timeless Awadhi hospitality, Hotel Palassio International serves as Lucknow&apos;s modern hospitality hub for stay, celebrations, and dining.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-palassio-navy">Our Hospitality Philosophy</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We believe that modern travel requires zero compromise between comfort, convenience, and genuine warmth. Whether you are checking in for a high-level business meeting, hosting your family&apos;s dream wedding reception, or enjoying an acoustic evening at our rooftop lounge, our staff is dedicated to seamless service.
          </p>
          <div className="space-y-3 text-xs text-gray-700">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-palassio-gold shrink-0 mt-0.5" />
              <span><strong>14 Luxury Guest Rooms:</strong> Executive workspaces, smart TVs, central AC, and soundproof windows.</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-palassio-gold shrink-0 mt-0.5" />
              <span><strong>2 Grand Banquet Halls:</strong> Pillarless event spaces for up to 400 guests.</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-palassio-gold shrink-0 mt-0.5" />
              <span><strong>Destination Rooftop:</strong> Open-air skyline dining, weekend unplugged music, and late-night food.</span>
            </div>
          </div>
        </div>

        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-palassio-gold/30">
          <Image src="/palassio-logo.jpeg" alt="Hotel Palassio Logo Artwork" fill className="object-contain p-8 bg-palassio-navy" />
        </div>
      </div>
    </div>
  );
}
