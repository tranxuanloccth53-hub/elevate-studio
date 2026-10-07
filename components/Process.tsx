"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Brief & Assets", desc: "Upload your raw footage and share your vision via our client portal." },
  { num: "02", title: "Professional Editing", desc: "We craft your video with seamless pacing, sound design, and color grading." },
  { num: "03", title: "Review & Refine", desc: "Provide frame-accurate feedback directly on the video draft." },
  { num: "04", title: "Final Delivery", desc: "Receive the polished, high-resolution final export ready to publish." },
];

export default function Process() {
  return (
    <section id="process" className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
        <p className="text-zinc-400">A streamlined workflow designed to save you time.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            <div className="text-6xl font-bold text-white/5 mb-6">{step.num}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            {/* Divider line for desktop */}
            {i !== steps.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-[1px] bg-white/10" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}