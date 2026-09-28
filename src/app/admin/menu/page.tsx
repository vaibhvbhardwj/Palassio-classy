import Link from "next/link";
import { RESTAURANT_MENU } from "@/data/hotelContent";
import { ArrowLeft } from "lucide-react";

export default function AdminMenuPage() {
  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <Link href="/admin/dashboard" className="text-xs font-bold text-palassio-gold hover:underline flex items-center space-x-1 mb-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="font-serif text-3xl font-bold text-palassio-navy">Restaurant & Rooftop Menu Manager</h1>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-palassio-gold/30 shadow-xl space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b text-gray-500 font-semibold bg-gray-50">
                <th className="py-3 px-3">Item Name</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Price</th>
                <th className="py-3 px-3">Diet</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {RESTAURANT_MENU.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-3 font-semibold text-palassio-navy">{item.name}</td>
                  <td className="py-3 px-3 text-gray-600">{item.category}</td>
                  <td className="py-3 px-3 font-bold text-palassio-gold">₹{item.price}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.isVeg ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                      {item.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-emerald-700 font-bold">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
