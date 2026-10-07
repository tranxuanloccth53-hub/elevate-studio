"use client";
import { motion } from "framer-motion";

const works = [
  { title: "Tech Product Launch", category: "Commercial", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
  { title: "Travel Documentary", category: "Long-form", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
  { title: "Fitness Campaign", category: "Short-form", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" },
  { title: "E-commerce Ad", category: "Commercial", image: "https://images.unsplash.com/photo-1557821552-17105153ceab?auto=format&fit=crop&q=80&w=800" },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 bg-zinc-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Featured Work</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
            >
              <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-blue-400 text-sm font-medium mb-1">{work.category}</p>
                <h3 className="text-2xl font-bold text-white">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}