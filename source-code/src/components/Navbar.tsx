"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Over Ons", href: "/over-ons" },
  {
    name: "Onderwijs",
    href: "/onderwijs",
    submenu: [
      { name: "Koranles", href: "/onderwijs#koranles" },
      { name: "Arabisch", href: "/onderwijs#arabisch" },
      { name: "Lessen voor kinderen", href: "/onderwijs#kinderen" },
    ],
  },
  { name: "Gebedstijden", href: "/gebedstijden" },
  {
    name: "Projecten",
    href: "/projecten",
    submenu: [
      { name: "Vastgoed Project", href: "/projecten#vastgoed" },
      { name: "Voedselbank", href: "/projecten#voedselbank" },
      { name: "ANBI Status", href: "/projecten#anbi" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 md:h-20 px-4 md:px-8 rounded-2xl neumorphic-extruded bg-background transition-all duration-300`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full neumorphic-inset flex items-center justify-center p-1 overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src="/Al-Abraar-logo.svg"
                alt="Alabraar Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-foreground">
              AL-ABRAAR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-body font-medium text-sm px-3 py-2 rounded-xl transition-all ${
                    pathname === item.href
                      ? "text-accent neumorphic-inset-sm"
                      : "text-muted hover:text-foreground hover:neumorphic-inset-sm"
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${openSubmenu === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {item.submenu && openSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-52 z-50"
                    >
                      <div className="p-3 rounded-2xl neumorphic-extruded bg-background space-y-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block font-body text-sm text-muted hover:text-accent transition-colors py-2 px-3 rounded-xl hover:neumorphic-inset-sm"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/doneren"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-body font-bold text-sm shadow-lg hover:bg-accent-light transition-all duration-300 active:scale-95"
            >
              <Heart size={15} fill="currentColor" />
              Doneren
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/doneren"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-white font-body font-bold text-sm"
            >
              <Heart size={14} fill="currentColor" />
              Doneren
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl neumorphic-extruded active:neumorphic-inset-sm transition-all text-foreground"
              aria-label="Menu openen"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 mx-4"
          >
            <div className="p-5 rounded-[28px] neumorphic-extruded bg-background space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between font-body font-bold text-base p-3 rounded-xl transition-all ${
                      pathname === item.href
                        ? "text-accent neumorphic-inset-sm"
                        : "text-foreground hover:neumorphic-inset-sm"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block font-body text-sm text-muted hover:text-accent p-2 rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
