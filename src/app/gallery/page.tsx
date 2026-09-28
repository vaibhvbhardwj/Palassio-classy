"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface GalleryMedia {
  id: string;
  category: "All" | "Rooms" | "Dining" | "Rooftop" | "Banquets" | "Weddings";
  title: string;
  url: string;
}

const GALLERY_ITEMS: GalleryMedia[] = [
  { id: "g1", category: "Rooms", title: "Deluxe Executive Room Interior", url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80" },
  { id: "g2", category: "Rooms", title: "Palassio Royal Suite Bedroom", url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80" },
  { id: "g3", category: "Rooms", title: "Presidential Luxury Suite Lounge", url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80" },
  { id: "g4", category: "Rooftop", title: "Rooftop Lounge Sunset View", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" },
  { id: "g5", category: "Rooftop", title: "Friday Unplugged Acoustic Night", url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80" },
  { id: "g6", category: "Banquets", title: "Palassio Grand Ballroom Wedding Setup", url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80" },
  { id: "g7", category: "Weddings", title: "Royal Lucknow Wedding Reception Decor", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80" },
  { id: "g8", category: "Dining", title: "Awadhi Dum Biryani & Galawati Kebabs", url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80" }
];

const CATEGORIES = ["All", "Rooms", "Dining", "Rooftop", "Banquets", "Weddings"] as const;

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedImg, setSelectedImg] = useState<GalleryMedia | null>(null);

  const filtered = activeTab === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">PHOTO & MEDIA GALLERY</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">Experience Palassio</h1>
        <p className="text-gray-600 text-sm">Explore photography of our luxury rooms, rooftop nightlife, banquet celebrations, and Awadhi culinary spread.</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === cat
                ? "gold-gradient-bg text-palassio-navy shadow-md"
                : "bg-white text-gray-700 border border-gray-200 hover:border-palassio-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImg(item)}
            className="group relative h-64 rounded-2xl overflow-hidden shadow-md border border-palassio-gold/20 cursor-pointer"
          >
            <Image src={item.url} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-palassio-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <span className="text-palassio-gold text-[10px] font-bold uppercase">{item.category}</span>
              <h4 className="text-white text-xs font-semibold">{item.title}</h4>
            </div>
            <div className="absolute top-3 right-3 bg-palassio-navy/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4 text-palassio-gold" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-palassio-navy rounded-2xl overflow-hidden border border-palassio-gold/40">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[70vh] w-full">
              <Image src={selectedImg.url} alt={selectedImg.title} fill className="object-contain" />
            </div>
            <div className="p-4 text-center bg-palassio-navy-dark">
              <span className="text-palassio-gold text-xs font-bold uppercase">{selectedImg.category}</span>
              <h3 className="text-white font-serif text-lg font-bold">{selectedImg.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
