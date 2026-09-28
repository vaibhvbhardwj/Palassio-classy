export interface LeadRecord {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email?: string;
  source: "Website" | "WhatsApp" | "Call" | "Direct Form";
  enquiryType: "Room" | "Banquet" | "Wedding" | "Corporate" | "Dining" | "Rooftop" | "General";
  eventDate?: string;
  guestCount?: string;
  assignedTo: string;
  status: "New" | "Contacted" | "Follow-up" | "Quote Sent" | "Confirmed" | "Lost";
  notes?: string;
}

const CRM_STORAGE_KEY = "palassio_crm_leads_v1";

const INITIAL_LEADS: LeadRecord[] = [
  {
    id: "LEAD-1001",
    createdAt: "2026-09-27T10:30:00Z",
    name: "Amitabh Verma",
    phone: "+91 98765 43210",
    email: "amitabh.v@gmail.com",
    source: "Website",
    enquiryType: "Wedding",
    eventDate: "2026-11-20",
    guestCount: "350",
    assignedTo: "Banquet Manager",
    status: "New",
    notes: "Requires Palassio Grand Ballroom with full Awadhi catering spread and complimentary suite."
  },
  {
    id: "LEAD-1002",
    createdAt: "2026-09-26T14:15:00Z",
    name: "Priya Sharma (TechCorp India)",
    phone: "+91 91234 11223",
    email: "psharma@techcorp.in",
    source: "Direct Form",
    enquiryType: "Corporate",
    eventDate: "2026-10-10",
    guestCount: "40",
    assignedTo: "Sales Desk",
    status: "Quote Sent",
    notes: "Requesting corporate room tariff contract for 10 recurring stays per month."
  },
  {
    id: "LEAD-1003",
    createdAt: "2026-09-25T19:40:00Z",
    name: "Siddharth Malhotra",
    phone: "+91 99887 76655",
    email: "sid.m@hotmail.com",
    source: "WhatsApp",
    enquiryType: "Rooftop",
    eventDate: "2026-09-29",
    guestCount: "6",
    assignedTo: "Restaurant Lead",
    status: "Confirmed",
    notes: "VIP table reservation at Rooftop Lounge for birthday celebration."
  }
];

export function getCrmLeads(): LeadRecord[] {
  if (typeof window === "undefined") return INITIAL_LEADS;
  try {
    const data = localStorage.getItem(CRM_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to load CRM leads:", e);
    return INITIAL_LEADS;
  }
}

export function saveCrmLead(leadData: Omit<LeadRecord, "id" | "createdAt" | "assignedTo" | "status">): LeadRecord {
  const existing = getCrmLeads();
  const newLead: LeadRecord = {
    ...leadData,
    id: `LEAD-${1000 + existing.length + 1}`,
    createdAt: new Date().toISOString(),
    assignedTo: "Unassigned Desk",
    status: "New"
  };
  const updated = [newLead, ...existing];
  if (typeof window !== "undefined") {
    localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(updated));
  }
  return newLead;
}

export function updateLeadStatus(id: string, status: LeadRecord["status"]): void {
  const existing = getCrmLeads();
  const updated = existing.map(l => l.id === id ? { ...l, status } : l);
  if (typeof window !== "undefined") {
    localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(updated));
  }
}
