import { NextResponse } from "next/server";

export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/*

Sitemap: https://www.hotelpalassio.com/sitemap.xml`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
