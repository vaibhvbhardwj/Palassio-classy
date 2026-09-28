import { HOTEL_INFO } from "@/data/hotelContent";

export const metadata = {
  title: "Privacy Policy | Hotel Palassio International",
  description: "Privacy policy and guest data consent protection guidelines for Hotel Palassio International Lucknow."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-gray-700 leading-relaxed">
      <h1 className="font-serif text-3xl font-bold text-palassio-navy">Privacy Policy</h1>
      <p>Last updated: September 2026</p>
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-palassio-navy">1. Data Collection & Purpose</h3>
        <p>Hotel Palassio International collects customer information solely for reservation fulfillment, guest verification, GST invoicing, and optional consent-based marketing through Palassio Privilege Club.</p>
        <h3 className="font-bold text-sm text-palassio-navy">2. Direct Booking Consent</h3>
        <p>In accordance with Indian privacy regulations, marketing consent checkboxes are never pre-selected. OTA guest data is not converted automatically into unsolicited marketing databases.</p>
        <h3 className="font-bold text-sm text-palassio-navy">3. Contact for Data Removal</h3>
        <p>Guests may request removal of their contact information at any time by emailing {HOTEL_INFO.contact.emailGeneral}.</p>
      </div>
    </div>
  );
}
