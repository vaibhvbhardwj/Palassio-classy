import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/hotelContent";
import { Calendar, User, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default function SingleBlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <Link href="/blog" className="inline-flex items-center space-x-1 text-xs text-palassio-navy font-bold hover:text-palassio-gold">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Blog Guides</span>
      </Link>

      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-palassio-gold">{post.category}</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-palassio-navy leading-tight">{post.title}</h1>
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.publishedDate}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-palassio-gold/30">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      <div className="prose max-w-none text-gray-700 leading-relaxed text-sm whitespace-pre-line bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
        {post.content}
      </div>

      <div className="bg-palassio-navy text-white p-8 rounded-3xl text-center space-y-4 shadow-xl border border-palassio-gold/40">
        <h3 className="font-serif text-2xl font-bold text-palassio-gold">Visiting Lucknow Soon?</h3>
        <p className="text-xs text-gray-300">Book your luxury room stay directly at Hotel Palassio International for best rates.</p>
        <Link href="/book" className="gold-gradient-bg text-palassio-navy font-bold px-6 py-2.5 rounded-xl text-xs inline-block shadow">
          BOOK YOUR STAY NOW
        </Link>
      </div>
    </div>
  );
}
