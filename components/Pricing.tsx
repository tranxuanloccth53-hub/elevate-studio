"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-zinc-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-zinc-400">Choose a package that scales with your content needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900 border border-white/5 flex flex-col"
          >
            <h3 className="text-xl font-medium text-zinc-400 mb-2">Pay Per Project</h3>
            <div className="mb-6"><span className="text-4xl font-bold">Custom</span></div>
            <p className="text-sm text-zinc-400 mb-8 pb-8 border-b border-white/10">For one-off deliverables and campaigns.</p>
            <ul className="space-y-4 flex-grow mb-8">
              {["Custom scope & length", "Advanced motion graphics", "Dedicated project manager", "2 Revisions included"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <Check size={16} className="text-blue-400" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition">Request Quote</button>
          </motion.div>

          {/* Plan 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-b from-blue-900/20 to-zinc-900 border border-blue-500/30 flex flex-col relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-xs font-bold rounded-full">MOST POPULAR</div>
            <h3 className="text-xl font-medium text-blue-400 mb-2">Monthly Retainer</h3>
            <div className="mb-6"><span className="text-4xl font-bold">Fixed Rate</span></div>
            <p className="text-sm text-zinc-400 mb-8 pb-8 border-b border-white/10">For creators and brands needing consistent output.</p>
            <ul className="space-y-4 flex-grow mb-8">
              {["Dedicated editor", "Priority 24-48h turnaround", "Unlimited revisions", "Short-form & Long-form mix", "Source files included"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <Check size={16} className="text-blue-400" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700 transition shadow-[0_0_20px_rgba(37,99,235,0.3)]">Book a Discovery Call</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}