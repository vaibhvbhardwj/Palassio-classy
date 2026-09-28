import Link from "next/link";
import Image from "next/image";
import { ROOFTOP_EVENTS } from "@/data/hotelContent";
import { Calendar, Music, Wine, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Rooftop Events & DJ Nights | Hotel Palassio International",
  description: "Check upcoming Friday Unplugged & Saturday DJ Nights at Hotel Palassio Rooftop Lounge Lucknow."
};

export default function RooftopEventsPage() {
  return (
    <div className="bg-palassio-navy text-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">ROOFTOP NIGHTLIFE</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">Live Acoustic & DJ Nights</h1>
          <p className="text-gray-300 text-sm">Join us every weekend for high energy music, craft drinks, and breathtaking skyline views.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOFTOP_EVENTS.map((evt) => (
            <div key={evt.id} className="bg-palassio-navy-dark rounded-3xl overflow-hidden border border-palassio-gold/30 shadow-xl flex flex-col">
              <div className="relative h-64 w-full">
                <Image src={evt.image} alt={evt.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-amber-500 text-palassio-navy font-bold px-3 py-1.5 rounded text-xs">
                  {evt.date} • {evt.time}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-white">{evt.title}</h3>
                  <p className="text-xs text-palassio-gold font-semibold">Artist: {evt.artist}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{evt.description}</p>
                </div>
                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{evt.entryInfo}</span>
                  <Link href={`/contact?type=rooftop&event=${evt.id}`} className="gold-gradient-bg text-palassio-navy font-bold text-xs px-4 py-2 rounded shadow">
                    Reserve Table
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
