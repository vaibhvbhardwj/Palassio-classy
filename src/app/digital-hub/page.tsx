import Link from "next/link";
import { QrCode, Utensils, Wifi, Phone, Coffee, Sparkles } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelContent";

export const metadata = {
  title: "In-Stay Guest Digital Hub | Hotel Palassio",
  description: "QR guest portal for room service, Wi-Fi password, housekeeping, and front desk assistance at Hotel Palassio."
};

export default function DigitalHubPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <QrCode className="w-12 h-12 text-palassio-gold mx-auto" />
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">GUEST IN-STAY PORTAL</span>
        <h1 className="font-serif text-3xl font-bold text-palassio-navy">Palassio In-Room Concierge</h1>
        <p className="text-gray-600 text-xs">Welcome to Hotel Palassio International! Use quick actions below during your stay.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-palassio-gold/30 shadow-md space-y-3">
          <Wifi className="w-8 h-8 text-palassio-gold" />
          <h3 className="font-serif font-bold text-lg text-palassio-navy">In-Room High Speed Wi-Fi</h3>
          <p className="text-xs text-gray-600">Network: <strong>Palassio_Guest_WiFi</strong></p>
          <p className="text-xs text-gray-600">Password: <strong>Palassio@2026</strong></p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-palassio-gold/30 shadow-md space-y-3">
          <Utensils className="w-8 h-8 text-palassio-gold" />
          <h3 className="font-serif font-bold text-lg text-palassio-navy">In-Room Dining Menu</h3>
          <p className="text-xs text-gray-600">Order room service directly via WhatsApp.</p>
          <Link href="/rooftop/menu" className="text-xs font-bold text-palassio-navy hover:text-palassio-gold block pt-1">
            View Digital Menu &rarr;
          </Link>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-palassio-gold/30 shadow-md space-y-3">
          <Phone className="w-8 h-8 text-palassio-gold" />
          <h3 className="font-serif font-bold text-lg text-palassio-navy">Reception / Intercom</h3>
          <p className="text-xs text-gray-600">Dial <strong>&apos;0&apos;</strong> on your room phone or call desk directly.</p>
          <a href={`tel:${HOTEL_INFO.contact.phonePrimary}`} className="text-xs font-bold text-palassio-gold block">
            {HOTEL_INFO.contact.phonePrimary}
          </a>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-palassio-gold/30 shadow-md space-y-3">
          <Coffee className="w-8 h-8 text-palassio-gold" />
          <h3 className="font-serif font-bold text-lg text-palassio-navy">Housekeeping & Towels</h3>
          <p className="text-xs text-gray-600">Request extra towels, water bottles, or room cleaning.</p>
          <a href={`https://wa.me/${HOTEL_INFO.contact.whatsappNumber}?text=Hi%20Reception%2C%20I%20am%20in%20room...%20need%20housekeeping`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-600 block">
            WhatsApp Housekeeping &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
