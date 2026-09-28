import Link from "next/link";
import { HOTEL_INFO, RESTAURANT_MENU } from "@/data/hotelContent";
import { ExternalLink, ShoppingBag, Phone } from "lucide-react";

export const metadata = {
  title: "Food Delivery & Takeaway | Swiggy & Zomato Lucknow",
  description: "Order Lucknowi kebabs, biryani, and multi-cuisine dishes from Hotel Palassio International on Swiggy & Zomato."
};

export default function OrderFoodPage() {
  return (
    <div className="py-12 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">ONLINE FOOD DELIVERY</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">Order Fresh to Your Doorstep</h1>
        <p className="text-gray-600 text-sm">Experience authentic Awadhi delicacies delivered directly via our verified delivery partners.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href={HOTEL_INFO.delivery.swiggyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-8 bg-orange-50 rounded-3xl border border-orange-200 shadow-md flex items-center justify-between hover:border-orange-500 transition-colors"
        >
          <div>
            <span className="text-orange-600 font-bold uppercase text-xs">Swiggy Partner Listing</span>
            <h3 className="font-serif text-xl font-bold text-gray-900 mt-1">Order on Swiggy</h3>
            <p className="text-xs text-gray-500 mt-1">Fast delivery across Gomti Nagar Extension.</p>
          </div>
          <ExternalLink className="w-6 h-6 text-orange-600" />
        </a>

        <a
          href={HOTEL_INFO.delivery.zomatoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-8 bg-red-50 rounded-3xl border border-red-200 shadow-md flex items-center justify-between hover:border-red-500 transition-colors"
        >
          <div>
            <span className="text-red-600 font-bold uppercase text-xs">Zomato Partner Listing</span>
            <h3 className="font-serif text-xl font-bold text-gray-900 mt-1">Order on Zomato</h3>
            <p className="text-xs text-gray-500 mt-1">Special offers & ratings on Zomato.</p>
          </div>
          <ExternalLink className="w-6 h-6 text-red-600" />
        </a>
      </div>
    </div>
  );
}
