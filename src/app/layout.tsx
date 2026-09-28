import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { HOTEL_INFO } from "@/data/hotelContent";

export const metadata: Metadata = {
  title: {
    default: "Hotel Palassio International | Luxury Hotel & Banquet Venue in Gomti Nagar Extension, Lucknow",
    template: "%s | Hotel Palassio International Lucknow"
  },
  description: "Official Website of Hotel Palassio International, Lucknow. 14 Luxury Rooms, 2 Grand Banquet Halls, Open-Air Rooftop Lounge & Multi-Cuisine Restaurant in Sector-6 Gomti Nagar Extension near Ekana Stadium.",
  keywords: [
    "Hotel Palassio International",
    "Hotel in Gomti Nagar Extension Lucknow",
    "Hotel near Ekana Stadium Lucknow",
    "Banquet hall in Gomti Nagar Lucknow",
    "Rooftop restaurant in Lucknow",
    "Wedding venue Lucknow",
    "Corporate hotel Lucknow"
  ],
  openGraph: {
    title: "Hotel Palassio International | Stay • Celebrate • Dine in Lucknow",
    description: "Experience modern classic hospitality, grand banquets, and open-air rooftop dining in Gomti Nagar Extension, Lucknow.",
    url: "https://www.hotelpalassio.com",
    siteName: "Hotel Palassio International",
    images: [
      {
        url: "/palassio-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Hotel Palassio International Lucknow Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-palassio-cream text-palassio-charcoal flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
