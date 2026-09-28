import { HOTEL_INFO } from "@/data/hotelContent";

export const metadata = {
  title: "Terms & Conditions | Hotel Palassio International",
  description: "Terms and conditions of stay, reservation booking, and venue usage at Hotel Palassio International Lucknow."
};

export default function TermsPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-gray-700 leading-relaxed">
      <h1 className="font-serif text-3xl font-bold text-palassio-navy">Terms & Conditions</h1>
      <p>Last updated: September 2026</p>
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-palassio-navy">1. Check-in & Identification</h3>
        <p>Standard Check-in is 12:00 PM and Check-out is 11:00 AM. Original Government-issued Photo ID (Aadhaar, Passport, Driving License) is mandatory for all guests upon check-in.</p>
        <h3 className="font-bold text-sm text-palassio-navy">2. Mandatory Service Charge Disclaimer</h3>
        <p>{HOTEL_INFO.compliance.serviceChargeNote}</p>
        <h3 className="font-bold text-sm text-palassio-navy">3. Property Rules</h3>
        <p>Smoking inside guest rooms is strictly prohibited except in designated smoking areas. Damage to hotel assets will be charged to the guest billing account.</p>
      </div>
    </div>
  );
}
