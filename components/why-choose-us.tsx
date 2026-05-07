"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Headphones,
  DollarSign,
  Server,
  Gauge,
} from "lucide-react";

const points = [
  {
    icon: Server,
    title: "Reliable Infrastructure",
    desc: "Stable, high-availability VPS systems built for business-critical operations.",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Optimized servers delivering fast response times and smooth application performance.",
  },
  {
    icon: Shield,
    title: "Secure Environment",
    desc: "Advanced security layers to protect your data and business systems at all times.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    desc: "Dedicated technical support to ensure your systems are always running.",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    desc: "Reduce infrastructure costs while maintaining enterprise-level performance.",
  },
  {
    icon: Gauge,
    title: "Scalable Control",
    desc: "Easily scale resources up or down as your workload grows.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-28 bg-[#070A12] text-white relative overflow-hidden"
    >
      {/* background glow */}
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
            Why Businesses Choose Our VPS
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Built for reliability, performance, and long-term scalability —
            trusted by growing businesses and enterprises.
          </p>
        </motion.div>

        {/* layout */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT: cards */}
          <div className="grid sm:grid-cols-2 gap-6 auto-rows-fr h-full">
            {points.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative h-full"
                >
                  {/* glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/10 blur-lg opacity-0 group-hover:opacity-100 transition" />

                  {/* card */}
                  <div className="relative h-full p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition flex flex-col justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-white/10">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm">{item.title}</h3>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-full"
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-blue-500/10 blur-2xl" />

            {/* dashboard */}
            <div className="relative h-full min-h-[420px] rounded-2xl border border-white/10 bg-[#0b0f1a] p-5 overflow-hidden">
              {/* top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <p className="text-xs text-gray-400">SaaS Dashboard</p>
              </div>

              {/* stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-xs text-gray-400">CPU Usage</p>
                  <p className="text-lg font-semibold text-white mt-1">68%</p>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-xs text-gray-400">RAM</p>
                  <p className="text-lg font-semibold text-white mt-1">
                    4.2 GB
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 col-span-2">
                  <p className="text-xs text-gray-400">Server Status</p>
                  <p className="text-sm text-green-400 mt-1">
                    All systems operational
                  </p>
                </div>
              </div>

              {/* chart */}
              <div className="absolute bottom-4 left-5 right-5 h-16 flex items-end gap-1">
                {[40, 60, 30, 80, 50, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-purple-500/40 rounded-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
