"use client";

import { useState } from "react";
import { Crown, CheckCircle2, Gift } from "lucide-react";

export default function GuestClubPage() {
  const [joined, setJoined] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Crown className="w-12 h-12 text-palassio-gold mx-auto" />
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">MEMBERSHIP & LOYALTY</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">Palassio Privilege Club</h1>
        <p className="text-gray-600 text-sm">Enjoy member-only room discounts, priority rooftop reservations, and birthday rewards.</p>
      </div>

      {joined ? (
        <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-emerald-900">Welcome to Palassio Privilege Club!</h3>
          <p className="text-xs text-emerald-700">Your membership request for {name} ({phone}) has been registered.</p>
        </div>
      ) : (
        <form onSubmit={handleJoin} className="bg-white p-8 rounded-3xl border border-palassio-gold/30 shadow-xl space-y-4 max-w-lg mx-auto text-xs">
          <h3 className="font-serif text-lg font-bold text-palassio-navy">Free Instant Membership Sign-Up</h3>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Full Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-2.5 rounded border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">WhatsApp Number *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full p-2.5 rounded border border-gray-300"
              required
            />
          </div>
          <button type="submit" className="w-full gold-gradient-bg text-palassio-navy font-bold py-3 rounded-xl shadow">
            JOIN PALASSIO PRIVILEGE CLUB
          </button>
        </form>
      )}
    </div>
  );
}
