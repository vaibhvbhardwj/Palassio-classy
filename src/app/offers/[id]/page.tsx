import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { OFFERS_LIST } from "@/data/hotelContent";
import { Check, Calendar } from "lucide-react";

export function generateStaticParams() {
  return OFFERS_LIST.map((offer) => ({
    id: offer.id
  }));
}

export default function SingleOfferPage({ params }: { params: { id: string } }) {
  const offer = OFFERS_LIST.find((o) => o.id === params.id);
  if (!offer) return notFound();

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-xs text-gray-500 space-x-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/offers" className="hover:underline">Offers</Link>
        <span>/</span>
        <span className="text-palassio-navy font-semibold">{offer.title}</span>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-palassio-gold/30">
        <div className="relative h-80 w-full">
          <Image src={offer.image} alt={offer.title} fill className="object-cover" />
          <div className="absolute top-6 left-6 gold-gradient-bg text-palassio-navy font-bold px-4 py-2 rounded-xl text-sm shadow">
            {offer.discount}
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-palassio-gold">{offer.category} SPECIAL PACKAGE</span>
            <h1 className="font-serif text-3xl font-bold text-palassio-navy">{offer.title}</h1>
            <p className="text-xs text-gray-500">{offer.validTill}</p>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">{offer.description}</p>

          <div className="bg-palassio-sand p-4 rounded-xl border border-palassio-gold/30 space-y-2">
            <h4 className="text-xs font-bold text-palassio-navy uppercase">Promo Code</h4>
            <div className="text-lg font-mono font-bold text-palassio-gold tracking-widest">{offer.code}</div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-palassio-navy uppercase">Terms & Conditions</h4>
            <ul className="space-y-1 text-xs text-gray-600">
              {offer.terms.map((t, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-palassio-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <Link
              href={`/book?promo=${offer.code}`}
              className="gold-gradient-bg text-palassio-navy font-bold py-3 px-8 rounded-xl shadow text-xs inline-block"
            >
              APPLY OFFER & BOOK STAY NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
