import Link from "next/link";
import Image from "next/image";
import { BANQUET_HALLS } from "@/data/hotelContent";
import { Sparkles, Users, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Banquet Halls & Event Venues | Hotel Palassio International",
  description: "Host grand weddings, ring ceremonies, corporate conferences, and birthday parties in Gomti Nagar Extension, Lucknow. 2 pillarless halls accommodating 80 to 400 guests."
};

export default function BanquetsPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">
          BANQUETS & CELEBRATIONS
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">
          Grand Banquet Halls in Lucknow
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          From lavish wedding receptions to high-powered executive conferences, our 2 pillarless banquet halls feature high ceilings, LED backdrops, crystal chandeliers, and master Awadhi catering.
        </p>
      </div>

      <div className="space-y-12">
        {BANQUET_HALLS.map((hall, idx) => (
          <div
            key={hall.id}
            className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-palassio-gold/30 grid grid-cols-1 lg:grid-cols-12 gap-0 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[420px]">
              <Image src={hall.images[0]} alt={hall.name} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-palassio-navy/90 text-palassio-gold px-3.5 py-1.5 rounded-full text-xs font-bold shadow">
                Capacity: {hall.capacity}
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-palassio-navy">{hall.name}</h2>
                  <p className="text-xs text-palassio-gold font-semibold mt-1">Area: {hall.area}</p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{hall.description}</p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-palassio-navy mb-2">Ideal For</h4>
                  <div className="flex flex-wrap gap-2">
                    {hall.suitableFor.map((item, i) => (
                      <span key={i} className="px-2.5 py-1 bg-palassio-sand text-palassio-navy rounded text-[11px] font-medium border border-palassio-gold/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-palassio-navy mb-2">Key Features & Amenities</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    {hall.amenities.map((item, i) => (
                      <div key={i} className="flex items-center space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-palassio-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                <Link
                  href={`/banquets/${hall.id}`}
                  className="px-5 py-2.5 bg-palassio-sand hover:bg-palassio-gold/20 text-palassio-navy font-bold rounded-xl text-xs transition-colors"
                >
                  VIEW HALL SPECS
                </Link>
                <Link
                  href="/contact?type=banquet"
                  className="gold-gradient-bg text-palassio-navy font-bold px-6 py-2.5 rounded-xl text-xs shadow hover:brightness-110 transition-all"
                >
                  GET A CUSTOMIZED QUOTE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
