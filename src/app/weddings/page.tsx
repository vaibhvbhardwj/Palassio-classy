import Link from "next/link";
import Image from "next/image";
import { BANQUET_HALLS, ROOM_CATEGORIES } from "@/data/hotelContent";
import { Sparkles, Heart, Check, Calendar } from "lucide-react";

export const metadata = {
  title: "Royal Weddings & Receptions in Lucknow | Hotel Palassio",
  description: "Plan your dream wedding at Hotel Palassio International Lucknow. Grand pillarless banquet halls, bridal suites, Masterclass Awadhi catering, and guest room blocks."
};

export default function WeddingsPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-palassio-navy text-white shadow-2xl border-2 border-palassio-gold/40 p-8 sm:p-14 text-center space-y-6">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
            alt="Royal Lucknow Wedding Venue"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palassio-navy via-palassio-navy/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>DESTINATION WEDDING VENUE IN LUCKNOW</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Plan Your Dream Royal Wedding
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Pillarless ballroom grandeur, live Awadhi galawati & biryani counters, presidential bridal suite stays, and complete guest accommodation under one roof.
          </p>

          <div className="pt-4">
            <Link
              href="/contact?type=wedding"
              className="gold-gradient-bg text-palassio-navy font-bold px-8 py-3.5 rounded-xl shadow-2xl hover:brightness-110 transition-all text-xs tracking-wider inline-block"
            >
              PLAN YOUR WEDDING WITH OUR CONCIERGE
            </Link>
          </div>
        </div>
      </div>

      {/* Wedding Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-palassio-gold/30 shadow-lg space-y-4 text-center">
          <span className="font-serif text-3xl font-bold text-palassio-gold block">01</span>
          <h3 className="font-serif text-xl font-bold text-palassio-navy">Pillarless Ballrooms</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            High ceiling halls with crystal chandeliers and customizable stage backdrops for up to 400 wedding guests.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-palassio-gold/30 shadow-lg space-y-4 text-center">
          <span className="font-serif text-3xl font-bold text-palassio-gold block">02</span>
          <h3 className="font-serif text-xl font-bold text-palassio-navy">Master Awadhi Catering</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Impress your guests with authentic live tandoor counters, slow-cooked dum biryani, and artisanal desserts.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-palassio-gold/30 shadow-lg space-y-4 text-center">
          <span className="font-serif text-3xl font-bold text-palassio-gold block">03</span>
          <h3 className="font-serif text-xl font-bold text-palassio-navy">Bridal & Guest Stay</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            14 luxurious rooms right above the venue ensure maximum comfort for the bride, groom, and outstation families.
          </p>
        </div>
      </div>
    </div>
  );
}
