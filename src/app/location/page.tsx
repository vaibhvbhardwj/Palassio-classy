import Link from "next/link";
import { HOTEL_INFO } from "@/data/hotelContent";
import { MapPin, Phone, ExternalLink, Navigation, Car, Compass } from "lucide-react";

export const metadata = {
  title: "Location, Address & Google Maps | Hotel Palassio Lucknow",
  description: "Directions to Hotel Palassio International, Plot No. 6/C-921 Sector-6 Gomti Nagar Extension Lucknow. Near Phoenix Palassio Mall and Ekana Cricket Stadium."
};

export default function LocationPage() {
  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">GETTING HERE</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">Location & Directions</h1>
        <p className="text-gray-600 text-sm">Hotel Palassio International is located in Sector-6, Gomti Nagar Extension, Lucknow.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Address & Landmarks Card */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-palassio-gold/30 shadow-xl space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-palassio-navy">Official Property Address</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-mono">{HOTEL_INFO.address.full}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-palassio-gold">Major Landmarks & Distance</h4>
            {HOTEL_INFO.address.landmarks.map((lm, i) => (
              <div key={i} className="p-3 bg-palassio-sand rounded-xl text-xs flex justify-between items-center border border-palassio-gold/20">
                <span className="font-medium text-palassio-navy">📍 {lm.name}</span>
                <span className="font-bold text-gray-600">{lm.distance} ({lm.travelTime})</span>
              </div>
            ))}
          </div>

          <a
            href={HOTEL_INFO.address.googleMapsDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full gold-gradient-bg text-palassio-navy font-bold py-3 rounded-xl shadow text-center block text-xs flex items-center justify-center space-x-2"
          >
            <Navigation className="w-4 h-4" />
            <span>OPEN GOOGLE MAPS NAVIGATION</span>
          </a>
        </div>

        {/* Google Maps Embed Frame */}
        <div className="lg:col-span-7 h-[480px] rounded-3xl overflow-hidden border-2 border-palassio-gold/40 shadow-2xl relative">
          <iframe
            src={HOTEL_INFO.address.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Hotel Palassio Google Maps Embed"
          />
        </div>
      </div>
    </div>
  );
}
