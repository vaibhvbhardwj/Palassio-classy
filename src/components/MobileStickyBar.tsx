"use client";

import Link from "next/link";
import { HOTEL_INFO } from "@/data/hotelContent";
import { Phone, MessageSquare, Calendar, Utensils } from "lucide-react";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-palassio-navy/95 backdrop-blur-md border-t border-palassio-gold/30 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        {/* Call CTA */}
        <a
          href={`tel:${HOTEL_INFO.contact.phonePrimary}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-palassio-navy-dark hover:bg-palassio-navy border border-palassio-gold/20 rounded text-white text-center transition-colors"
        >
          <Phone className="w-4 h-4 text-palassio-gold mb-0.5" />
          <span className="text-[10px] font-medium leading-none">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <button
          onClick={() => openWhatsAppEnquiry({ type: "general" })}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 rounded text-emerald-400 text-center transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-medium leading-none">WhatsApp</span>
        </button>

        {/* Book Room CTA */}
        <Link
          href="/book"
          className="flex flex-col items-center justify-center py-1.5 px-2 gold-gradient-bg text-palassio-navy font-bold rounded text-center shadow transition-transform active:scale-95"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-none uppercase">Book Stay</span>
        </Link>

        {/* Table / Event CTA */}
        <Link
          href="/rooftop"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-palassio-burgundy/80 hover:bg-palassio-burgundy border border-amber-500/30 rounded text-amber-200 text-center transition-colors"
        >
          <Utensils className="w-4 h-4 text-palassio-gold mb-0.5" />
          <span className="text-[10px] font-medium leading-none">Rooftop</span>
        </Link>
      </div>
    </div>
  );
}
