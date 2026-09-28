import { HOTEL_INFO } from "@/data/hotelContent";

export type EnquiryType =
  | "general"
  | "room_booking"
  | "room_enquiry"
  | "banquet_enquiry"
  | "wedding_enquiry"
  | "table_reservation"
  | "rooftop_reservation"
  | "corporate_enquiry"
  | "food_order";

export interface WhatsAppEnquiryData {
  type: EnquiryType;
  name?: string;
  phone?: string;
  email?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomName?: string;
  eventDate?: string;
  guestCount?: string;
  eventType?: string;
  hallName?: string;
  reservationTime?: string;
  companyName?: string;
  notes?: string;
}

export function buildWhatsAppMessage(data: WhatsAppEnquiryData): string {
  const hotelName = HOTEL_INFO.name;
  let message = `Hello *${hotelName}*,\n\n`;

  switch (data.type) {
    case "room_booking":
    case "room_enquiry":
      message += `I would like to enquiry/book a room stay:\n`;
      if (data.name) message += `• *Name:* ${data.name}\n`;
      if (data.phone) message += `• *Phone:* ${data.phone}\n`;
      if (data.roomName) message += `• *Room Category:* ${data.roomName}\n`;
      if (data.checkIn) message += `• *Check-in Date:* ${data.checkIn}\n`;
      if (data.checkOut) message += `• *Check-out Date:* ${data.checkOut}\n`;
      if (data.guests) message += `• *Guests:* ${data.guests}\n`;
      break;

    case "banquet_enquiry":
    case "wedding_enquiry":
      message += `I would like to enquire about Event & Banquet Hall availability:\n`;
      if (data.name) message += `• *Name:* ${data.name}\n`;
      if (data.phone) message += `• *Phone:* ${data.phone}\n`;
      if (data.eventType) message += `• *Event Type:* ${data.eventType}\n`;
      if (data.eventDate) message += `• *Preferred Date:* ${data.eventDate}\n`;
      if (data.guestCount) message += `• *Expected Guests:* ${data.guestCount}\n`;
      if (data.hallName) message += `• *Preferred Hall:* ${data.hallName}\n`;
      break;

    case "table_reservation":
    case "rooftop_reservation":
      message += `I would like to reserve a table at the ${data.type === "rooftop_reservation" ? "Rooftop Lounge" : "Ground Restaurant"}:\n`;
      if (data.name) message += `• *Name:* ${data.name}\n`;
      if (data.phone) message += `• *Phone:* ${data.phone}\n`;
      if (data.eventDate) message += `• *Date:* ${data.eventDate}\n`;
      if (data.reservationTime) message += `• *Time:* ${data.reservationTime}\n`;
      if (data.guests) message += `• *Guests:* ${data.guests}\n`;
      break;

    case "corporate_enquiry":
      message += `I would like to request Corporate Rates & Accommodation details:\n`;
      if (data.name) message += `• *Contact Person:* ${data.name}\n`;
      if (data.companyName) message += `• *Company Name:* ${data.companyName}\n`;
      if (data.phone) message += `• *Phone:* ${data.phone}\n`;
      if (data.email) message += `• *Email:* ${data.email}\n`;
      break;

    case "food_order":
      message += `Hi, I want to enquire about food ordering / takeaway menu at Hotel Palassio.\n`;
      break;

    default:
      message += `Hi! I have an enquiry regarding Hotel Palassio International services.\n`;
      break;
  }

  if (data.notes) {
    message += `• *Additional Notes:* ${data.notes}\n`;
  }

  message += `\nPlease guide me with availability, rates, and next steps. Thank you!`;
  return message;
}

export function openWhatsAppEnquiry(data: WhatsAppEnquiryData) {
  const message = buildWhatsAppMessage(data);
  const encoded = encodeURIComponent(message);
  const number = HOTEL_INFO.contact.whatsappNumber;
  const url = `https://wa.me/${number}?text=${encoded}`;
  window.open(url, "_blank");
}
