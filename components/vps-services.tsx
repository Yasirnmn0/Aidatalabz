"use client";

import { motion } from "framer-motion";
import { Server, Shield, Cpu, Globe } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Remote Access",
    desc: "Access your business applications securely from anywhere with reliable cloud connectivity across all devices.",
  },
  {
    icon: Server,
    title: "Cost-Effective Infrastructure",
    desc: "Reduce hardware and maintenance costs with scalable cloud VPS solutions built for growing businesses.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Protect critical business systems with secure cloud environments, encrypted access, and reliable uptime.",
  },
  {
    icon: Cpu,
    title: "Performance & Scalability",
    desc: "Experience high-speed performance with scalable VPS resources designed for demanding business operations.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-[#070A12] text-white relative overflow-hidden"
    >
      {/* consistent glow (same system as hero) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(51,6,65,0.35)] via-[rgba(20,10,30,0.2)] to-black" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Cloud VPS Services for Business Growth
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our infrastructure is built to power modern businesses with
            reliable, scalable, and secure cloud VPS solutions.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                {/* clean hover glow (no purple, no gradient mix) */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(79,124,255,0.16),transparent_70%)] blur-xl opacity-0 group-hover:opacity-100 transition" />

                {/* card */}
                <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
                  <div className="flex items-start gap-4">
                    {/* icon */}
                    <div className="p-3 rounded-lg bg-[#4F7CFF]/10">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>

                      <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* use cases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Built for Real Business Systems
          </h3>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            {["ERP Systems", "POS Systems", "Financial Software"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#4F7CFF]/40 transition"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
