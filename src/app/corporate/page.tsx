import Link from "next/link";
import { Building2, Check, ShieldCheck, Mail } from "lucide-react";

export const metadata = {
  title: "Corporate Stays & Business Conferences | Hotel Palassio",
  description: "Corporate room rates, business travel packages, GST billing, and seminar conference halls in Gomti Nagar Extension near Ekana Stadium, Lucknow."
};

export default function CorporatePage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">
          CORPORATE HOSPITALITY
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">
          Executive Stays & Business Conferences
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Tailored corporate room tariff agreements, compliant GST invoicing, high-speed Wi-Fi, dedicated work desks, and AV-equipped conference halls for corporate clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-palassio-gold/30 shadow-lg space-y-6">
          <Building2 className="w-10 h-10 text-palassio-gold" />
          <h2 className="font-serif text-2xl font-bold text-palassio-navy">Corporate Preferred Rate Tariff</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            We partner with corporate enterprises, consulting firms, IT companies, and government delegations for recurring employee stays. Enjoy fixed discounted room rates year-round.
          </p>
          <ul className="space-y-2 text-xs text-gray-700">
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-palassio-gold" />
              <span>Complimentary High-Speed Wi-Fi & Breakfast Options</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-palassio-gold" />
              <span>Direct GST Invoice Billing to Company GSTIN</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-palassio-gold" />
              <span>Priority Early Check-in & Express Checkout</span>
            </li>
          </ul>
        </div>

        <div className="bg-palassio-navy text-white p-8 rounded-3xl border border-palassio-gold/40 shadow-xl space-y-6">
          <h2 className="font-serif text-2xl font-bold text-palassio-gold">Request Corporate Rate Quotation</h2>
          <p className="text-xs text-gray-300">Submit your company details to receive our official corporate tariff sheet.</p>
          <form action="/contact" method="GET" className="space-y-4 text-xs">
            <input type="hidden" name="type" value="corporate" />
            <div>
              <label className="block text-gray-300 mb-1">Company Name</label>
              <input type="text" placeholder="e.g. TCS / HCL / L&T" className="w-full p-2.5 rounded bg-palassio-navy-dark border border-palassio-gold/30 text-white focus:outline-none" required />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Contact Person Name</label>
              <input type="text" placeholder="HR / Admin Officer" className="w-full p-2.5 rounded bg-palassio-navy-dark border border-palassio-gold/30 text-white focus:outline-none" required />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Work Email</label>
              <input type="email" placeholder="name@company.com" className="w-full p-2.5 rounded bg-palassio-navy-dark border border-palassio-gold/30 text-white focus:outline-none" required />
            </div>
            <button type="submit" className="w-full gold-gradient-bg text-palassio-navy font-bold py-3 rounded-lg text-xs shadow">
              SUBMIT CORPORATE RATE REQUEST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
