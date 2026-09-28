"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Calendar, MapPin, Phone } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelContent";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "PAL-998811";
  const name = searchParams.get("name") || "Guest";
  const room = searchParams.get("room") || "Deluxe Executive Room";
  const checkIn = searchParams.get("checkIn") || "2026-10-01";
  const checkOut = searchParams.get("checkOut") || "2026-10-03";
  const total = searchParams.get("total") || "3919";

  return (
    <div className="py-16 max-w-3xl mx-auto px-4 text-center space-y-8">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-palassio-gold">RESERVATION INITIATED</span>
        <h1 className="font-serif text-3xl font-bold text-palassio-navy">Thank You, {name}!</h1>
        <p className="text-xs text-gray-600">
          Your booking request has been received. Our reception desk is processing your reservation reference: <strong className="text-palassio-navy font-mono">{ref}</strong>.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-palassio-gold/30 shadow-xl text-left text-xs space-y-3">
        <h3 className="font-serif font-bold text-base text-palassio-navy border-b pb-2">Stay Details Summary</h3>
        <div className="flex justify-between">
          <span className="text-gray-500">Booking Reference:</span>
          <span className="font-mono font-bold text-palassio-navy">{ref}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Room Category:</span>
          <span className="font-semibold text-palassio-navy">{room}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Check-in Date:</span>
          <span>{checkIn} (12:00 PM)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Check-out Date:</span>
          <span>{checkOut} (11:00 AM)</span>
        </div>
        <div className="flex justify-between font-bold text-sm text-palassio-gold pt-2 border-t">
          <span>Estimated Total (incl. GST):</span>
          <span>₹{total}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link href="/" className="gold-gradient-bg text-palassio-navy font-bold px-6 py-2.5 rounded-xl text-xs shadow">
          RETURN TO HOMEPAGE
        </Link>
        <a href={`tel:${HOTEL_INFO.contact.phonePrimary}`} className="bg-palassio-navy text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow">
          CALL RECEPTION DESK
        </a>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs text-gray-500">Loading confirmation...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
