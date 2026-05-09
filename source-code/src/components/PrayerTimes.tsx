"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const prayers = [
  { name: "Fajr", time: "04:12" },
  { name: "Sunrise", time: "05:58" },
  { name: "Dhuhr", time: "13:34" },
  { name: "Asr", time: "17:38" },
  { name: "Maghrib", time: "21:10" },
  { name: "Isha", time: "22:56" },
];

export default function PrayerTimes() {
  return (
    <section id="gebedstijden" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl text-foreground mb-4">Gebedstijden Eindhoven</h2>
          <p className="font-body text-muted italic">"Voorwaar, het gebed is de gelovigen op vaste tijden voorgeschreven." (Koran 4:103)</p>
        </div>

        <div className="p-8 md:p-12 rounded-[40px] neumorphic-extruded bg-background">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {prayers.map((prayer, index) => (
              <motion.div
                key={prayer.name}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-3xl text-center transition-all ${
                  prayer.name === "Dhuhr" 
                  ? "neumorphic-inset-deep border-2 border-accent/20" 
                  : "neumorphic-inset"
                }`}
              >
                <span className={`block font-display font-bold text-sm mb-2 ${prayer.name === "Dhuhr" ? "text-accent" : "text-muted"}`}>
                  {prayer.name}
                </span>
                <span className="block font-display font-extrabold text-2xl text-foreground tracking-tighter">
                  {prayer.time}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl neumorphic-inset-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-muted">
              <div className="w-10 h-10 rounded-full neumorphic-extruded-sm flex items-center justify-center">
                <Clock size={18} />
              </div>
              <span className="font-body font-medium">Volgende gebed: <span className="text-foreground font-bold">Asr in 1u 24m</span></span>
            </div>
            <button className="px-6 py-3 rounded-xl neumorphic-extruded hover:neumorphic-extruded-hover active:neumorphic-inset transition-all font-body font-bold text-accent">
              Volledig Maandrooster
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
