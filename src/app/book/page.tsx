"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ROOM_CATEGORIES, RoomCategory } from "@/data/hotelContent";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";
import { saveCrmLead } from "@/lib/crm";
import { CheckCircle2, Calendar, Users, Shield, ArrowRight, User } from "lucide-react";

function BookingEngineContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [step, setStep] = useState<number>(1);
  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") || "2026-10-01");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") || "2026-10-03");
  const [guests, setGuests] = useState(searchParams.get("guests") || "2");
  const [selectedRoomId, setSelectedRoomId] = useState(searchParams.get("room") || "deluxe-room");
  const [promoCode, setPromoCode] = useState(searchParams.get("promo") || "");

  // Guest Info State
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);

  const selectedRoom = ROOM_CATEGORIES.find((r) => r.id === selectedRoomId) || ROOM_CATEGORIES[0];

  // Calculate pricing breakdown
  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  };

  const nights = calculateNights();
  const discountRate = promoCode.toUpperCase() === "PALASSIO15" ? 0.15 : 0;
  const rawTotal = selectedRoom.basePrice * nights;
  const discountAmount = rawTotal * discountRate;
  const roomPriceAfterDiscount = rawTotal - discountAmount;
  const gstTax = roomPriceAfterDiscount * 0.12; // 12% GST
  const grandTotal = roomPriceAfterDiscount + gstTax;

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Save Lead to CRM
    const bookingRef = `PAL-${Math.floor(100000 + Math.random() * 900000)}`;
    saveCrmLead({
      name: guestName,
      phone: guestPhone,
      email: guestEmail,
      source: "Website",
      enquiryType: "Room",
      eventDate: checkIn,
      guestCount: guests,
      notes: `Direct Booking Ref: ${bookingRef} | Room: ${selectedRoom.name} | Nights: ${nights} | Total: ₹${grandTotal.toFixed(0)} | Notes: ${specialRequests}`
    });

    // 2. Open WhatsApp for instant reservation confirmation
    openWhatsAppEnquiry({
      type: "room_booking",
      name: guestName,
      phone: guestPhone,
      email: guestEmail,
      checkIn,
      checkOut,
      guests,
      roomName: `${selectedRoom.name} (Ref: ${bookingRef})`,
      notes: `Grand Total: ₹${grandTotal.toFixed(0)} incl. taxes. ${specialRequests}`
    });

    // 3. Redirect to Confirmation page
    const query = new URLSearchParams({
      ref: bookingRef,
      name: guestName,
      room: selectedRoom.name,
      checkIn,
      checkOut,
      total: grandTotal.toFixed(0)
    }).toString();

    router.push(`/reservation/confirmation?${query}`);
  };

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">
          OFFICIAL DIRECT BOOKING ENGINE
        </span>
        <h1 className="font-serif text-3xl font-bold text-palassio-navy">Reserve Your Stay</h1>
        <p className="text-xs text-gray-500">Best Rate Guarantee • Complimentary Wi-Fi • Flexible Check-in</p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-between max-w-xl mx-auto text-xs font-semibold border-b pb-4">
        <div className={`flex items-center space-x-1 ${step >= 1 ? "text-palassio-gold" : "text-gray-400"}`}>
          <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">1</span>
          <span>Dates & Room</span>
        </div>
        <div className={`flex items-center space-x-1 ${step >= 2 ? "text-palassio-gold" : "text-gray-400"}`}>
          <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">2</span>
          <span>Guest Details</span>
        </div>
        <div className={`flex items-center space-x-1 ${step >= 3 ? "text-palassio-gold" : "text-gray-400"}`}>
          <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">3</span>
          <span>Confirmation</span>
        </div>
      </div>

      {/* Step 1: Dates & Room Selection */}
      {step === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-palassio-gold/30 shadow-xl space-y-6">
            <h3 className="font-serif text-xl font-bold text-palassio-navy">1. Select Travel Dates & Category</h3>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Check-in Date</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full p-2.5 rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Check-out Date</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full p-2.5 rounded border border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Choose Room Category</label>
              <div className="space-y-3">
                {ROOM_CATEGORIES.map((room) => (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      selectedRoomId === room.id
                        ? "border-palassio-gold bg-palassio-sand/60 shadow-md"
                        : "border-gray-200 hover:border-palassio-gold/40"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-palassio-navy">{room.name}</h4>
                        <span className="text-xs text-gray-500">{room.roomSize} • {room.bedType}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-serif font-bold text-sm text-palassio-gold block">₹{room.basePrice}</span>
                      <span className="text-[10px] text-gray-400">per night</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Promo Code (Try: PALASSIO15)</label>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="w-full p-2 rounded text-xs border border-gray-300 uppercase"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full gold-gradient-bg text-palassio-navy font-bold py-3 rounded-xl shadow text-xs flex items-center justify-center space-x-2"
            >
              <span>PROCEED TO GUEST DETAILS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Rate Summary Card */}
          <div className="lg:col-span-5 bg-palassio-navy text-white p-6 rounded-3xl border border-palassio-gold/30 shadow-xl space-y-4">
            <h3 className="font-serif text-lg font-bold text-palassio-gold border-b border-palassio-gold/20 pb-2">
              Booking Summary
            </h3>
            <div className="text-xs space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Selected Room:</span>
                <strong className="text-white">{selectedRoom.name}</strong>
              </div>
              <div className="flex justify-between">
                <span>Stay Duration:</span>
                <strong className="text-white">{nights} Night(s)</strong>
              </div>
              <div className="flex justify-between">
                <span>Base Rate ({nights} nights):</span>
                <span>₹{rawTotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Direct Promo Discount (15%):</span>
                  <span>-₹{discountAmount.toFixed(0)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST Tax (12%):</span>
                <span>₹{gstTax.toFixed(0)}</span>
              </div>
              <div className="pt-2 border-t border-gray-700 flex justify-between font-bold text-sm text-palassio-gold">
                <span>Total Amount:</span>
                <span>₹{grandTotal.toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Guest Details Form */}
      {step === 2 && (
        <form onSubmit={handleFinalSubmit} className="bg-white p-8 rounded-3xl border border-palassio-gold/30 shadow-xl space-y-6 max-w-2xl mx-auto">
          <h3 className="font-serif text-xl font-bold text-palassio-navy">2. Enter Guest Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Full Guest Name *</label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="First & Last Name"
                className="w-full p-2.5 rounded border border-gray-300 focus:border-palassio-gold focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Mobile / WhatsApp Number *</label>
              <input
                type="tel"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full p-2.5 rounded border border-gray-300 focus:border-palassio-gold focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="block text-gray-700 font-semibold mb-1">Email Address *</label>
            <input
              type="email"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full p-2.5 rounded border border-gray-300 focus:border-palassio-gold focus:outline-none"
              required
            />
          </div>

          <div className="text-xs">
            <label className="block text-gray-700 font-semibold mb-1">Special Arrival Requests</label>
            <textarea
              rows={2}
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Airport pickup, high floor preference, twin beds..."
              className="w-full p-2.5 rounded border border-gray-300 focus:border-palassio-gold focus:outline-none"
            />
          </div>

          <div className="flex items-start space-x-2 text-xs text-gray-600">
            <input
              type="checkbox"
              id="consent"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="mt-0.5"
            />
            <label htmlFor="consent">
              I agree to receive booking updates & promotional offers from Palassio Guest Club. (Consent-based opt-in).
            </label>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-4 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl text-xs"
            >
              Back to Dates
            </button>
            <button
              type="submit"
              className="flex-grow gold-gradient-bg text-palassio-navy font-bold py-3 rounded-xl shadow text-xs"
            >
              CONFIRM RESERVATION & SEND TO WHATSAPP
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function BookingEnginePage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs text-gray-500">Loading Booking Engine...</div>}>
      <BookingEngineContent />
    </Suspense>
  );
}
