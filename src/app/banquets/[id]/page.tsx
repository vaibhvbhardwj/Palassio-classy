import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BANQUET_HALLS } from "@/data/hotelContent";
import { Check, Calendar } from "lucide-react";

export function generateStaticParams() {
  return BANQUET_HALLS.map((hall) => ({
    id: hall.id
  }));
}

export default function SingleBanquetPage({ params }: { params: { id: string } }) {
  const hall = BANQUET_HALLS.find((h) => h.id === params.id);
  if (!hall) return notFound();

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-xs text-gray-500 space-x-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/banquets" className="hover:underline">Banquets</Link>
        <span>/</span>
        <span className="text-palassio-navy font-semibold">{hall.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-palassio-gold/30">
            <Image src={hall.images[0]} alt={hall.name} fill className="object-cover" priority />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {hall.images.slice(1).map((img, i) => (
              <div key={i} className="relative h-44 rounded-xl overflow-hidden shadow border border-palassio-gold/20">
                <Image src={img} alt={`${hall.name} detail ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-palassio-gold/30 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">BANQUET SPECIFICATIONS</span>
            <h1 className="font-serif text-3xl font-bold text-palassio-navy">{hall.name}</h1>
            <p className="text-xs text-gray-500">Area: {hall.area} | Capacity: {hall.capacity}</p>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">{hall.description}</p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-palassio-navy mb-2">Suitable Event Layouts</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
              {hall.features.map((f, i) => (
                <div key={i} className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-palassio-gold shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <Link
              href={`/contact?type=banquet&hall=${hall.id}`}
              className="w-full gold-gradient-bg text-palassio-navy font-bold py-3 rounded-xl shadow text-center block text-xs"
            >
              REQUEST CUSTOMIZED EVENT QUOTE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
