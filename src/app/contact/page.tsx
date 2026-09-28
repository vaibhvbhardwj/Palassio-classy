"use client";

import { useState } from "react";
import { HOTEL_INFO } from "@/data/hotelContent";
import { openWhatsAppEnquiry, WhatsAppEnquiryData, EnquiryType } from "@/lib/whatsapp";
import { saveCrmLead } from "@/lib/crm";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formType, setFormType] = useState<EnquiryType>("general");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Save lead to local CRM store
    let enquiryCategory: "Room" | "Banquet" | "Wedding" | "Corporate" | "Dining" | "Rooftop" | "General" = "General";
    if (formType === "room_booking" || formType === "room_enquiry") enquiryCategory = "Room";
    else if (formType === "banquet_enquiry") enquiryCategory = "Banquet";
    else if (formType === "wedding_enquiry") enquiryCategory = "Wedding";
    else if (formType === "corporate_enquiry") enquiryCategory = "Corporate";
    else if (formType === "rooftop_reservation") enquiryCategory = "Rooftop";
    else if (formType === "table_reservation") enquiryCategory = "Dining";

    saveCrmLead({
      name: name || "Guest",
      phone: phone || "Not specified",
      email,
      source: "Website",
      enquiryType: enquiryCategory,
      eventDate: date,
      guestCount: guests,
      notes: notes + (company ? ` | Company: ${company}` : "")
    });

    setSubmitted(true);

    // 2. Launch WhatsApp contextual flow directly
    const whatsappData: WhatsAppEnquiryData = {
      type: formType,
      name,
      phone,
      email,
      eventDate: date,
      guests,
      companyName: company,
      notes
    };

    openWhatsAppEnquiry(whatsappData);
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">CONNECT WITH PALASSIO</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">Contact & Enquiries</h1>
        <p className="text-gray-600 text-sm">Reach out to our reservations, banquet sales, or rooftop dining desk.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Box */}
        <div className="lg:col-span-5 bg-palassio-navy text-white p-8 rounded-3xl border border-palassio-gold/30 shadow-2xl space-y-6">
          <h2 className="font-serif text-2xl font-bold text-palassio-gold">Hospitality Contact Desk</h2>

          <div className="space-y-4 text-xs text-gray-300">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-palassio-gold shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Address</strong>
                <span>{HOTEL_INFO.address.full}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-palassio-gold shrink-0" />
              <div>
                <strong className="text-white block">Call Directly</strong>
                <a href={`tel:${HOTEL_INFO.contact.phonePrimary}`} className="text-palassio-gold font-bold hover:underline">
                  {HOTEL_INFO.contact.phonePrimary}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-white block">WhatsApp Desk</strong>
                <a
                  href={`https://wa.me/${HOTEL_INFO.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                >
                  {HOTEL_INFO.contact.whatsappFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-palassio-gold shrink-0" />
              <div>
                <strong className="text-white block">Email Reservations</strong>
                <span>{HOTEL_INFO.contact.emailReservations}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Component */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-palassio-gold/30 shadow-xl space-y-6">
          {/* Tabs for Enquiry Category */}
          <div className="flex flex-wrap gap-2 border-b pb-4">
            <button
              onClick={() => setFormType("general")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${formType === "general" ? "gold-gradient-bg text-palassio-navy" : "bg-gray-100 text-gray-600"}`}
            >
              General
            </button>
            <button
              onClick={() => setFormType("room_enquiry")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${formType === "room_enquiry" ? "gold-gradient-bg text-palassio-navy" : "bg-gray-100 text-gray-600"}`}
            >
              Room Stay
            </button>
            <button
              onClick={() => setFormType("banquet_enquiry")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${formType === "banquet_enquiry" ? "gold-gradient-bg text-palassio-navy" : "bg-gray-100 text-gray-600"}`}
            >
              Banquet Event
            </button>
            <button
              onClick={() => setFormType("rooftop_reservation")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${formType === "rooftop_reservation" ? "gold-gradient-bg text-palassio-navy" : "bg-gray-100 text-gray-600"}`}
            >
              Rooftop Table
            </button>
            <button
              onClick={() => setFormType("corporate_enquiry")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${formType === "corporate_enquiry" ? "gold-gradient-bg text-palassio-navy" : "bg-gray-100 text-gray-600"}`}
            >
              Corporate Rate
            </button>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-lg font-bold text-emerald-900">Enquiry Submitted & WhatsApp Opened</h3>
              <p className="text-xs text-emerald-700">Your enquiry was saved into our CRM system and redirected to WhatsApp for instant confirmation.</p>
              <button onClick={() => setSubmitted(false)} className="text-xs text-palassio-navy font-bold underline">
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-palassio-gold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-palassio-gold focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-palassio-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-palassio-gold focus:outline-none"
                  />
                </div>
              </div>

              {formType === "corporate_enquiry" && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Company Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name"
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-palassio-gold focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Special Requirements / Notes</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention guest count, dietary preferences, timing..."
                  className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-palassio-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient-bg text-palassio-navy font-bold py-3 rounded-xl shadow-lg hover:brightness-110 transition-all text-xs flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>SEND ENQUIRY & CONNECT ON WHATSAPP</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
