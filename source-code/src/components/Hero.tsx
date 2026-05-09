"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserPlus, ArrowRight, Clock, BookOpen, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#E0E5EC]">
        <Image
          src="/hero.jpg"
          alt="Moskee Al-Abraar Eindhoven"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(224,229,236,0.4) 60%, rgba(224,229,236,0.85) 85%, #E0E5EC 100%)",
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 rounded-full neumorphic-extruded animate-float opacity-30 z-10" />
      <div className="absolute bottom-[5%] left-[-5%] w-64 h-64 rounded-full neumorphic-inset animate-float opacity-20 z-10" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-4xl mx-auto p-10 md:p-20 rounded-[64px] neumorphic-extruded bg-[#E0E5EC]/90 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full neumorphic-inset opacity-40 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full neumorphic-inset opacity-30 translate-y-1/2 -translate-x-1/2" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-xs tracking-[0.2em] uppercase mb-8 relative z-10"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Eindhovens Gemeenschap Sinds 2006
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-6 relative z-10 leading-[0.92]"
          >
            Welkom bij
            <br />
            <span className="text-accent">Moskee Al-Abraar</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed relative z-10"
          >
            Een plek voor gebed, gemeenschap en educatie in hartje Eindhoven. Stichting Alabraar zet zich in voor de moslimgemeenschap met religieuze, sociale en culturele activiteiten.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
          >
            <Link
              href="/doneren"
              className="w-full sm:w-auto px-10 py-4 rounded-3xl neumorphic-extruded bg-accent text-white font-body font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <Heart size={18} fill="currentColor" />
              Steun Ons
            </Link>
            <Link
              href="/over-ons"
              className="w-full sm:w-auto px-10 py-4 rounded-3xl neumorphic-extruded bg-[#E0E5EC] text-foreground font-body font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              Ontdek Meer
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-12 grid grid-cols-3 gap-4 relative z-10"
          >
            {[
              { icon: UserPlus, value: "500+", label: "Leden" },
              { icon: BookOpen, value: "20+", label: "Lessen / week" },
              { icon: Clock, value: "5×", label: "Dagelijks gebed" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="p-4 rounded-2xl neumorphic-inset text-center">
                <Icon size={18} className="text-accent mx-auto mb-1" />
                <p className="font-display font-extrabold text-xl text-foreground">{value}</p>
                <p className="font-body text-xs text-muted">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
