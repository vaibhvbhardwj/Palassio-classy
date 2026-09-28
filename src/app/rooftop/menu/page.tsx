import Link from "next/link";
import { RESTAURANT_MENU } from "@/data/hotelContent";
import { Flame, Wine, Utensils } from "lucide-react";

export const metadata = {
  title: "Rooftop Lounge Menu & Late-Night Bites | Hotel Palassio",
  description: "Explore late-night kebabs, biryanis, craft beverages, and wood-fired appetizers at Hotel Palassio Rooftop Lounge."
};

export default function RooftopMenuPage() {
  return (
    <div className="bg-palassio-navy text-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">ROOFTOP LOUNGE MENU</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">Late-Night Bites & Signature Drinks</h1>
          <p className="text-gray-300 text-sm">Served daily from 5:00 PM to 1:00 AM under the open sky.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESTAURANT_MENU.map((item) => (
            <div key={item.id} className="bg-palassio-navy-dark p-5 rounded-2xl border border-palassio-gold/20 flex justify-between items-start space-x-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className={`w-3 h-3 rounded-full border ${item.isVeg ? "bg-emerald-600 border-emerald-700" : "bg-red-600 border-red-700"}`} />
                  <h3 className="font-semibold text-sm text-white">{item.name}</h3>
                  {item.isBestseller && (
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded font-bold">
                      Bestseller
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400">{item.description}</p>
                <span className="text-[11px] text-palassio-gold block pt-1">{item.category}</span>
              </div>
              <span className="font-serif font-bold text-sm text-palassio-gold shrink-0">
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <Link href="/contact?type=rooftop" className="gold-gradient-bg text-palassio-navy font-bold px-8 py-3 rounded-xl shadow-xl text-xs">
            RESERVE A ROOFTOP TABLE FOR DINING
          </Link>
        </div>
      </div>
    </div>
  );
}
