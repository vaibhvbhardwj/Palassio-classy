import Link from "next/link";
import Image from "next/image";
import BookingWidget from "@/components/BookingWidget";
import { HOTEL_INFO, ROOM_CATEGORIES, BANQUET_HALLS, OFFERS_LIST, REVIEWS_LIST } from "@/data/hotelContent";
import { Phone, MessageSquare, MapPin, Sparkles, Utensils, Award, CheckCircle2, ChevronRight, Star, Building, ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-palassio-navy text-white overflow-hidden pt-10 pb-16">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
            alt="Hotel Palassio International Exterior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palassio-navy via-palassio-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-palassio-gold/20 border border-palassio-gold/40 text-palassio-gold text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gomti Nagar Extension • Lucknow</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Stay • Celebrate • Dine
            </h1>
            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed">
              Welcome to <strong className="text-palassio-gold font-semibold">Hotel Palassio International</strong>. Lucknow&apos;s premier hospitality destination featuring 14 refined guest rooms, 2 grand banquet halls, an exquisite restaurant, and an open-air rooftop lounge.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/book"
                className="gold-gradient-bg text-palassio-navy font-bold px-6 py-3 rounded-xl shadow-xl hover:brightness-110 transition-all text-sm tracking-wide"
              >
                BOOK YOUR STAY
              </Link>
              <Link
                href="/rooms"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-xl backdrop-blur-md transition-all text-sm"
              >
                EXPLORE ROOMS
              </Link>
              <Link
                href="/rooftop"
                className="bg-palassio-burgundy/80 hover:bg-palassio-burgundy text-amber-200 border border-amber-500/30 font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                ROOFTOP LOUNGE
              </Link>
            </div>
          </div>

          {/* Interactive Booking Search Widget */}
          <div className="mt-12 max-w-5xl mx-auto">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* SECTION 2: HOTEL INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-palassio-gold font-bold uppercase text-xs tracking-widest">
              ABOUT HOTEL PALASSIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-palassio-navy leading-tight">
              Contemporary Luxury & Timeless Awadhi Hospitality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Situated in Sector-6, Gomti Nagar Extension, Hotel Palassio International offers a complete hospitality ecosystem designed for corporate executives, wedding parties, and leisure travelers alike.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-palassio-gold/20 shadow-sm text-center">
                <span className="font-serif text-3xl font-bold text-palassio-gold block">14</span>
                <span className="text-xs text-gray-500 font-medium">Luxury Rooms</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-palassio-gold/20 shadow-sm text-center">
                <span className="font-serif text-3xl font-bold text-palassio-gold block">2</span>
                <span className="text-xs text-gray-500 font-medium">Banquet Halls</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-palassio-gold/20 shadow-sm text-center col-span-2 sm:col-span-1">
                <span className="font-serif text-3xl font-bold text-palassio-gold block">1</span>
                <span className="text-xs text-gray-500 font-medium">Rooftop Lounge</span>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/about" className="inline-flex items-center space-x-2 text-palassio-navy font-semibold hover:text-palassio-gold transition-colors text-sm">
                <span>Learn More About Our Property</span>
                <ChevronRight className="w-4 h-4 text-palassio-gold" />
              </Link>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-palassio-gold/30">
            <Image
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
              alt="Hotel Palassio Interior Lounge"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: ROOM CATEGORIES */}
      <section className="bg-palassio-sand py-16 border-y border-palassio-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-palassio-gold font-bold uppercase text-xs tracking-widest">
              ACCOMMODATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-palassio-navy">
              Refined Guest Rooms & Suites
            </h2>
            <p className="text-gray-600 text-sm">
              Each room is crafted with plush bedding, quiet air conditioning, high-speed Wi-Fi, and dedicated workstations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOM_CATEGORIES.map((room) => (
              <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-palassio-gold/20 flex flex-col hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full">
                  <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-palassio-navy/90 text-palassio-gold px-2.5 py-1 rounded text-xs font-bold shadow">
                    ₹{room.basePrice} / night
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-palassio-navy">{room.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{room.description}</p>
                    <div className="mt-3 flex items-center space-x-3 text-xs text-gray-600">
                      <span>📐 {room.roomSize}</span>
                      <span>•</span>
                      <span>🛏️ {room.bedType}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <Link href={`/rooms/${room.id}`} className="text-xs font-semibold text-palassio-navy hover:text-palassio-gold">
                      View Details
                    </Link>
                    <Link href={`/book?room=${room.id}`} className="gold-gradient-bg text-palassio-navy font-bold text-xs px-3 py-1.5 rounded shadow">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/rooms" className="inline-flex items-center space-x-2 text-palassio-navy font-bold hover:text-palassio-gold transition-colors text-sm">
              <span>VIEW ALL ROOM CATEGORIES & COMPARISON</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: ROOFTOP DESTINATION TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-palassio-navy text-white shadow-2xl border-2 border-palassio-gold/40 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
              alt="Rooftop Lounge Night View"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-palassio-navy via-palassio-navy/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <span>✨ DESTINATION ROOFTOP LOUNGE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Lucknow Skyline & Open-Air Dining
            </h2>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Experience sunset views, acoustic unplugged music, craft beverages, and authentic late-night tandoori & Awadhi delicacies under the star-lit Lucknow sky.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/rooftop"
                className="gold-gradient-bg text-palassio-navy font-bold px-6 py-3 rounded-xl shadow-lg hover:brightness-110 transition-all text-sm"
              >
                RESERVE ROOFTOP TABLE
              </Link>
              <Link
                href="/rooftop/menu"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl transition-all text-sm font-semibold"
              >
                VIEW ROOFTOP MENU
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BANQUETS & WEDDINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-palassio-gold font-bold uppercase text-xs tracking-widest">
            BANQUETS & EVENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-palassio-navy">
            Host Unforgettable Celebrations
          </h2>
          <p className="text-gray-600 text-sm">
            Featuring 2 pillarless banquet halls accommodating up to 400 guests for weddings, sangeet, ring ceremonies, and corporate galas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BANQUET_HALLS.map((hall) => (
            <div key={hall.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-palassio-gold/30 flex flex-col">
              <div className="relative h-64 w-full">
                <Image src={hall.images[0]} alt={hall.name} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-palassio-navy/90 text-palassio-gold px-3 py-1 rounded-full text-xs font-bold">
                  Capacity: {hall.capacity}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-palassio-navy">{hall.name}</h3>
                  <p className="text-xs text-gray-500 mt-2">{hall.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {hall.suitableFor.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-palassio-sand text-palassio-navy rounded text-[11px] font-medium border border-palassio-gold/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link href={`/banquets/${hall.id}`} className="text-xs font-bold text-palassio-navy hover:text-palassio-gold">
                    View Hall Specifications
                  </Link>
                  <Link href="/contact?type=banquet" className="gold-gradient-bg text-palassio-navy font-bold text-xs px-4 py-2 rounded shadow">
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: GUEST REVIEWS */}
      <section className="bg-palassio-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="flex justify-center space-x-1 text-palassio-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="font-serif text-3xl font-bold text-white">What Our Guests Say</h2>
            <p className="text-gray-300 text-sm">Verified guest feedback from Google and direct stays.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_LIST.map((rev) => (
              <div key={rev.id} className="bg-palassio-navy-dark p-6 rounded-2xl border border-palassio-gold/20 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-sm">{rev.guestName}</h4>
                    <span className="text-xs text-gray-400">{rev.location} • {rev.stayType}</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-palassio-gold/20 text-palassio-gold rounded font-medium">
                    {rev.platform}
                  </span>
                </div>
                <p className="text-xs text-gray-300 italic leading-relaxed">&ldquo;{rev.comment}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: LOCATION & MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-palassio-gold font-bold uppercase text-xs tracking-widest">PROXIMITY & LOCATION</span>
            <h2 className="font-serif text-3xl font-bold text-palassio-navy">Prime Location in Gomti Nagar Extension</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Located conveniently on Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow. Minutes away from Ekana Cricket Stadium and Phoenix Palassio Shopping Mall.
            </p>

            <div className="space-y-3">
              {HOTEL_INFO.address.landmarks.map((lm, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-palassio-gold/20 shadow-sm text-xs">
                  <span className="font-medium text-palassio-navy">📍 {lm.name}</span>
                  <span className="text-gray-500 font-semibold">{lm.distance} ({lm.travelTime})</span>
                </div>
              ))}
            </div>

            <a
              href={HOTEL_INFO.address.googleMapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-palassio-navy text-white font-bold px-5 py-2.5 rounded-lg text-xs hover:bg-palassio-navy-dark transition-colors"
            >
              <span>OPEN GOOGLE MAPS DIRECTIONS</span>
              <ExternalLink className="w-4 h-4 text-palassio-gold" />
            </a>
          </div>

          <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-palassio-gold/30 shadow-xl relative">
            <iframe
              src={HOTEL_INFO.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Hotel Palassio Google Maps"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CONVERSION CTA STRIP */}
      <section className="bg-palassio-navy text-white py-12 border-t-2 border-palassio-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Plan Your Stay, Celebration, or Dining Experience
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Book directly on our official portal for best rate guarantee and complimentary perks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/book" className="gold-gradient-bg text-palassio-navy font-bold px-6 py-3 rounded-xl shadow-lg text-sm">
              BOOK A ROOM
            </Link>
            <Link href="/contact?type=banquet" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 text-sm">
              PLAN AN EVENT
            </Link>
            <Link href="/rooftop" className="bg-palassio-burgundy/80 text-amber-200 font-semibold px-6 py-3 rounded-xl text-sm border border-amber-500/30">
              RESERVE TABLE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
