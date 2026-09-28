import Link from "next/link";
import Image from "next/image";
import { OFFERS_LIST } from "@/data/hotelContent";
import { Tag, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Exclusive Hotel Offers & Packages | Hotel Palassio Lucknow",
  description: "Save up to 15% on direct room bookings, rooftop happy hours, and wedding packages at Hotel Palassio International."
};

export default function OffersPage() {
  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">PROMOTIONS & PACKAGES</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">Exclusive Palassio Offers</h1>
        <p className="text-gray-600 text-sm">Book directly with us to unlock exclusive promo codes, dining discounts, and complimentary stay perks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {OFFERS_LIST.map((offer) => (
          <div key={offer.id} className="bg-white rounded-3xl overflow-hidden border border-palassio-gold/30 shadow-lg flex flex-col">
            <div className="relative h-52 w-full">
              <Image src={offer.image} alt={offer.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 gold-gradient-bg text-palassio-navy font-bold px-3 py-1 rounded text-xs shadow">
                {offer.discount}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-palassio-gold">{offer.category} OFFER</span>
                <h3 className="font-serif font-bold text-xl text-palassio-navy mt-1">{offer.title}</h3>
                <p className="text-xs text-gray-600 mt-2">{offer.description}</p>
                <div className="mt-3 bg-palassio-sand p-2.5 rounded border border-palassio-gold/20 text-xs font-mono text-center text-palassio-navy font-bold">
                  PROMO CODE: {offer.code}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400">{offer.validTill}</span>
                <Link href={`/offers/${offer.id}`} className="text-palassio-navy font-bold hover:text-palassio-gold">
                  View Offer Details &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
