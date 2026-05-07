"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#070A12] text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(51,6,65,0.35)] via-[rgba(20,10,30,0.2)] to-black" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            About Us
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We are a technology-driven company focused on delivering reliable
            cloud VPS infrastructure and intelligent solutions that help
            businesses operate, scale, and grow with confidence.
          </p>
        </motion.div>

        {/* highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Cloud Focused",
              desc: "Built around secure and scalable VPS infrastructure for modern businesses.",
            },
            {
              title: "AI Driven",
              desc: "Enhancing systems with smart automation, analytics, and machine learning.",
            },
            {
              title: "Business Oriented",
              desc: "Designed to support real-world operations like ERP, POS, and finance systems.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/10 blur-lg opacity-0 group-hover:opacity-100 transition" />

              {/* card */}
              <div className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
