"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Accepting new clients for Q3
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Editing that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Views & Conversions.</span>
        </h1>
        <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          We transform raw footage into highly engaging short-form, long-form, and commercial videos. Partner with us to scale your brand visually.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="#pricing" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
            Get Started
          </Link>
          <Link href="#work" className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <Play size={18} /> View Our Work
          </Link>
        </div>
      </motion.div>

      {/* Glowing Video Showreel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative mx-auto max-w-5xl rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20 -z-10 rounded-3xl" />
        <div className="relative aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Thay src bằng link video YouTube/Vimeo của bạn */}
          <iframe 
            src="https://www.youtube.com/embed/m2VvYvNjfLc?si=FhjgEzRdGjMVem-w" 
            className="w-full h-full object-cover"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
}