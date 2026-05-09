"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, ArrowRight } from "lucide-react";
import { Heart, BookOpen, Users } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#E0E5EC]">
        <img
          src="/hero-bg.jpg"
          alt="Moskee Achtergrond"
          className="w-full h-full object-cover opacity-20"
        />
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(224, 229, 236, 0.2) 60%, rgba(224, 229, 236, 0.5) 80%, rgba(224, 229, 236, 0.8) 90%, #E0E5EC 100%)" 
          }} 
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 rounded-full neumorphic-extruded animate-float opacity-40 z-10" />
      <div className="absolute bottom-[5%] left-[-5%] w-64 h-64 rounded-full neumorphic-inset animate-float opacity-20 z-10" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[80px] neumorphic-extruded bg-[#E0E5EC] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full neumorphic-inset opacity-40 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full neumorphic-inset opacity-30 translate-y-1/2 -translate-x-1/2" />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-xs tracking-[0.2em] uppercase"
            >
              Eindhovens Grootste Gemeenschap
            </motion.div>
          </div>

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


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 relative z-10">
            <button
              className="w-full sm:w-auto px-10 py-5 rounded-3xl neumorphic-extruded bg-accent text-white font-body font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <UserPlus size={20} strokeWidth={2.5} />
              <span>Word Lid</span>
            </button>
            <button
              className="w-full sm:w-auto px-10 py-5 rounded-3xl neumorphic-extruded bg-[#E0E5EC] text-foreground font-body font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <span>Ontdek Meer</span>
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
