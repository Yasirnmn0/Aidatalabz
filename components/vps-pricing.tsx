"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter VPS",
    popular: false,
    monthly: "[Price]",
    yearly: "[Price]",
    specs: ["RAM: [RAM]", "Disk: [HardDisk]", "CPU: [CPU]"],
    desc: "[Description]",
  },
  {
    name: "Business VPS",
    popular: true,
    monthly: "[Price]",
    yearly: "[Price]",
    specs: ["RAM: [RAM]", "Disk: [HardDisk]", "CPU: [CPU]"],
    desc: "[Description]",
  },
  {
    name: "Professional VPS",
    popular: false,
    monthly: "[Price]",
    yearly: "[Price]",
    specs: ["RAM: [RAM]", "Disk: [HardDisk]", "CPU: [CPU]"],
    desc: "[Description]",
  },
  {
    name: "Enterprise VPS",
    popular: false,
    monthly: "[Price]",
    yearly: "[Price]",
    specs: ["RAM: [RAM]", "Disk: [HardDisk]", "CPU: [CPU]"],
    desc: "[Description]",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-28 bg-[#070A12] text-white relative">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(51,6,65,0.35)] via-[rgba(20,10,30,0.2)] to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            VPS Packages
          </h2>
          <p className="text-gray-400 mt-3">
            Flexible pricing built for businesses of all sizes
          </p>
        </div>

        {/* toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 border border-white/10 rounded-full p-1 flex">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm ${
                !yearly ? "bg-white text-black" : "text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm ${
                yearly ? "bg-white text-black" : "text-gray-300"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative group`}
            >
              {/* glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

              {/* card */}
              <div
                className={`relative h-full p-6 rounded-2xl border ${
                  plan.popular
                    ? "border-purple-500 bg-white/10"
                    : "border-white/10 bg-white/5"
                } backdrop-blur transition`}
              >
                {/* popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-purple-500 text-white">
                    Most Popular
                  </div>
                )}

                {/* name */}
                <h3 className="text-lg font-semibold">{plan.name}</h3>

                {/* price */}
                <p className="text-3xl font-bold mt-4">
                  {yearly ? plan.yearly : plan.monthly}
                </p>

                {/* specs */}
                <div className="mt-6 space-y-2 text-sm text-gray-300">
                  {plan.specs.map((s, idx) => (
                    <p key={idx}>{s}</p>
                  ))}
                </div>

                {/* description */}
                <p className="text-sm text-gray-400 mt-4">{plan.desc}</p>

                {/* button */}
                <Button
                  className={`w-full mt-6 ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  Choose Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
