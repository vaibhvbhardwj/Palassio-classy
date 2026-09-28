export interface HotelInfo {
  name: string;
  tagline: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectUrl: string;
    landmarks: { name: string; distance: string; travelTime: string }[];
  };
  contact: {
    phonePrimary: string;
    phoneSecondary: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    emailReservations: string;
    emailGeneral: string;
    emailEvents: string;
  };
  policyTimes: {
    checkIn: string;
    checkOut: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  delivery: {
    swiggyUrl: string;
    zomatoUrl: string;
  };
  compliance: {
    fssaiNote: string;
    gstNote: string;
    serviceChargeNote: string;
  };
}

export const HOTEL_INFO: HotelInfo = {
  name: "Hotel Palassio International",
  tagline: "Stay • Celebrate • Dine",
  address: {
    line1: "Plot No. 6/C-921",
    area: "Sector-6, Gomti Nagar Extension",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226010",
    full: "Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow, Uttar Pradesh -- 226010",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.10860517596!2d81.000305!3d26.836474!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3a846c4f82f%3A0x8bb1ca76b583f605!2sGomti%20Nagar%20Extension%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectUrl: "https://maps.google.com/?q=Plot+No.+6/C-921,+Sector-6,+Gomti+Nagar+Extension,+Lucknow,+Uttar+Pradesh+226010",
    landmarks: [
      { name: "Ekana Cricket Stadium", distance: "3.5 km", travelTime: "8 mins" },
      { name: "Palassio Mall / Phoenix Palassio", distance: "2.8 km", travelTime: "6 mins" },
      { name: "Charbagh Railway Station", distance: "14 km", travelTime: "25 mins" },
      { name: "Chaudhary Charan Singh International Airport (LKO)", distance: "18 km", travelTime: "30 mins" },
      { name: "Janeshwar Mishra Park", distance: "4.2 km", travelTime: "10 mins" }
    ]
  },
  contact: {
    phonePrimary: "+91 91234 56789",
    phoneSecondary: "+91 522 400 1234",
    whatsappNumber: "919123456789",
    whatsappFormatted: "+91 91234 56789",
    emailReservations: "reservations@hotelpalassio.com",
    emailGeneral: "info@hotelpalassio.com",
    emailEvents: "events@hotelpalassio.com"
  },
  policyTimes: {
    checkIn: "12:00 PM",
    checkOut: "11:00 AM"
  },
  social: {
    instagram: "https://instagram.com/hotelpalassiointernational",
    facebook: "https://facebook.com/hotelpalassiointernational",
    youtube: "https://youtube.com/@hotelpalassiointernational"
  },
  delivery: {
    swiggyUrl: "https://www.swiggy.com",
    zomatoUrl: "https://www.zomato.com"
  },
  compliance: {
    fssaiNote: "FSSAI compliance setup in process for primary hotel dining. (Current certificate on record: The Multicuisine Rasoi / Shraddha Soni - Mobile Food Vendor registration).",
    gstNote: "GST billing structured as per standard Indian hospitality tax regulations. Final GSTIN to be printed on tax invoices.",
    serviceChargeNote: "In strict compliance with CCPA guidelines, service charge is not automatically added or mandatory; tips/gratuities are purely voluntary."
  }
};

export const MISSING_CONTENT_FLAGS = [
  { id: "fssai-cert", category: "Compliance", description: "Official Hotel Palassio FSSAI License Number (Replace temporary vendor record)." },
  { id: "gstin-number", category: "Compliance", description: "Official Hotel GSTIN for billing invoice headers." },
  { id: "rooftop-brand", category: "Rooftop", description: "Final standalone sub-brand name & logo for the Rooftop Lounge." },
  { id: "restaurant-brand", category: "Dining", description: "Final official name for the ground/indoor multi-cuisine restaurant." },
  { id: "banquet-names", category: "Banquets", description: "Exact official hall names & sq.ft dimensions for Banquet Hall 1 & Banquet Hall 2." },
  { id: "high-res-photos", category: "Media", description: "Final professionally shot interior & exterior photos for each room category, rooftop, and banquets." }
];

export interface RoomCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  basePrice: number;
  maxOccupancy: number;
  bedType: string;
  roomSize: string;
  images: string[];
  amenities: string[];
  features: string[];
  houseRules: string[];
  cancellationPolicy: string;
  faq: { q: string; a: string }[];
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "deluxe-room",
    name: "Deluxe Executive Room",
    tagline: "Elegance and comfort for modern corporate & leisure travelers.",
    description: "Thoughtfully designed for maximum comfort, featuring premium linen, a dedicated workstation, high-speed Wi-Fi, and sophisticated ambient lighting in the heart of Gomti Nagar Extension.",
    basePrice: 3499,
    maxOccupancy: 2,
    bedType: "King Bed or Twin Beds",
    roomSize: "280 sq. ft.",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-Speed Wi-Fi",
      "43-inch Smart TV",
      "Centralized Air Conditioning",
      "Work Desk & Ergonomic Chair",
      "Tea / Coffee Maker",
      "Complimentary Mineral Water",
      "Luxury Toiletries",
      "24/7 In-Room Dining"
    ],
    features: ["City View", "Soundproof Windows", "Electronic Safe", "Daily Housekeeping"],
    houseRules: ["Check-in: 12:00 PM | Check-out: 11:00 AM", "Valid Photo ID required for all guests (Aadhaar, Passport, Driving License)", "Local couples allowed with valid ID"],
    cancellationPolicy: "Free cancellation up to 24 hours prior to check-in. Cancellations within 24 hours incur 1 night room charge.",
    faq: [
      { q: "Is breakfast included?", a: "Breakfast options can be added during booking or selected via CP/MAP rate plans." },
      { q: "Can an extra bed be accommodated?", a: "Yes, an extra rollaway bed can be added for ₹800/night." }
    ]
  },
  {
    id: "executive-suite",
    name: "Palassio Royal Suite",
    tagline: "Luxury living with an expanse of space and premium personalized service.",
    description: "Indulge in extra space featuring a separate living room area, plush plush king bed, master bathroom with rain shower, and exclusive views of Gomti Nagar Extension skyline.",
    basePrice: 5499,
    maxOccupancy: 3,
    bedType: "Super King Bed",
    roomSize: "420 sq. ft.",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-Speed Wi-Fi",
      "55-inch Smart TV",
      "Separate Living Lounge Area",
      "Minibar & Refrigerator",
      "Espresso Coffee Machine",
      "Bathrobe & Slippers",
      "Premium Bathroom Amenities",
      "Priority Room Service"
    ],
    features: ["Panoramic Skyline View", "Separate Lounge", "Bathtub & Rain Shower", "Turn-down Service"],
    houseRules: ["Check-in: 12:00 PM | Check-out: 11:00 AM", "Valid Photo ID required", "No smoking inside rooms"],
    cancellationPolicy: "Free cancellation up to 48 hours prior to check-in.",
    faq: [
      { q: "Is late checkout available?", a: "Subject to availability, complimentary late check-out until 1:00 PM can be requested." }
    ]
  },
  {
    id: "presidential-suite",
    name: "Presidential Luxury Suite",
    tagline: "The pinnacle of grandeur and VIP hospitality in Lucknow.",
    description: "Designed for discerning guests, corporate leaders, and wedding parties. Complete with grand master bedroom, private dining nook, vanity room, and royal decor.",
    basePrice: 8999,
    maxOccupancy: 4,
    bedType: "Royal King Bed",
    roomSize: "600 sq. ft.",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Dedicated Butler Assistance",
      "Complimentary Premium Breakfast",
      "55-inch OLED Smart TV",
      "Private Dining Area",
      "Jacuzzi & Rain Shower",
      "Walk-in Closet & Vanity",
      "Unlimited Mineral Water & Drinks",
      "Airport Transfer Service (On Request)"
    ],
    features: ["Top Floor View", "Private Lounge", "Jacuzzi", "VIP Welcome Amenities"],
    houseRules: ["Check-in: 12:00 PM | Check-out: 11:00 AM", "Valid Photo ID mandatory"],
    cancellationPolicy: "Free cancellation up to 48 hours prior to check-in.",
    faq: [
      { q: "Does this suite include airport pickup?", a: "Yes, airport pickup can be complimentary for stay bookings of 2 nights or more." }
    ]
  },
  {
    id: "standard-room",
    name: "Standard Comfort Room",
    tagline: "Smart, cozy and affordable lodging without compromising quality.",
    description: "Perfect for budget business travelers and quick transit stays. Equipped with cozy bedding, clean modern bath, quiet air conditioning and high-speed internet.",
    basePrice: 2499,
    maxOccupancy: 2,
    bedType: "Queen Bed",
    roomSize: "220 sq. ft.",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-Speed Wi-Fi",
      "32-inch Smart TV",
      "Split Air Conditioner",
      "Tea/Coffee Station",
      "Attached Bath & Hot Shower",
      "Daily Towel & Housekeeping"
    ],
    features: ["Quiet Interior Facing", "Work Desk", "Intercom"],
    houseRules: ["Check-in: 12:00 PM | Check-out: 11:00 AM", "Valid Government ID required"],
    cancellationPolicy: "Free cancellation up to 24 hours before check-in.",
    faq: [
      { q: "Is parking available?", a: "Yes, complimentary on-site parking is available for guests." }
    ]
  }
];

export interface BanquetHall {
  id: string;
  name: string;
  capacity: string;
  area: string;
  description: string;
  images: string[];
  suitableFor: string[];
  features: string[];
  amenities: string[];
}

export const BANQUET_HALLS: BanquetHall[] = [
  {
    id: "grand-ballroom",
    name: "Palassio Grand Ballroom (Hall 1)",
    capacity: "250 - 400 Guests",
    area: "4,500 sq. ft.",
    description: "Our premier pillarless banquet hall with high ceilings, exquisite crystal chandeliers, integrated sound system, and customizable stage setup. Designed for grand wedding receptions, gala dinners, and major corporate conventions.",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
    ],
    suitableFor: ["Weddings & Receptions", "Sangeet & Ring Ceremony", "Corporate Conferences", "Product Launches", "Gala Celebrations"],
    features: ["Pillarless Hall", "Stage with LED Backdrop Support", "Dedicated Dining Zone", "Green Rooms for Bride/Groom"],
    amenities: ["Central AC", "Surround Sound & Microphones", "Projector & Screen", "Valet Parking", "Custom Catering Options"]
  },
  {
    id: "royal-hall",
    name: "Royal Celebration Hall (Hall 2)",
    capacity: "80 - 150 Guests",
    area: "2,200 sq. ft.",
    description: "An elegant, cozy hall tailored for intimate gatherings, birthday parties, anniversaries, corporate seminars, and pre-wedding functions like Mehendi or Haldi.",
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"
    ],
    suitableFor: ["Engagement & Roka", "Birthday Parties", "Anniversary Parties", "Corporate Seminars & Workshops", "Kitty Parties"],
    features: ["Flexible Seating Layouts (Cluster, Theater, U-Shape)", "Dedicated DJ Space", "Direct Elevator Access"],
    amenities: ["High-speed Wi-Fi", "PA System", "Buffet Counters Setup", "Full Climate Control"]
  }
];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVeg: boolean;
  isBestseller?: boolean;
  image?: string;
}

export const RESTAURANT_MENU: MenuItem[] = [
  { id: "m1", name: "Lucknowi Murgh Galawati Kebab", description: "Melt-in-mouth minced chicken kebabs spiced with authentic Awadhi potli masala.", price: 449, category: "Kebabs & Starters", isVeg: false, isBestseller: true },
  { id: "m2", name: "Paneer Tikka Angara", description: "Cottage cheese marinated in spicy hung curd and smoked in charcoal tandoor.", price: 349, category: "Kebabs & Starters", isVeg: true, isBestseller: true },
  { id: "m3", name: "Awadhi Dum Gosht Biryani", description: "Long-grain basmati rice cooked on dum with tender mutton, saffron, and aromatic spices.", price: 549, category: "Biryani & Rice", isVeg: false, isBestseller: true },
  { id: "m4", name: "Subz Handi Biryani", description: "Fragrant rice dum-cooked with garden fresh vegetables and aromatic Lucknowi herbs.", price: 399, category: "Biryani & Rice", isVeg: true },
  { id: "m5", name: "Dal Palassio Special", description: "Overnight slow-cooked black lentils finished with fresh cream and white butter.", price: 349, category: "Main Course", isVeg: true, isBestseller: true },
  { id: "m6", name: "Butter Chicken Delhi Style", description: "Tender tandoori chicken simmered in rich creamy tomato and cashew gravy.", price: 489, category: "Main Course", isVeg: false },
  { id: "m7", name: "Paneer Butter Masala", description: "Soft paneer cubes cooked in velvet orange tomato butter gravy.", price: 389, category: "Main Course", isVeg: true },
  { id: "m8", name: "Chilli Chicken Dry", description: "Crispy fried chicken tossed in hot garlic soy sauce with green bell peppers.", price: 399, category: "Chinese & Asian", isVeg: false },
  { id: "m9", name: "Veg Hakka Noodles", description: "Wok-tossed noodles with crunchy spring vegetables and oriental herbs.", price: 299, category: "Chinese & Asian", isVeg: true },
  { id: "m10", name: "Shahi Tukda with Rabri", description: "Crispy fried bread soaked in saffron syrup topped with rich cardamom rabri and nuts.", price: 249, category: "Desserts", isVeg: true, isBestseller: true }
];

export interface RooftopEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  artist: string;
  description: string;
  entryInfo: string;
  image: string;
}

export const ROOFTOP_EVENTS: RooftopEvent[] = [
  {
    id: "e1",
    title: "Friday Sunset Acoustic Unplugged Night",
    date: "Every Friday",
    time: "7:00 PM - 11:30 PM",
    artist: "Live Acoustic Trio & Vocalists",
    description: "Soak in the magnificent evening skyline views of Gomti Nagar while enjoying soothing live acoustic tunes, craft mocktails, and fresh sizzlers.",
    entryInfo: "Free Entry | Table Reservation Recommended",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "e2",
    title: "Saturday Rooftop Beats & DJ Night",
    date: "Every Saturday",
    time: "8:00 PM - 1:00 AM",
    artist: "Resident DJ Beats",
    description: "Elevate your weekend mood under the stars with deep house, retro mixes, dark ambient lighting, and signature tandoori appetizers.",
    entryInfo: "Cover Charge Applicable for Stags | Couple & VIP Tables Available",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
  }
];

export interface OfferItem {
  id: string;
  title: string;
  category: "Stay" | "Dining" | "Rooftop" | "Banquet";
  discount: string;
  description: string;
  validTill: string;
  terms: string[];
  code: string;
  image: string;
}

export const OFFERS_LIST: OfferItem[] = [
  {
    id: "direct-book-15",
    title: "Direct Stay Special - Flat 15% Off",
    category: "Stay",
    discount: "15% OFF",
    description: "Book directly on our official website and enjoy an exclusive 15% discount on all room categories, free early check-in (subject to availability), and complimentary Wi-Fi.",
    validTill: "Valid till 31st Dec 2026",
    terms: ["Applicable only on direct website bookings", "Cannot be combined with corporate contract rates"],
    code: "PALASSIO15",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "rooftop-sundowner",
    title: "Rooftop Sundowner Happy Hours",
    category: "Rooftop",
    discount: "Buy 1 Get 1 on Starters",
    description: "Enjoy sunset drinks and delicious Lucknowi kebabs at our open-air Rooftop Lounge between 5:00 PM and 8:00 PM.",
    validTill: "Valid Mon to Thu",
    terms: ["Applicable on select appetizers menu", "Valid for dine-in guests at Rooftop Lounge only"],
    code: "SUNDOWNER",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "wedding-early-bird",
    title: "Grand Wedding Season Offer 2026",
    category: "Banquet",
    discount: "Complimentary Bride Suite + 10% Off F&B",
    description: "Book your wedding reception at Palassio Grand Ballroom and receive a complimentary Presidential Suite stay for the newlyweds plus 10% discount on catering packages.",
    validTill: "Valid for bookings made 60 days in advance",
    terms: ["Minimum 250 guest count requirement", "Subject to date availability"],
    code: "ROYALWEDDING",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
  }
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "top-things-to-do-in-gomti-nagar-lucknow",
    title: "Top 7 Things to Do Near Gomti Nagar Extension, Lucknow",
    excerpt: "Discover the best attractions around Gomti Nagar Extension, from Ekana Cricket Stadium to Phoenix Palassio Shopping Mall and Janeshwar Mishra Park.",
    category: "Local Guide",
    readTime: "5 min read",
    publishedDate: "September 15, 2026",
    author: "Palassio Travel Concierge",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80",
    content: `
      Gomti Nagar Extension has rapidly evolved into Lucknow's premier modern hub for business, sports, shopping, and dining. Whether you are visiting Lucknow for business, attending a cricket match at Ekana Stadium, or staying with us at Hotel Palassio International, here are the top places to explore nearby:

      1. **Phoenix Palassio Mall**: Located just 6 minutes from Hotel Palassio International, this architectural marvel offers luxury international shopping, multiplex cinemas, and high-end dining.
      2. **Ekana International Cricket Stadium**: Sports enthusiasts staying at our hotel can easily catch international matches and IPL fixtures just 8 minutes away.
      3. **Janeshwar Mishra Park**: Known as one of Asia's largest urban parks, ideal for morning walks, serene water bodies, and lush greenery.
      4. **Lucknowi Rooftop Dining**: Experience open-air dining under the stars at Hotel Palassio's Rooftop Lounge.
    `
  },
  {
    slug: "planning-a-royal-wedding-in-lucknow",
    title: "How to Plan a Destination Wedding in Lucknow: Complete Guide",
    excerpt: "Learn how to choose banquet halls, customize traditional Awadhi menus, and coordinate guest accommodations for your dream wedding.",
    category: "Wedding Guide",
    readTime: "7 min read",
    publishedDate: "August 28, 2026",
    author: "Palassio Event Planner",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    content: `
      Lucknow is renowned worldwide for its royal hospitality, opulent heritage, and legendary Awadhi cuisine. Planning a wedding in Lucknow requires careful coordination between banquet spaces, guest room allocations, and culinary menus.

      **Key Steps for Your Dream Lucknow Wedding:**
      - **Venue Selection**: Choose a pillarless venue like Palassio Grand Ballroom that accommodates 300+ guests with customized stage setups.
      - **Guest Comfort**: Reserve room blocks at Hotel Palassio International so guests enjoy 14 luxurious rooms and seamless check-in.
      - **Authentic Culinary Experience**: Incorporate live Lucknowi galawati kebab counters, dum biryani, and shahi tukda rabri.
    `
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "Hotel & Stay" | "Dining & Rooftop" | "Banquets & Weddings" | "Policies & Booking";
}

export const FAQS_LIST: FAQItem[] = [
  {
    category: "Hotel & Stay",
    question: "Where is Hotel Palassio International located?",
    answer: "We are located at Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow - 226010, close to Phoenix Palassio Mall and Ekana Cricket Stadium."
  },
  {
    category: "Hotel & Stay",
    question: "What are the standard check-in and check-out times?",
    answer: "Standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in or late check-out is subject to room availability."
  },
  {
    category: "Policies & Booking",
    question: "What government identification is required during check-in?",
    answer: "All Indian citizens must present a valid government-issued photo ID (Aadhaar Card, Passport, Voter ID, or Driving License). PAN card is not accepted as address proof. Foreign nationals must present a valid Passport and Visa."
  },
  {
    category: "Policies & Booking",
    question: "Are local couples allowed?",
    answer: "Yes, local couples holding valid government photo IDs are welcome at Hotel Palassio International."
  },
  {
    category: "Dining & Rooftop",
    question: "What are the timings for the Restaurant and Rooftop Lounge?",
    answer: "The Ground Restaurant operates from 7:00 AM to 11:00 PM. The Rooftop Lounge opens at 5:00 PM and serves late-night food till 1:00 AM."
  },
  {
    category: "Dining & Rooftop",
    question: "Can I order food on Swiggy or Zomato from Hotel Palassio?",
    answer: "Yes! You can order our signature Awadhi and multi-cuisine dishes via our verified listings on Swiggy and Zomato."
  },
  {
    category: "Banquets & Weddings",
    question: "What is the total capacity of banquet halls at Hotel Palassio?",
    answer: "We have two banquet halls: Hall 1 (Grand Ballroom) accommodates up to 400 guests, and Hall 2 (Royal Hall) is ideal for 80-150 guests. Our Rooftop terrace is also available for outdoor events."
  },
  {
    category: "Banquets & Weddings",
    question: "Do you provide outside catering or in-house catering?",
    answer: "We offer full-service in-house Masterclass Awadhi & Multi-Cuisine catering. Customized catering packages can be tailored during event consultation."
  }
];

export interface ReviewItem {
  id: string;
  guestName: string;
  location: string;
  rating: number;
  date: string;
  platform: "Google Review" | "Booking.com" | "Direct Guest";
  comment: string;
  stayType: string;
}

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "r1",
    guestName: "Rajesh & Swati Verma",
    location: "New Delhi",
    rating: 5,
    date: "September 2026",
    platform: "Google Review",
    comment: "Stayed at Hotel Palassio International during an Ekana Stadium match weekend. The rooms are spotless, modern, and high-speed Wi-Fi worked flawlessly. The rooftop lounge evening experience with live acoustic music was unforgettable!",
    stayType: "Leisure Stay"
  },
  {
    id: "r2",
    guestName: "Anil Kumar Srivastava",
    location: "Lucknow",
    rating: 5,
    date: "August 2026",
    platform: "Direct Guest",
    comment: "Hosted our daughter's ring ceremony in Hall 1. The banquet staff managed everything seamlessly from stage decor to food counters. The Lucknowi Galawati Kebabs and Dum Biryani were praised by all our guests!",
    stayType: "Banquet Event"
  },
  {
    id: "r3",
    guestName: "Vikramaditya Rao",
    location: "Mumbai",
    rating: 5,
    date: "August 2026",
    platform: "Booking.com",
    comment: "Excellent business stay in Gomti Nagar Extension. Proximity to corporate hubs, great desk setup in the Executive Room, and polite front desk staff. Highly recommended!",
    stayType: "Corporate Travel"
  }
];
