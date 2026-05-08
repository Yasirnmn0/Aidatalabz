"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#070A12] text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(51,6,65,0.35)] via-[rgba(20,10,30,0.2)] to-black" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* animated content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Start Your Cloud VPS Journey Today
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Deploy secure, high-performance VPS infrastructure for your business
            and run your systems with confidence from anywhere.
          </p>

          {/* phone numbers */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/923485587827"
              target="_blank"
              className="
      flex items-center gap-3
      px-5 py-4 rounded-2xl
      bg-white/5 border border-white/10
      backdrop-blur
      hover:border-purple-500/40
      hover:bg-white/10
      transition-all duration-300
    "
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <FaWhatsapp className="w-5 h-5 text-green-400" />
              </div>

              <div className="text-left">
                <p className="text-xs text-gray-400">For Contact</p>
                <p className="font-medium text-white">03485587827</p>
              </div>
            </Link>

            {/* <Link
              href="https://wa.me/923171648131"
              target="_blank"
              className="
      flex items-center gap-3
      px-5 py-4 rounded-2xl
      bg-white/5 border border-white/10
      backdrop-blur
      hover:border-purple-500/40
      hover:bg-white/10
      transition-all duration-300
    "
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-green-400"
                >
                  <path d="M19.11 17.21c-.29-.15-1.71-.84-1.98-.93-.27-.1-.47-.15-.67.15-.2.29-.77.93-.94 1.12-.17.2-.35.22-.64.08-.29-.15-1.24-.46-2.36-1.47-.88-.79-1.47-1.77-1.64-2.06-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.29-1.04 1.01-1.04 2.47s1.06 2.88 1.2 3.08c.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.67.62.7.22 1.33.19 1.83.12.56-.08 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.38-.07-.12-.27-.2-.56-.35zM16.02 3C8.83 3 3 8.82 3 16c0 2.54.74 5 2.14 7.11L3 29l6.08-2.1A12.95 12.95 0 0016.02 29C23.2 29 29 23.18 29 16S23.2 3 16.02 3zm0 23.67c-2.18 0-4.3-.59-6.14-1.71l-.44-.26-3.61 1.24 1.18-3.52-.29-.46A10.61 10.61 0 015.33 16c0-5.9 4.79-10.69 10.69-10.69 2.85 0 5.53 1.11 7.55 3.13A10.62 10.62 0 0126.69 16c0 5.9-4.79 10.67-10.67 10.67z" />
                </svg>
              </div>

              <div className="text-left">
                <p className="text-xs text-gray-400">WhatsApp Support</p>
                <p className="font-medium text-white">03171648131</p>
              </div>
            </Link> */}
          </div>
          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* <Button
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
            </Button> */}

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
          {/* trust line */}
          <p className="text-xs text-gray-500 mt-6">
            No long-term contracts • Scalable anytime • Secure infrastructure
          </p>
        </motion.div>
      </div>
    </section>
  );
}
