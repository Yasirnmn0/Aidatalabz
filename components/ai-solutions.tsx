"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Link2, Bot } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI Development Teams",
    desc: "Custom intelligent applications designed to automate workflows and scale your business.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Transform ERP, finance, and retail data into actionable business insights and growth.",
  },
  {
    icon: Link2,
    title: "System Integrations",
    desc: "Seamless connectivity across APIs, platforms, and third-party systems.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Model training, fine-tuning, and deployment tailored to your business needs.",
  },
];

export default function AISolutions() {
  return (
    <section
      id="ai"
      className="py-28 bg-[#070A12] text-white relative overflow-hidden"
    >
      {/* subtle glow */}
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
            AI & Smart Solutions
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Extend your VPS infrastructure with intelligent systems built for
            automation, insights, and innovation.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                {/* glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

                {/* card */}
                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/10">
                      <Icon className="w-5 h-5" />
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

        {/* subtle closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-500 mt-16 text-sm"
        >
          Built to work seamlessly with your cloud VPS infrastructure.
        </motion.p>
      </div>
    </section>
  );
}
