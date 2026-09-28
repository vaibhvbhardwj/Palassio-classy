"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCrmLeads, LeadRecord } from "@/lib/crm";
import { Users, DollarSign, Calendar, TrendingUp, Layers, CheckCircle } from "lucide-react";

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);

  useEffect(() => {
    setLeads(getCrmLeads());
  }, []);

  const newLeadsCount = leads.filter((l) => l.status === "New").length;
  const confirmedLeadsCount = leads.filter((l) => l.status === "Confirmed").length;

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4">
        <div>
          <span className="text-xs text-palassio-gold font-bold uppercase tracking-widest">MASTER CMS & CONTROL</span>
          <h1 className="font-serif text-3xl font-bold text-palassio-navy">Operations & Sales Dashboard</h1>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          <Link href="/admin/leads" className="gold-gradient-bg text-palassio-navy font-bold px-4 py-2 rounded-lg shadow">
            CRM Leads ({leads.length})
          </Link>
          <Link href="/" className="bg-palassio-navy text-white font-bold px-4 py-2 rounded-lg">
            View Live Website
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-palassio-gold/30 shadow-md space-y-2">
          <span className="text-xs text-gray-500 font-semibold uppercase">Total Website Leads</span>
          <div className="text-3xl font-bold font-serif text-palassio-navy">{leads.length}</div>
          <p className="text-[11px] text-emerald-600 font-semibold">{newLeadsCount} New leads awaiting response</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-palassio-gold/30 shadow-md space-y-2">
          <span className="text-xs text-gray-500 font-semibold uppercase">Room Inventory</span>
          <div className="text-3xl font-bold font-serif text-palassio-navy">14 Rooms</div>
          <p className="text-[11px] text-gray-500">4 Categories • 85% Occupancy</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-palassio-gold/30 shadow-md space-y-2">
          <span className="text-xs text-gray-500 font-semibold uppercase">Banquet Venues</span>
          <div className="text-3xl font-bold font-serif text-palassio-navy">2 Halls</div>
          <p className="text-[11px] text-gray-500">Grand Ballroom & Royal Hall</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-palassio-gold/30 shadow-md space-y-2">
          <span className="text-xs text-gray-500 font-semibold uppercase">Est. Monthly Direct Revenue</span>
          <div className="text-3xl font-bold font-serif text-palassio-gold">₹8.40L</div>
          <p className="text-[11px] text-emerald-600 font-semibold">Direct Website + WhatsApp</p>
        </div>
      </div>

      {/* CRM Recent Leads Preview */}
      <div className="bg-white rounded-3xl p-6 border border-palassio-gold/30 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="font-serif text-xl font-bold text-palassio-navy">Recent Inbound Sales Leads</h3>
          <Link href="/admin/leads" className="text-xs text-palassio-gold font-bold hover:underline">
            Manage All Leads in CRM &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b text-gray-500 font-semibold">
                <th className="py-2.5 px-3">Lead ID</th>
                <th className="py-2.5 px-3">Customer Name</th>
                <th className="py-2.5 px-3">Phone</th>
                <th className="py-2.5 px-3">Enquiry Type</th>
                <th className="py-2.5 px-3">Event/Stay Date</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads.slice(0, 5).map((l) => (
                <tr key={l.id} className="hover:bg-gray-50">
                  <td className="py-3 px-3 font-mono font-bold text-palassio-navy">{l.id}</td>
                  <td className="py-3 px-3 font-semibold text-gray-900">{l.name}</td>
                  <td className="py-3 px-3 text-gray-600">{l.phone}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-palassio-sand text-palassio-navy rounded text-[10px] font-bold">
                      {l.enquiryType}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-500">{l.eventDate || "N/A"}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      l.status === "New" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {l.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
