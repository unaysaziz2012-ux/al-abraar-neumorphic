"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, X } from 'lucide-react';

export default function PrayerTimesTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prayerTimes = [
    { name: 'Fajr', time: '04:30' },
    { name: 'Dhuhr', time: '13:42', next: true },
    { name: 'Asr', time: '17:15' },
    { name: 'Maghrib', time: '21:05' },
    { name: 'Isha', time: '22:30' },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed right-0 top-32 z-50 flex items-start pointer-events-none">
      {/* The popout panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[#E0E5EC] neumorphic-extruded rounded-l-3xl p-6 mr-4 w-72 border-l border-y border-white/20 pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-foreground text-xl">Gebedstijden</h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-muted hover:text-foreground transition-colors p-2 rounded-full hover:neumorphic-inset-sm"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-3">
              {prayerTimes.map((prayer, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center px-4 py-3 rounded-2xl ${prayer.next ? 'neumorphic-inset bg-accent/5' : 'neumorphic-inset-sm'}`}
                >
                  <span className={`font-body font-bold ${prayer.next ? 'text-accent' : 'text-muted'}`}>
                    {prayer.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {prayer.next && <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                    <span className={`font-body font-bold ${prayer.next ? 'text-accent' : 'text-foreground'}`}>
                      {prayer.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
               <a 
                 href="#gebedstijden" 
                 onClick={() => setIsOpen(false)} 
                 className="inline-block text-xs font-bold text-accent hover:text-accent/80 uppercase tracking-widest transition-colors"
               >
                 Naar gebedskalender &rarr;
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Tab Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto absolute right-0 transition-all duration-500 ease-out ${
          isOpen ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0 hover:-translate-x-2'
        }`}
      >
        <div className="flex items-center gap-3 px-5 py-3 rounded-l-full neumorphic-inset-sm bg-[#E0E5EC]/80 backdrop-blur-md border-y border-l border-white/40 hover:neumorphic-extruded shadow-lg transition-all duration-300 group">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse group-hover:scale-125 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted group-hover:text-foreground transition-colors whitespace-nowrap">
              Volgende Gebed: Dhuhr (13:42)
            </span>
        </div>
      </button>
    </div>
  );
}
