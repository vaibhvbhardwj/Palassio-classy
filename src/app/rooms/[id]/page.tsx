import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ROOM_CATEGORIES } from "@/data/hotelContent";
import BookingWidget from "@/components/BookingWidget";
import { Check, Calendar, ShieldCheck, HelpCircle } from "lucide-react";

export function generateStaticParams() {
  return ROOM_CATEGORIES.map((room) => ({
    id: room.id
  }));
}

export default function SingleRoomPage({ params }: { params: { id: string } }) {
  const room = ROOM_CATEGORIES.find((r) => r.id === params.id);
  if (!room) return notFound();

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 space-x-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/rooms" className="hover:underline">Rooms</Link>
        <span>/</span>
        <span className="text-palassio-navy font-semibold">{room.name}</span>
      </div>

      {/* Main Room Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Images Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-palassio-gold/30">
            <Image src={room.images[0]} alt={room.name} fill className="object-cover" priority />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {room.images.slice(1).map((img, i) => (
              <div key={i} className="relative h-44 rounded-xl overflow-hidden shadow border border-palassio-gold/20">
                <Image src={img} alt={`${room.name} detail ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Room Header Info & Widget */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">
              ROOM SPECIFICATION
            </span>
            <h1 className="font-serif text-3xl font-bold text-palassio-navy">{room.name}</h1>
            <p className="text-sm text-gray-600 italic">{room.tagline}</p>
            <div className="text-2xl font-bold text-palassio-gold pt-2">
              ₹{room.basePrice} <span className="text-xs text-gray-500 font-normal">/ night (excl. taxes)</span>
            </div>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">{room.description}</p>

          {/* Quick specs */}
          <div className="bg-palassio-sand p-4 rounded-xl border border-palassio-gold/20 grid grid-cols-2 gap-2 text-xs">
            <div><strong>Room Size:</strong> {room.roomSize}</div>
            <div><strong>Bed Type:</strong> {room.bedType}</div>
            <div><strong>Max Occupancy:</strong> {room.maxOccupancy} Guests</div>
            <div><strong>Check-in/out:</strong> 12 PM / 11 AM</div>
          </div>

          {/* Embedded Search Widget */}
          <BookingWidget initialRoomId={room.id} />
        </div>
      </div>

      {/* Detailed Amenities & Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="bg-white p-6 rounded-2xl border border-palassio-gold/30 shadow-md space-y-4">
          <h3 className="font-serif text-xl font-bold text-palassio-navy border-b pb-2">Room Amenities & Services</h3>
          <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
            {room.amenities.map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-palassio-gold shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-palassio-gold/30 shadow-md space-y-4">
          <h3 className="font-serif text-xl font-bold text-palassio-navy border-b pb-2">House Rules & Policies</h3>
          <ul className="space-y-2 text-xs text-gray-600">
            {room.houseRules.map((rule, i) => (
              <li key={i} className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-palassio-gold shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2 text-xs text-gray-500 border-t">
            <strong>Cancellation Policy:</strong> {room.cancellationPolicy}
          </div>
        </div>
      </div>

      {/* Room FAQs */}
      <div className="bg-palassio-sand p-6 rounded-2xl border border-palassio-gold/20 space-y-4">
        <h3 className="font-serif text-xl font-bold text-palassio-navy flex items-center space-x-2">
          <HelpCircle className="w-5 h-5 text-palassio-gold" />
          <span>Frequently Asked Questions regarding {room.name}</span>
        </h3>
        <div className="space-y-3">
          {room.faq.map((f, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 text-xs space-y-1">
              <strong className="text-palassio-navy block">Q: {f.q}</strong>
              <p className="text-gray-600">A: {f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
