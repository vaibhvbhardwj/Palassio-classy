import Link from "next/link";
import { ROOM_CATEGORIES } from "@/data/hotelContent";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function AdminBookingsPage() {
  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <Link href="/admin/dashboard" className="text-xs font-bold text-palassio-gold hover:underline flex items-center space-x-1 mb-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="font-serif text-3xl font-bold text-palassio-navy">Bookings & Inventory Management</h1>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-palassio-gold/30 shadow-xl space-y-4">
        <h3 className="font-serif text-xl font-bold text-palassio-navy">14 Room Inventory Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {ROOM_CATEGORIES.map((room) => (
            <div key={room.id} className="p-4 rounded-xl border border-gray-200 bg-palassio-sand/40 space-y-2">
              <h4 className="font-bold text-sm text-palassio-navy">{room.name}</h4>
              <p className="text-gray-500">Base Price: ₹{room.basePrice}/night</p>
              <div className="text-emerald-700 font-bold bg-emerald-100 p-1.5 rounded text-center">
                Available for Online Booking
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
