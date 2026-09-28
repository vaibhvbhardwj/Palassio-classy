"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCrmLeads, updateLeadStatus, LeadRecord } from "@/lib/crm";
import { Phone, Mail, MessageSquare, ArrowLeft } from "lucide-react";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);

  useEffect(() => {
    setLeads(getCrmLeads());
  }, []);

  const handleStatusChange = (id: string, newStatus: LeadRecord["status"]) => {
    updateLeadStatus(id, newStatus);
    setLeads(getCrmLeads());
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <Link href="/admin/dashboard" className="text-xs font-bold text-palassio-gold hover:underline flex items-center space-x-1 mb-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Master Dashboard</span>
          </Link>
          <h1 className="font-serif text-3xl font-bold text-palassio-navy">CRM Lead Management Portal</h1>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-palassio-gold/30 shadow-xl space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b text-gray-500 font-semibold bg-gray-50">
                <th className="py-3 px-3">Lead ID</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Customer Name</th>
                <th className="py-3 px-3">Contact</th>
                <th className="py-3 px-3">Type</th>
                <th className="py-3 px-3">Event/Stay Date</th>
                <th className="py-3 px-3">Notes</th>
                <th className="py-3 px-3">Status Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads.map((l) => (
                <tr key={l.id} className="hover:bg-palassio-sand/30">
                  <td className="py-3 px-3 font-mono font-bold text-palassio-navy">{l.id}</td>
                  <td className="py-3 px-3 text-gray-500">{new Date(l.createdAt).toLocaleDateString()}</td>
                  <td className="py-3 px-3 font-semibold text-gray-900">{l.name}</td>
                  <td className="py-3 px-3 space-y-0.5">
                    <a href={`tel:${l.phone}`} className="text-palassio-navy hover:underline block">{l.phone}</a>
                    {l.email && <span className="text-gray-400 block text-[10px]">{l.email}</span>}
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-palassio-navy text-palassio-gold rounded text-[10px] font-bold">
                      {l.enquiryType}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-600">{l.eventDate || "N/A"}</td>
                  <td className="py-3 px-3 text-gray-500 max-w-xs text-[11px] truncate">{l.notes}</td>
                  <td className="py-3 px-3">
                    <select
                      value={l.status}
                      onChange={(e) => handleStatusChange(l.id, e.target.value as LeadRecord["status"])}
                      className="p-1.5 rounded border border-gray-300 bg-white font-bold text-xs"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Follow-up">Follow-up</option>
                      <option value="Quote Sent">Quote Sent</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Lost">Lost</option>
                    </select>
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
