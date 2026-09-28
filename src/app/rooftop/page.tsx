import Link from "next/link";
import Image from "next/image";
import { ROOFTOP_EVENTS, HOTEL_INFO } from "@/data/hotelContent";
import { Sparkles, Wine, Music, Calendar, Moon, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Destination Rooftop Lounge | Open-Air Nightlife in Lucknow",
  description: "Experience Lucknow's premier open-air rooftop lounge at Hotel Palassio International. Skyline views, live music, craft cocktails, and late-night dining."
};

export default function RooftopPage() {
  return (
    <div className="bg-palassio-navy text-white min-h-screen space-y-16 py-10">
      {/* Dark Cinematic Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden border-b border-palassio-gold/30">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
            alt="Rooftop Lounge Night Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palassio-navy via-palassio-navy/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Moon className="w-4 h-4 text-amber-300" />
            <span>OPEN-AIR NIGHT DESTINATION</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
            PALASSIO ROOFTOP LOUNGE
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Elevate your evenings above Lucknow. Skyline views, soothing acoustic sessions, artisanal appetizers, and late-night dining till 1:00 AM.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?type=rooftop"
              className="gold-gradient-bg text-palassio-navy font-bold px-8 py-3 rounded-xl shadow-2xl hover:brightness-110 transition-all text-sm"
            >
              RESERVE A ROOFTOP TABLE
            </Link>
            <Link
              href="/rooftop/menu"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3 rounded-xl backdrop-blur-md transition-all text-sm"
            >
              EXPLORE ROOFTOP MENU
            </Link>
          </div>
        </div>
      </section>

      {/* Rooftop Experience Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">
            THE EVENING EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">Why Guests Love Palassio Rooftop</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-palassio-navy-dark p-8 rounded-3xl border border-palassio-gold/20 space-y-4 shadow-xl">
            <Wine className="w-10 h-10 text-palassio-gold" />
            <h3 className="font-serif text-xl font-bold text-white">Craft Drinks & Sizzlers</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Pair exotic mocktails and refreshing drinks with live tandoori charcoal kebabs and gourmet appetizers.
            </p>
          </div>

          <div className="bg-palassio-navy-dark p-8 rounded-3xl border border-palassio-gold/20 space-y-4 shadow-xl">
            <Music className="w-10 h-10 text-amber-400" />
            <h3 className="font-serif text-xl font-bold text-white">Acoustic & DJ Nights</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Every weekend features live acoustic performances, deep lounge house music, and vibrant social vibes under the stars.
            </p>
          </div>

          <div className="bg-palassio-navy-dark p-8 rounded-3xl border border-palassio-gold/20 space-y-4 shadow-xl">
            <Moon className="w-10 h-10 text-cyan-400" />
            <h3 className="font-serif text-xl font-bold text-white">Late-Night Dining</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Serving till 1:00 AM for night owls, sports fans post Ekana matches, and celebration parties in Gomti Nagar Extension.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Rooftop Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-palassio-gold/20 pb-4">
          <div>
            <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">WEEKEND EVENTS</span>
            <h2 className="font-serif text-2xl font-bold text-white">Rooftop Event Schedule</h2>
          </div>
          <Link href="/rooftop/events" className="text-xs text-palassio-gold font-bold hover:underline flex items-center space-x-1">
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOFTOP_EVENTS.map((evt) => (
            <div key={evt.id} className="bg-palassio-navy-dark rounded-2xl overflow-hidden border border-palassio-gold/30 shadow-xl flex flex-col">
              <div className="relative h-56 w-full">
                <Image src={evt.image} alt={evt.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-amber-500 text-palassio-navy font-bold px-3 py-1 rounded text-xs">
                  {evt.date} • {evt.time}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">{evt.title}</h3>
                  <p className="text-xs text-palassio-gold font-medium mt-1">Artist: {evt.artist}</p>
                  <p className="text-xs text-gray-300 mt-2">{evt.description}</p>
                </div>
                <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs">
                  <span className="text-gray-400">{evt.entryInfo}</span>
                  <Link href={`/contact?type=rooftop&event=${evt.id}`} className="gold-gradient-bg text-palassio-navy font-bold px-3.5 py-1.5 rounded shadow">
                    Book Table
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
