"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#ecf0f3]">
        <img
          src="/hero-bg.jpg"
          alt="Moskee Achtergrond"
          className="w-full h-full object-cover opacity-20"
        />
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: "linear-gradient(to bottom, transparent 0%, transparent 70%, #ecf0f3 100%)" 
          }} 
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 rounded-full neumorphic-extruded animate-float opacity-40 z-10" />
      <div className="absolute bottom-[5%] left-[-5%] w-64 h-64 rounded-full neumorphic-inset animate-float opacity-20 z-10" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[80px] neumorphic-extruded bg-[#ecf0f3] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full neumorphic-inset opacity-40 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full neumorphic-inset opacity-30 translate-y-1/2 -translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-xs tracking-[0.2em] uppercase mb-10 relative z-10"
          >
            Eindhovens Grootste Gemeenschap
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-extrabold text-5xl md:text-8xl tracking-tight text-foreground mb-8 relative z-10 leading-[0.95]"
          >
            Rechtvaardigheid in <br />
            <span className="text-accent">Hartje Eindhoven</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-lg md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed relative z-10"
          >
            Welkom bij Stichting Alabraar. Samen bouwen we aan een gemeenschap gebaseerd op educatie, welzijn en humanitaire dienstverlening.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="px-10 py-5 rounded-2xl bg-accent text-white font-body font-bold text-lg shadow-xl hover:bg-accent-light transition-all active:scale-95">
              Word Lid
            </button>
            <button className="px-10 py-5 rounded-2xl neumorphic-extruded hover:neumorphic-extruded-hover active:neumorphic-inset transition-all font-body font-bold text-lg text-foreground bg-background/50 backdrop-blur-sm">
              Ontdek Meer
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
