import Link from "next/link";
import Image from "next/image";
import { HOTEL_INFO } from "@/data/hotelContent";
import { Phone, Mail, MapPin, ExternalLink, ShieldAlert, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-palassio-navy-dark text-gray-300 pt-16 pb-24 lg:pb-12 border-t border-palassio-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-palassio-gold/40">
                <Image src="/palassio-logo.jpeg" alt="Hotel Palassio International" fill className="object-cover" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">HOTEL PALASSIO</span>
                <span className="text-xs text-palassio-gold tracking-wider">INTERNATIONAL • LUCKNOW</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Lucknow&apos;s premier hospitality destination featuring 14 luxurious rooms, 2 grand banquet halls, an exquisite multi-cuisine restaurant, and a open-air rooftop lounge in Gomti Nagar Extension.
            </p>
            <div className="space-y-2 text-sm text-gray-300 pt-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-palassio-gold shrink-0 mt-1" />
                <span>{HOTEL_INFO.address.full}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-palassio-gold shrink-0" />
                <a href={`tel:${HOTEL_INFO.contact.phonePrimary}`} className="hover:text-palassio-gold transition-colors">
                  {HOTEL_INFO.contact.phonePrimary} / {HOTEL_INFO.contact.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-palassio-gold shrink-0" />
                <a href={`mailto:${HOTEL_INFO.contact.emailReservations}`} className="hover:text-palassio-gold transition-colors">
                  {HOTEL_INFO.contact.emailReservations}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white border-b border-palassio-gold/20 pb-2">
              Explore Palassio
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rooms" className="hover:text-palassio-gold transition-colors">Luxury Rooms & Suites</Link></li>
              <li><Link href="/dining" className="hover:text-palassio-gold transition-colors">Multi-Cuisine Restaurant</Link></li>
              <li><Link href="/rooftop" className="hover:text-palassio-gold text-palassio-gold transition-colors font-medium">✨ Rooftop Lounge</Link></li>
              <li><Link href="/banquets" className="hover:text-palassio-gold transition-colors">Banquet Halls</Link></li>
              <li><Link href="/weddings" className="hover:text-palassio-gold transition-colors">Weddings & Celebrations</Link></li>
              <li><Link href="/corporate" className="hover:text-palassio-gold transition-colors">Corporate Hospitality</Link></li>
              <li><Link href="/offers" className="hover:text-palassio-gold transition-colors">Special Offers</Link></li>
              <li><Link href="/gallery" className="hover:text-palassio-gold transition-colors">Photo & Video Gallery</Link></li>
            </ul>
          </div>

          {/* Col 3: Guest & Support Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white border-b border-palassio-gold/20 pb-2">
              Guest Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/book" className="hover:text-palassio-gold transition-colors font-semibold text-white">Direct Booking Engine</Link></li>
              <li><Link href="/location" className="hover:text-palassio-gold transition-colors">Location & Directions</Link></li>
              <li><Link href="/guest-club" className="hover:text-palassio-gold transition-colors text-palassio-gold font-medium">👑 Palassio Guest Club</Link></li>
              <li><Link href="/digital-hub" className="hover:text-palassio-gold transition-colors text-cyan-400">📲 In-Stay Guest QR Hub</Link></li>
              <li><Link href="/faq" className="hover:text-palassio-gold transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/blog" className="hover:text-palassio-gold transition-colors">Local Lucknow Guide</Link></li>
              <li><Link href="/contact" className="hover:text-palassio-gold transition-colors">Contact Us</Link></li>
              <li><Link href="/admin" className="hover:text-palassio-gold transition-colors text-gray-500">Staff Admin Login</Link></li>
            </ul>
          </div>

          {/* Col 4: Food Delivery & Legal Policies */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white border-b border-palassio-gold/20 pb-2">
              Food & Delivery
            </h4>
            <p className="text-xs text-gray-400">Order your favorite Lucknowi delicacies online:</p>
            <div className="flex flex-col space-y-2 pt-1">
              <a
                href={HOTEL_INFO.delivery.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/30 rounded text-xs text-orange-300 font-semibold transition-all"
              >
                <span>Order on Swiggy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={HOTEL_INFO.delivery.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded text-xs text-red-300 font-semibold transition-all"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <h4 className="font-serif font-semibold text-sm text-white pt-4 border-b border-palassio-gold/20 pb-1">
              Legal & Hotel Policies
            </h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-palassio-gold">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-palassio-gold">Terms & Conditions</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-palassio-gold">Cancellation Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-palassio-gold">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Mandatory Legal & Regulatory Notices Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-400 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-palassio-navy/60 p-4 rounded-lg border border-gray-800">
            <div className="flex items-start space-x-2">
              <Award className="w-4 h-4 text-palassio-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-200 block">FSSAI Compliance Notice</span>
                <p className="text-[11px] text-gray-400">{HOTEL_INFO.compliance.fssaiNote}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <ShieldAlert className="w-4 h-4 text-palassio-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-200 block">CCPA Service Charge Policy</span>
                <p className="text-[11px] text-gray-400">{HOTEL_INFO.compliance.serviceChargeNote}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-palassio-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-200 block">GST Billing Architecture</span>
                <p className="text-[11px] text-gray-400">{HOTEL_INFO.compliance.gstNote}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 pt-4">
            <p>© {new Date().getFullYear()} Hotel Palassio International. All rights reserved. Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow.</p>
            <p className="pt-2 sm:pt-0">Designed for Conversion & Luxury Hospitality.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
