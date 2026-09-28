"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Users, Tag, ArrowRight } from "lucide-react";
import { ROOM_CATEGORIES } from "@/data/hotelContent";

export default function BookingWidget({ initialRoomId = "" }: { initialRoomId?: string }) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("2026-10-01");
  const [checkOut, setCheckOut] = useState("2026-10-03");
  const [guests, setGuests] = useState("2");
  const [roomId, setRoomId] = useState(initialRoomId || "deluxe-room");
  const [promoCode, setPromoCode] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      checkIn,
      checkOut,
      guests,
      room: roomId,
      promo: promoCode
    }).toString();
    router.push(`/book?${query}`);
  };

  return (
    <div className="bg-palassio-navy/90 backdrop-blur-md border border-palassio-gold/40 rounded-2xl p-4 sm:p-6 shadow-2xl text-white">
      <h3 className="font-serif text-lg sm:text-xl font-semibold mb-4 text-palassio-gold flex items-center space-x-2">
        <Calendar className="w-5 h-5 text-palassio-gold" />
        <span>Check Room Availability & Best Rates</span>
      </h3>
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Check-In */}
        <div>
          <label className="block text-xs text-gray-300 mb-1 font-medium">Check-In Date</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-palassio-navy-dark border border-palassio-gold/30 rounded-lg px-3 py-2 text-sm text-white focus:border-palassio-gold focus:outline-none"
            required
          />
        </div>

        {/* Check-Out */}
        <div>
          <label className="block text-xs text-gray-300 mb-1 font-medium">Check-Out Date</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-palassio-navy-dark border border-palassio-gold/30 rounded-lg px-3 py-2 text-sm text-white focus:border-palassio-gold focus:outline-none"
            required
          />
        </div>

        {/* Guests */}
        <div>
          <label className="block text-xs text-gray-300 mb-1 font-medium flex items-center space-x-1">
            <Users className="w-3.5 h-3.5 text-palassio-gold" />
            <span>Guests & Rooms</span>
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-palassio-navy-dark border border-palassio-gold/30 rounded-lg px-3 py-2 text-sm text-white focus:border-palassio-gold focus:outline-none"
          >
            <option value="1">1 Guest (Single)</option>
            <option value="2">2 Guests (Double)</option>
            <option value="3">3 Guests (Triple / Extra Bed)</option>
            <option value="4">4+ Guests (Family / Suite)</option>
          </select>
        </div>

        {/* Room Category */}
        <div>
          <label className="block text-xs text-gray-300 mb-1 font-medium">Room Category</label>
          <select
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="w-full bg-palassio-navy-dark border border-palassio-gold/30 rounded-lg px-3 py-2 text-sm text-white focus:border-palassio-gold focus:outline-none"
          >
            {ROOM_CATEGORIES.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} (₹{room.basePrice}/night)
              </option>
            ))}
          </select>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="submit"
            className="w-full gold-gradient-bg text-palassio-navy font-bold py-2.5 px-4 rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2 text-sm"
          >
            <span>CHECK AVAILABILITY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
