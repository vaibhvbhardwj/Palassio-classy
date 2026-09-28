"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HOTEL_INFO } from "@/data/hotelContent";
import { Phone, MessageSquare, Menu, X, Calendar, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [diningDropdownOpen, setDiningDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-palassio-navy/95 backdrop-blur-md border-b border-palassio-gold/20 text-white shadow-xl">
      {/* Top Info Strip */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-palassio-navy-dark text-xs border-b border-palassio-gold/10 text-gray-300">
        <div className="flex items-center space-x-6">
          <span>📍 {HOTEL_INFO.address.area}, Lucknow</span>
          <span>⏰ Check-in: {HOTEL_INFO.policyTimes.checkIn} | Check-out: {HOTEL_INFO.policyTimes.checkOut}</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href={`tel:${HOTEL_INFO.contact.phonePrimary}`} className="flex items-center space-x-1 hover:text-palassio-gold transition-colors">
            <Phone className="w-3 h-3 text-palassio-gold" />
            <span>{HOTEL_INFO.contact.phonePrimary}</span>
          </a>
          <a
            href={`https://wa.me/${HOTEL_INFO.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp Us</span>
          </a>
          <Link href="/admin" className="hover:text-palassio-gold transition-colors text-gray-400">
            Admin Staff Login
          </Link>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Branding */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-palassio-gold/40 shadow-md group-hover:border-palassio-gold transition-all">
              <Image
                src="/palassio-logo.jpeg"
                alt="Hotel Palassio International Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-palassio-gold transition-colors">
                HOTEL PALASSIO
              </span>
              <span className="block text-[10px] tracking-widest text-palassio-gold uppercase font-medium">
                International • Lucknow
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 text-sm font-medium">
            <Link href="/" className="px-2.5 py-1.5 hover:text-palassio-gold transition-colors">
              Home
            </Link>
            <Link href="/rooms" className="px-2.5 py-1.5 hover:text-palassio-gold transition-colors">
              Rooms
            </Link>

            {/* Dining Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 px-2.5 py-1.5 hover:text-palassio-gold transition-colors"
                onMouseEnter={() => setDiningDropdownOpen(true)}
                onClick={() => setDiningDropdownOpen(!diningDropdownOpen)}
              >
                <span>Dining</span>
                <ChevronDown className="w-4 h-4 text-palassio-gold" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-palassio-navy border border-palassio-gold/30 rounded-lg shadow-2xl py-2 z-50">
                <Link href="/dining" className="block px-4 py-2 text-sm hover:bg-palassio-navy-dark hover:text-palassio-gold">
                  Multi-Cuisine Dining
                </Link>
                <Link href="/rooftop" className="block px-4 py-2 text-sm hover:bg-palassio-navy-dark hover:text-palassio-gold font-semibold text-palassio-gold">
                  ✨ Rooftop Lounge
                </Link>
                <Link href="/rooftop/menu" className="block px-4 py-2 text-sm hover:bg-palassio-navy-dark hover:text-palassio-gold">
                  Rooftop Menu
                </Link>
                <Link href="/rooftop/events" className="block px-4 py-2 text-sm hover:bg-palassio-navy-dark hover:text-palassio-gold">
                  Rooftop Nights & Events
                </Link>
                <Link href="/order-food" className="block px-4 py-2 text-sm hover:bg-palassio-navy-dark hover:text-emerald-400">
                  Swiggy / Zomato Delivery
                </Link>
              </div>
            </div>

            {/* Banquets & Events Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 px-2.5 py-1.5 hover:text-palassio-gold transition-colors"
                onMouseEnter={() => setEventsDropdownOpen(true)}
                onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
              >
                <span>Banquets</span>
                <ChevronDown className="w-4 h-4 text-palassio-gold" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-palassio-navy border border-palassio-gold/30 rounded-lg shadow-2xl py-2 z-50">
                <Link href="/banquets" className="block px-4 py-2 text-sm hover:bg-palassio-navy-dark hover:text-palassio-gold">
                  Banquet Halls Overview
                </Link>
                <Link href="/weddings" className="block px-4 py-2 text-sm hover:bg-palassio-navy-dark hover:text-palassio-gold font-semibold text-palassio-gold">
                  💍 Grand Weddings
                </Link>
                <Link href="/corporate" className="block px-4 py-2 text-sm hover:bg-palassio-navy-dark hover:text-palassio-gold">
                  Corporate Hospitality
                </Link>
              </div>
            </div>

            <Link href="/offers" className="px-2.5 py-1.5 hover:text-palassio-gold transition-colors">
              Offers
            </Link>
            <Link href="/gallery" className="px-2.5 py-1.5 hover:text-palassio-gold transition-colors">
              Gallery
            </Link>
            <Link href="/location" className="px-2.5 py-1.5 hover:text-palassio-gold transition-colors">
              Location
            </Link>
            <Link href="/contact" className="px-2.5 py-1.5 hover:text-palassio-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/book"
              className="gold-gradient-bg text-palassio-navy font-semibold px-4 py-2 rounded-lg text-sm shadow-md hover:brightness-110 transition-all flex items-center space-x-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href="/book"
              className="gold-gradient-bg text-palassio-navy font-semibold px-3 py-1.5 rounded text-xs"
            >
              BOOK
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-palassio-navy-dark border-b border-palassio-gold/20 px-4 pt-2 pb-6 space-y-3">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-200 hover:text-palassio-gold">
            Home
          </Link>
          <Link href="/rooms" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-200 hover:text-palassio-gold">
            Rooms & Suites
          </Link>
          <div className="pl-3 border-l-2 border-palassio-gold/30 space-y-2 py-1">
            <span className="block text-xs uppercase text-palassio-gold font-bold">Dining & Nightlife</span>
            <Link href="/dining" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-gray-300">
              Multi-Cuisine Restaurant
            </Link>
            <Link href="/rooftop" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-palassio-gold font-medium">
              ✨ Rooftop Lounge
            </Link>
            <Link href="/rooftop/menu" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-gray-300">
              Rooftop Menu
            </Link>
            <Link href="/rooftop/events" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-gray-300">
              Rooftop Events
            </Link>
            <Link href="/order-food" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-emerald-400">
              Order on Swiggy / Zomato
            </Link>
          </div>
          <div className="pl-3 border-l-2 border-palassio-gold/30 space-y-2 py-1">
            <span className="block text-xs uppercase text-palassio-gold font-bold">Banquets & Celebrations</span>
            <Link href="/banquets" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-gray-300">
              Banquet Halls
            </Link>
            <Link href="/weddings" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-palassio-gold">
              💍 Wedding Venues
            </Link>
            <Link href="/corporate" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-gray-300">
              Corporate Rates
            </Link>
          </div>
          <Link href="/offers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-200 hover:text-palassio-gold">
            Special Offers
          </Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-200 hover:text-palassio-gold">
            Photo Gallery
          </Link>
          <Link href="/location" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-200 hover:text-palassio-gold">
            Location & Map
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-200 hover:text-palassio-gold">
            Contact & Enquiries
          </Link>
          <Link href="/guest-club" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-palassio-gold font-semibold">
            👑 Palassio Guest Club
          </Link>
          <Link href="/digital-hub" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-cyan-400">
            📲 In-Stay Guest QR Hub
          </Link>
        </div>
      )}
    </header>
  );
}
