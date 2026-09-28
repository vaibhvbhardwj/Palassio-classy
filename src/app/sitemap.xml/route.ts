import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.hotelpalassio.com";
  const routes = [
    "",
    "/rooms",
    "/rooms/deluxe-room",
    "/rooms/executive-suite",
    "/rooms/presidential-suite",
    "/rooms/standard-room",
    "/dining",
    "/rooftop",
    "/rooftop/menu",
    "/rooftop/events",
    "/banquets",
    "/banquets/grand-ballroom",
    "/banquets/royal-hall",
    "/weddings",
    "/corporate",
    "/offers",
    "/gallery",
    "/about",
    "/location",
    "/contact",
    "/faq",
    "/blog",
    "/book",
    "/order-food",
    "/guest-club",
    "/digital-hub",
    "/privacy-policy",
    "/terms",
    "/cancellation-policy",
    "/refund-policy"
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${route === "" ? "1.0" : "0.8"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
