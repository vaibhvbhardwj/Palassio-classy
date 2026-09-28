"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, User } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo admin bypass
    router.push("/admin/dashboard");
  };

  return (
    <div className="py-20 max-w-md mx-auto px-4">
      <div className="bg-palassio-navy text-white p-8 rounded-3xl border border-palassio-gold/40 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="relative w-16 h-16 mx-auto rounded-xl overflow-hidden border border-palassio-gold">
            <Image src="/palassio-logo.jpeg" alt="Admin Portal" fill className="object-cover" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-palassio-gold">Hotel Palassio Admin Portal</h1>
          <p className="text-xs text-gray-300">Staff & Operations Management</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block text-gray-300 mb-1">Username / Employee ID</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin@hotelpalassio.com"
              className="w-full p-3 rounded-xl bg-palassio-navy-dark border border-palassio-gold/30 text-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 rounded-xl bg-palassio-navy-dark border border-palassio-gold/30 text-white focus:outline-none"
              required
            />
          </div>

          <button type="submit" className="w-full gold-gradient-bg text-palassio-navy font-bold py-3 rounded-xl shadow-lg">
            LOG IN TO ADMIN DASHBOARD
          </button>
        </form>
      </div>
    </div>
  );
}
