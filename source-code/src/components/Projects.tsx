"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Vastgoed Project",
    desc: "Help ons bij de aankoop en verbouwing van ons eigen pand in Eindhoven.",
    image: "/mosque-project.png",
    progress: 65,
    goal: "€500.000",
    raised: "€325.000"
  },
  {
    title: "Voedselbank Alabraar",
    desc: "Maandelijkse voedselpakketten voor gezinnen die het hard nodig hebben.",
    image: "/charity-project.png",
    progress: 85,
    goal: "€10.000",
    raised: "€8.500"
  },
];

export default function Projects() {
  return (
    <section id="doneren" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">Lopende Projecten</h2>
            <p className="font-body text-muted text-lg">Investeer in het hiernamaals door bij te dragen aan onze gemeenschapsprojecten.</p>
          </div>
          <button className="px-8 py-3 rounded-2xl neumorphic-extruded hover:neumorphic-extruded-hover active:neumorphic-inset transition-all font-body font-bold text-foreground flex items-center gap-2 group">
            Alle Projecten
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-6 rounded-[40px] neumorphic-extruded bg-background"
            >
              <div className="relative h-64 w-full rounded-[32px] overflow-hidden mb-8 neumorphic-inset p-2">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover rounded-[28px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="px-4">
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">{project.title}</h3>
                <p className="font-body text-muted mb-8">{project.desc}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-body font-bold text-foreground">Voortgang</span>
                    <span className="font-display font-extrabold text-accent">{project.progress}%</span>
                  </div>
                  <div className="h-4 w-full rounded-full neumorphic-inset p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light shadow-[0_0_10px_rgba(108,99,255,0.4)]" 
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 rounded-2xl neumorphic-inset-sm">
                  <div>
                    <p className="text-xs font-body text-muted uppercase tracking-wider">Ingezameld</p>
                    <p className="font-display font-extrabold text-lg text-foreground">{project.raised}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-body text-muted uppercase tracking-wider">Doel</p>
                    <p className="font-display font-extrabold text-lg text-foreground">{project.goal}</p>
                  </div>
                </div>

                <button className="w-full mt-8 py-4 rounded-2xl bg-accent text-white font-body font-bold text-lg shadow-lg hover:bg-accent-light transition-all active:scale-[0.98]">
                  Nu Doneren
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
