export const metadata = {
  title: "Cancellation Policy | Hotel Palassio International",
  description: "Room reservation and banquet booking cancellation policies for Hotel Palassio International Lucknow."
};

export default function CancellationPolicyPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-gray-700 leading-relaxed">
      <h1 className="font-serif text-3xl font-bold text-palassio-navy">Cancellation Policy</h1>
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-palassio-navy">1. Room Stays</h3>
        <p>Free cancellation is available up to 24 hours prior to standard check-in (12:00 PM). Cancellations made within 24 hours of check-in will attract a 1-night room charge penalty.</p>
        <h3 className="font-bold text-sm text-palassio-navy">2. Banquet & Wedding Bookings</h3>
        <p>Banquet hall deposit terms are outlined in individual event contract agreements. Advance venue block deposits are non-refundable within 30 days of the scheduled event date.</p>
      </div>
    </div>
  );
}
