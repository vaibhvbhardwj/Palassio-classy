# Hotel Palassio International — Content & Data Replacement Checklist

This file lists all hotel information, licenses, numbers, and assets that require final confirmation or replacement by the hotel management team before production launch. All variables in the codebase are centralized in `src/data/hotelContent.ts` for quick updating.

---

## 1. Compliance & Legal

| Item ID | Component | Current Code Placeholder / Record | Action Required |
|---|---|---|---|
| `fssai-cert` | Food Safety License | Temporary reference: *The Multicuisine Rasoi / Shraddha Soni (Mobile Vendor)* | Upload & input official **Hotel Palassio International FSSAI License Number** for central dining & rooftop operations. |
| `gstin-number` | Tax Registration | Template GST disclaimer in footer/invoices | Supply official 15-digit GSTIN (09XXXXX...) for invoice generation and corporate rate billing. |
| `hotel-star-rating` | Marketing Claims | Omitted per requirement (No star claims) | Retain official property category ("Boutique Hotel & Event Venue") without unverified star claims. |

---

## 2. Property & Sub-Brand Naming

| Item ID | Component | Current Placeholder | Action Required |
|---|---|---|---|
| `rooftop-brand` | Rooftop Lounge | "Rooftop Lounge at Hotel Palassio" | Provide final standalone brand name & tagline (e.g., *Skyline Lounge by Palassio*). |
| `restaurant-brand` | Ground Dining | "Palassio Multicuisine Restaurant" | Confirm official indoor restaurant brand name. |
| `banquet-names` | Banquet Halls | "Palassio Grand Ballroom (Hall 1)" & "Royal Celebration Hall (Hall 2)" | Confirm exact hall branding & square footage measurements. |

---

## 3. High-Resolution Photography & Media

| Asset Type | Current Status | Required Assets |
|---|---|---|
| **Hotel Exterior** | Stock / High Quality Unsplash Placeholder | High-res daylight & illuminated night exterior photos of Plot 6/C-921, Sector-6. |
| **Room Categories** | High Quality Unsplash Placeholders | Actual interior photography for Deluxe Room, Executive Suite, Presidential Suite, and Standard Room. |
| **Banquets & Halls** | High Quality Unsplash Placeholders | Actual photos of Hall 1 and Hall 2 in wedding decor, corporate conference setup, and empty layout. |
| **Rooftop & Dining** | High Quality Unsplash Placeholders | Actual photos of Rooftop sunset ambience, bar setup, live acoustic stage, and signature food dishes. |
| **Logo** | `palassio logo.jpeg` (Integrated into website) | High-res PNG vector / transparent background logo files if available. |

---

## 4. Contact & Operating Details

| Field | Current Placeholder | Status |
|---|---|---|
| Phone Primary | `+91 91234 56789` | Replace with actual primary reception desk phone. |
| WhatsApp Number | `919123456789` | Replace with active business WhatsApp number for direct enquiries. |
| Reservations Email | `reservations@hotelpalassio.com` | Update to active domain mailbox. |
| Delivery Links | `swiggy.com` / `zomato.com` search base | Replace with exact restaurant listing store URLs once published. |

---

## 5. Location in Codebase

All content fields above are centralized in:
`file:///c:/Users/vaibh/OneDrive/Desktop/bharat/Palassio/src/data/hotelContent.ts`
