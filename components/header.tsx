"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Why Us", href: "#why" },
  { name: "AI Solutions", href: "#ai" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-[#070A12]/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        {/* LOGO */}
        <div className="font-semibold text-lg tracking-wide text-white">
          Aidatalabz
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => {
            const isActive = active === link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative transition ${
                  isActive ? "text-[#ffffff]" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#ffffff]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* <Button
            variant="outline"
            className="
    bg-transparent
    border-white
    text-white
    py-4 px-4 font-semibold
    transition-all duration-300

    hover:bg-white
    hover:text-purple-800
    hover:border-none
  "
          >
            Login
          </Button> */}

          <Button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
    relative overflow-hidden
    bg-white py-4 px-4 font-semibold text-gray-900
    transition-all duration-300
    hover:text-purple-500
    hover:bg-gradient-to-r
    hover:from-purple-500/50
    hover:to-blue-500/20
  "
          >
            Get Started
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0A0F1C] border-t border-white/10 px-6 py-6 space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block transition ${
                  active === link.href.replace("#", "")
                    ? "text-[#ffffff]"
                    : "text-gray-300 hover:text-[#ffffff]"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Button className="bg-[#ffffff] text-gray-900">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
