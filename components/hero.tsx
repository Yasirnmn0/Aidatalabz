"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#070A12] text-white"
    >
      {/* consistent brand glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(51,6,65,0.35)] via-[rgba(20,10,30,0.2)] to-black" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center z-10">
        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-semibold tracking-tight leading-tight">
            High-Performance Cloud VPS for Modern Business Infrastructure
          </h1>

          <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">
            Deploy secure, scalable, and enterprise-grade cloud VPS solutions
            designed for ERP systems, POS platforms, financial applications, and
            remote business operations.
          </p>

          {/* benefits */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-700" />
              <span className="text-gray-300">
                Secure Enterprise Infrastructure
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-700" />
              <span className="text-gray-300">
                High-Speed Cloud Performance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-700" />
              <span className="text-gray-300">Remote Access From Anywhere</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-700" />
              <span className="text-gray-300">
                Scalable VPS Hosting Solutions
              </span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            {/* Get Started → Contact page */}

            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
    relative overflow-hidden
    bg-white py-5 px-5 font-semibold text-gray-900
    transition-all duration-300
    hover:text-purple-500
    hover:bg-gradient-to-r
    hover:from-purple-500/50
    hover:to-blue-500/20
  "
            >
              Get Started
            </Button>

            {/* View Packages → scroll to pricing section */}

            <Button
              onClick={() =>
                document.getElementById("pricing")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
    relative overflow-hidden
    bg-white py-5 px-5 font-semibold text-gray-900
    transition-all duration-300
    hover:text-purple-500
    hover:bg-gradient-to-r
    hover:from-purple-500/50
    hover:to-blue-500/20
  "
            >
              View Packages
            </Button>
          </div>
        </motion.div>

        {/* animated “server” block */}
        <div className="pt-10">
          <motion.div
            className="relative w-full max-w-md z-10"
            animate={{
              y: [0, -10, 0],
              rotate: [-1, 1, -1],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/cloud-hero.png"
              alt="Cloud VPS"
              width={500} // Set appropriate dimensions
              height={500}
              priority // Good for hero images
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
