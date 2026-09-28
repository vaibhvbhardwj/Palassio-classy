"use client";

import { useState } from "react";
import { MessageSquare, X, Hotel, Wine, Sparkles, Building2 } from "lucide-react";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 flex flex-col items-end">
      {/* Enquiry Quick Menu */}
      {open && (
        <div className="mb-3 w-64 bg-palassio-navy border border-palassio-gold/40 rounded-xl shadow-2xl p-3 space-y-2 text-white text-xs animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between border-b border-palassio-gold/20 pb-2">
            <span className="font-semibold text-palassio-gold">Palassio WhatsApp Assistant</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-gray-300">How can our hospitality desk assist you today?</p>
          <div className="space-y-1.5 pt-1">
            <button
              onClick={() => { setOpen(false); openWhatsAppEnquiry({ type: "room_enquiry" }); }}
              className="w-full flex items-center space-x-2 p-2 rounded bg-palassio-navy-dark hover:bg-palassio-gold/20 text-left transition-colors"
            >
              <Hotel className="w-4 h-4 text-palassio-gold" />
              <span>Room Booking & Rates</span>
            </button>
            <button
              onClick={() => { setOpen(false); openWhatsAppEnquiry({ type: "rooftop_reservation" }); }}
              className="w-full flex items-center space-x-2 p-2 rounded bg-palassio-navy-dark hover:bg-palassio-gold/20 text-left transition-colors"
            >
              <Wine className="w-4 h-4 text-amber-400" />
              <span>Rooftop Lounge Table</span>
            </button>
            <button
              onClick={() => { setOpen(false); openWhatsAppEnquiry({ type: "banquet_enquiry" }); }}
              className="w-full flex items-center space-x-2 p-2 rounded bg-palassio-navy-dark hover:bg-palassio-gold/20 text-left transition-colors"
            >
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Wedding / Banquet Quote</span>
            </button>
            <button
              onClick={() => { setOpen(false); openWhatsAppEnquiry({ type: "corporate_enquiry" }); }}
              className="w-full flex items-center space-x-2 p-2 rounded bg-palassio-navy-dark hover:bg-palassio-gold/20 text-left transition-colors"
            >
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Corporate Rate Inquiry</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-13 h-13 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border-2 border-white"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
}
