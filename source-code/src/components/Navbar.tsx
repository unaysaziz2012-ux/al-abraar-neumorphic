"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Over ons", href: "#over-ons" },
  {
    name: "Missie en visie",
    href: "#missie",
    submenu: ["Onze Doelen", "Kernwaarden"]
  },
  { name: "Ramadan", href: "#ramadan" },
  {
    name: "Doneren",
    href: "#doneren",
    submenu: ["Moskee Project", "Sadaqah Jariyah"]
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-background/80 backdrop-blur-md" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 px-8 rounded-2xl neumorphic-extruded bg-background">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full neumorphic-inset flex items-center justify-center p-1 overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src="https://www.alabraar.nl/wp-content/uploads/2022/09/Logo-Stichting-Alabraar.png"
                alt="Alabraar Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-foreground">
              ALABRAAR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-body font-medium text-muted hover:text-foreground transition-colors py-2"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="p-4 rounded-2xl neumorphic-extruded bg-background space-y-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub}
                          href="#"
                          className="block font-body text-sm text-muted hover:text-accent transition-colors py-1 px-2 rounded-lg hover:bg-background/50"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#gebedstijden"
              className="px-6 py-2 rounded-xl neumorphic-extruded hover:neumorphic-extruded-hover active:neumorphic-inset-sm transition-all duration-300 font-body font-bold text-sm text-foreground"
            >
              Gebedstijden
            </Link>
            <Link
              href="#doneren"
              className="flex items-center gap-2 px-6 py-2 rounded-xl bg-accent text-white font-body font-bold text-sm shadow-lg hover:bg-accent-light transition-all duration-300 active:scale-95"
            >
              <Heart size={16} fill="currentColor" />
              Doneren
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl neumorphic-extruded active:neumorphic-inset-sm transition-all text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-4"
          >
            <div className="p-6 rounded-[32px] neumorphic-extruded bg-background space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-body font-bold text-lg text-foreground p-3 rounded-2xl hover:neumorphic-inset transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Link
                  href="#gebedstijden"
                  className="w-full text-center px-6 py-4 rounded-2xl neumorphic-extruded font-body font-bold text-foreground"
                >
                  Gebedstijden
                </Link>
                <Link
                  href="#doneren"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-accent text-white font-body font-bold shadow-lg"
                >
                  <Heart size={20} fill="currentColor" />
                  Doneren
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
