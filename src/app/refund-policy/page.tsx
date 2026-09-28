export const metadata = {
  title: "Refund Policy | Hotel Palassio International",
  description: "Payment refund terms and timeline guidelines for Hotel Palassio International Lucknow."
};

export default function RefundPolicyPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-gray-700 leading-relaxed">
      <h1 className="font-serif text-3xl font-bold text-palassio-navy">Refund Policy</h1>
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-palassio-navy">Refund Processing Timeline</h3>
        <p>Eligible refunds for cancelled reservations are credited back to the original payment source (UPI / Credit Card / Bank Account) within 5 to 7 business banking days.</p>
      </div>
    </div>
  );
}
