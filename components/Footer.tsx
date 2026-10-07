import Link from "next/link";
import { Mail, Globe, Share2, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Block */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 rounded-3xl p-12 text-center border border-white/10 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to scale your content?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto relative z-10">Let's discuss how our editing workflow can help you save time and increase engagement.</p>
          <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform relative z-10">
            Book your free strategy call
          </a>
        </div>

        {/* Links & Socials */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter mb-4 block">
              ELEVATE<span className="text-blue-500">.</span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs">Elevating brands and creators through high-retention video editing services worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="#work" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-white transition"><Globe size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition"><Share2 size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition"><MessageSquare size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-zinc-600 border-t border-white/5 pt-8">
          © {new Date().getFullYear()} Elevate Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}