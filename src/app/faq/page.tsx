import { FAQS_LIST } from "@/data/hotelContent";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Hotel Palassio",
  description: "Find answers regarding hotel check-in times, ID requirements, local couple policies, banquet capacities, rooftop lounge hours, and direct booking perks."
};

export default function FAQPage() {
  const categories = Array.from(new Set(FAQS_LIST.map((f) => f.category)));

  return (
    <div className="py-12 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">HELP & INFORMATION</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-sm">Clear answers regarding room stays, banquet events, food ordering, and hotel policies.</p>
      </div>

      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat} className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-palassio-navy border-b border-palassio-gold/30 pb-2">
              {cat}
            </h2>
            <div className="space-y-3">
              {FAQS_LIST.filter((f) => f.category === cat).map((faq, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
                  <h3 className="font-semibold text-sm text-palassio-navy flex items-start space-x-2">
                    <HelpCircle className="w-4 h-4 text-palassio-gold shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
