import Link from "next/link";
import Image from "next/image";
import { RESTAURANT_MENU, HOTEL_INFO } from "@/data/hotelContent";
import { Utensils, Clock, Phone, ExternalLink, Flame } from "lucide-react";

export const metadata = {
  title: "Multi-Cuisine Restaurant & Fine Dining | Hotel Palassio International",
  description: "Authentic Awadhi kebabs, dum biryani, and multi-cuisine delicacies at Hotel Palassio International Lucknow. Reserve a table or order on Swiggy & Zomato."
};

export default function DiningPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">
          FINE DINING & AWADHI FLAVORS
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">
          Palassio Multi-Cuisine Restaurant
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          From legendary melt-in-mouth Lucknowi Galawati Kebabs to rich Mughlai curries, Asian noodles, and desserts. Experience culinary perfection.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/contact?type=table" className="gold-gradient-bg text-palassio-navy font-bold px-6 py-2.5 rounded-xl text-xs shadow">
            RESERVE A TABLE
          </Link>
          <a
            href={HOTEL_INFO.delivery.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow flex items-center space-x-1"
          >
            <span>ORDER ON SWIGGY</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={HOTEL_INFO.delivery.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow flex items-center space-x-1"
          >
            <span>ORDER ON ZOMATO</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Menu Categories Highlight */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-palassio-gold/30 shadow-xl space-y-8">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-palassio-navy">Featured Restaurant Menu</h2>
            <p className="text-xs text-gray-500">Prepared fresh daily by master chefs using authentic pots and spices.</p>
          </div>
          <span className="text-xs bg-palassio-sand px-3 py-1.5 rounded-full font-medium text-palassio-navy">
            ⏰ Timings: 7:00 AM - 11:00 PM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESTAURANT_MENU.map((item) => (
            <div key={item.id} className="p-4 rounded-xl border border-gray-100 bg-palassio-sand/40 flex justify-between items-start space-x-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className={`w-3 h-3 rounded-full border ${item.isVeg ? "bg-emerald-600 border-emerald-700" : "bg-red-600 border-red-700"}`} />
                  <h4 className="font-semibold text-sm text-palassio-navy">{item.name}</h4>
                  {item.isBestseller && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded font-bold flex items-center space-x-1">
                      <Flame className="w-3 h-3 text-amber-600" />
                      <span>Bestseller</span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{item.description}</p>
                <span className="text-[11px] text-gray-400 block pt-1">Category: {item.category}</span>
              </div>
              <span className="font-serif font-bold text-sm text-palassio-gold shrink-0">
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
