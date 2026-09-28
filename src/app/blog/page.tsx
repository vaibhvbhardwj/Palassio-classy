import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/hotelContent";
import { Clock, User, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Lucknow Local Guide & Travel Blog | Hotel Palassio",
  description: "Discover top attractions in Gomti Nagar Extension, wedding planning tips, and Lucknow culinary travel guides."
};

export default function BlogListingPage() {
  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-palassio-gold font-bold text-xs uppercase tracking-widest">LOCAL INSIGHTS & GUIDES</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy">Lucknow Travel & Event Blog</h1>
        <p className="text-gray-600 text-sm">Insider travel tips, wedding planning advice, and dining guides around Gomti Nagar Extension.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <div key={post.slug} className="bg-white rounded-3xl overflow-hidden border border-palassio-gold/30 shadow-lg flex flex-col">
            <div className="relative h-60 w-full">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-palassio-navy/90 text-palassio-gold font-bold px-3 py-1 rounded text-xs">
                {post.category}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-3 text-[11px] text-gray-500 mb-2">
                  <span>📅 {post.publishedDate}</span>
                  <span>•</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
                <h2 className="font-serif font-bold text-xl text-palassio-navy">{post.title}</h2>
                <p className="text-xs text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">By {post.author}</span>
                <Link href={`/blog/${post.slug}`} className="text-xs text-palassio-navy font-bold hover:text-palassio-gold flex items-center space-x-1">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
