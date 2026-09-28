import Link from "next/link";
import Image from "next/image";
import { ROOM_CATEGORIES } from "@/data/hotelContent";
import { Check, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Luxury Rooms & Suites | Hotel Palassio International Lucknow",
  description: "Explore 14 luxury guest rooms and suites in Gomti Nagar Extension. Featuring Deluxe Executive, Palassio Royal Suite, Presidential Suite, and Standard Rooms."
};

export default function RoomsPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">
          ACCOMMODATION & SUITES
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">
          Crafted for Comfort, Peace & Executive Luxury
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Our 14 meticulously designed rooms offer central air conditioning, soundproof windows, high-speed Wi-Fi, premium linens, and dedicated workspace desks.
        </p>
      </div>

      {/* Room Category Cards Grid */}
      <div className="space-y-12">
        {ROOM_CATEGORIES.map((room, idx) => (
          <div
            key={room.id}
            className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-palassio-gold/30 grid grid-cols-1 lg:grid-cols-12 gap-0 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px]">
              <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-palassio-navy/90 text-palassio-gold px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                Starting ₹{room.basePrice} / night
              </div>
            </div>

            {/* Details Section */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-palassio-navy">{room.name}</h2>
                  <p className="text-xs text-palassio-gold font-medium italic mt-1">{room.tagline}</p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{room.description}</p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 py-2 border-y border-gray-100 text-xs text-gray-700">
                  <div><strong>Size:</strong> {room.roomSize}</div>
                  <div><strong>Bed:</strong> {room.bedType}</div>
                  <div><strong>Occupancy:</strong> Up to {room.maxOccupancy} Guests</div>
                  <div><strong>View:</strong> City Skyline / Garden</div>
                </div>

                {/* Key Amenities */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-palassio-navy mb-2">Amenities</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    {room.amenities.slice(0, 6).map((item, i) => (
                      <div key={i} className="flex items-center space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-palassio-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                <Link
                  href={`/rooms/${room.id}`}
                  className="px-5 py-2.5 bg-palassio-sand hover:bg-palassio-gold/20 text-palassio-navy font-bold rounded-xl text-xs transition-colors"
                >
                  VIEW FULL ROOM DETAILS
                </Link>
                <Link
                  href={`/book?room=${room.id}`}
                  className="gold-gradient-bg text-palassio-navy font-bold px-6 py-2.5 rounded-xl text-xs shadow hover:brightness-110 transition-all flex items-center space-x-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK THIS ROOM</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table Section */}
      <div className="bg-palassio-navy text-white rounded-3xl p-6 sm:p-10 border-2 border-palassio-gold/40 shadow-2xl space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-serif text-2xl font-bold text-palassio-gold">Room Category Comparison</h3>
          <p className="text-xs text-gray-300">Compare room sizes, occupancy and pricing at a glance.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-palassio-gold/30 text-palassio-gold font-serif">
                <th className="py-3 px-4">Room Category</th>
                <th className="py-3 px-4">Room Size</th>
                <th className="py-3 px-4">Bed Configuration</th>
                <th className="py-3 px-4">Max Occupancy</th>
                <th className="py-3 px-4">Starting Price</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {ROOM_CATEGORIES.map((r) => (
                <tr key={r.id} className="hover:bg-palassio-navy-dark/50">
                  <td className="py-3 px-4 font-semibold text-white">{r.name}</td>
                  <td className="py-3 px-4 text-gray-300">{r.roomSize}</td>
                  <td className="py-3 px-4 text-gray-300">{r.bedType}</td>
                  <td className="py-3 px-4 text-gray-300">{r.maxOccupancy} Guests</td>
                  <td className="py-3 px-4 font-bold text-palassio-gold">₹{r.basePrice}</td>
                  <td className="py-3 px-4">
                    <Link href={`/book?room=${r.id}`} className="text-palassio-gold font-bold hover:underline">
                      Book Now &rarr;
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
