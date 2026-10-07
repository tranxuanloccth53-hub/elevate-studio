"use client";
import { motion } from "framer-motion";
import { MonitorPlay, Smartphone, Film } from "lucide-react";

const services = [
  {
    title: "Short-form Content",
    description: "Viral TikToks, Reels, and Shorts designed for maximum retention and algorithmic reach.",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Long-form Videos",
    description: "Engaging YouTube videos and documentaries with premium color grading via DaVinci Resolve.",
    icon: <MonitorPlay className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Commercials & Ads",
    description: "High-end product commercials and ad creatives tailored to drive sales and ROAS.",
    icon: <Film className="w-6 h-6 text-emerald-400" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">We don't just cut clips. We craft narratives tailored to your platform.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}