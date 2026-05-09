"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, X, ChevronLeft } from 'lucide-react';

export default function PrayerTimesTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prayerTimes = [
    { name: 'Fajr', time: '04:12' },
    { name: 'Shuruq', time: '05:58' },
    { name: 'Dhuhr', time: '13:34', next: true },
    { name: 'Asr', time: '17:38' },
    { name: 'Maghrib', time: '21:10' },
    { name: 'Isha', time: '22:56' },
  ];

  if (!mounted) return null;

  return (
    <div 
      style={{ position: 'fixed', right: 0, top: '25vh', zIndex: 999999, display: 'flex', alignItems: 'center', pointerEvents: 'none' }}
    >
      {/* The popout panel */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="bg-[#E0E5EC] rounded-l-[3rem] p-10 mr-0 w-[22rem] border-l-4 border-y-4 border-white/60 pointer-events-auto shadow-[-40px_0_80px_rgba(0,0,0,0.15)] neumorphic-extruded"
          >
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="font-display font-black text-foreground text-3xl tracking-tighter uppercase mb-1 italic">Gebedstijden</h3>
                <div className="h-1.5 w-16 bg-accent rounded-full shadow-md" />
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-muted hover:text-accent transition-all p-3 rounded-full neumorphic-extruded hover:neumorphic-inset-sm active:scale-90"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-5">
              {prayerTimes.map((prayer, index) => {
                const isShuruq = prayer.name === 'Shuruq';
                return (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center px-8 py-5 rounded-[2rem] transition-all duration-500 ${
                      prayer.next 
                      ? 'bg-accent text-white shadow-[0_20px_40px_rgba(197,160,89,0.5)] scale-[1.05] z-10 relative' 
                      : 'neumorphic-inset-sm opacity-90 hover:opacity-100'
                    } ${isShuruq ? 'border border-accent/10 border-dashed opacity-50' : 'border border-white/10'}`}
                  >
                    <span className={`font-body font-black text-sm uppercase tracking-[0.2em] ${prayer.next ? 'text-white' : isShuruq ? 'text-accent/70' : 'text-muted'}`}>
                      {prayer.name}
                    </span>
                    <div className="flex items-center gap-4">
                      {prayer.next && <div className="w-3 h-3 rounded-full bg-white animate-pulse" />}
                      <span className={`font-display font-black text-2xl ${prayer.next ? 'text-white' : isShuruq ? 'text-accent/90' : 'text-foreground'}`}>
                        {prayer.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-accent/10 text-center">
               <a 
                 href="#gebedstijden" 
                 onClick={() => setIsOpen(false)} 
                 className="group inline-flex items-center gap-4 text-xs font-black text-accent hover:text-accent-light uppercase tracking-[0.4em] transition-all"
               >
                 <span>Bekijk Rooster</span>
                 <ChevronLeft size={16} className="rotate-180 transition-transform group-hover:translate-x-3" />
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Tab Button (Handle) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isOpen ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0 hover:scale-105 active:scale-95'
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-12 px-6 rounded-l-[3rem] bg-gradient-to-br from-[#d4ae65] to-[#b19050] border-y-2 border-l-2 border-white/40 shadow-[-15px_0_40px_rgba(197,160,89,0.4),_inset_4px_4px_8px_rgba(255,255,255,0.4),_inset_-4px_-4px_8px_rgba(0,0,0,0.15)] transition-all duration-300 group">
            <div className="relative">
              <Clock size={32} className="text-white drop-shadow-md group-hover:rotate-[360deg] transition-transform duration-700" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border-2 border-accent animate-pulse" />
            </div>
            <div className="[writing-mode:vertical-lr] rotate-180 flex items-center justify-center">
              <span className="text-base font-black uppercase tracking-[0.6em] text-white whitespace-nowrap">
                Gebedstijden
              </span>
            </div>
            <div className="flex flex-col gap-2 opacity-60">
              <div className="w-2 h-2 rounded-full bg-white shadow-inner" />
              <div className="w-2 h-2 rounded-full bg-white/40 shadow-inner" />
            </div>
        </div>
      </button>
    </div>

  );
}
