"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Sun, Sunset, Moon, Star, CalendarDays, RefreshCw } from "lucide-react";

const prayers = [
  { name: "Fajr", icon: Star, time: "04:12", iqama: "04:30", arabic: "الفجر" },
  { name: "Shoroq", icon: Sun, time: "05:58", iqama: "—", arabic: "الشروق" },
  { name: "Dhuhr", icon: Sun, time: "13:34", iqama: "13:45", arabic: "الظهر" },
  { name: "Asr", icon: Sunset, time: "17:38", iqama: "17:50", arabic: "العصر" },
  { name: "Maghrib", icon: Sunset, time: "21:10", iqama: "21:12", arabic: "المغرب" },
  { name: "Isha", icon: Moon, time: "22:56", iqama: "23:00", arabic: "العشاء" },
];

const weekSchedule = [
  { day: "Ma", fajr: "04:12", dhuhr: "13:34", asr: "17:38", maghrib: "21:10", isha: "22:56" },
  { day: "Di", fajr: "04:11", dhuhr: "13:34", asr: "17:39", maghrib: "21:12", isha: "22:58" },
  { day: "Wo", fajr: "04:09", dhuhr: "13:34", asr: "17:40", maghrib: "21:13", isha: "23:00" },
  { day: "Do", fajr: "04:08", dhuhr: "13:34", asr: "17:41", maghrib: "21:15", isha: "23:02" },
  { day: "Vr", fajr: "04:06", dhuhr: "13:34", asr: "17:42", maghrib: "21:17", isha: "23:04" },
  { day: "Za", fajr: "04:05", dhuhr: "13:34", asr: "17:43", maghrib: "21:18", isha: "23:06" },
  { day: "Zo", fajr: "04:03", dhuhr: "13:34", asr: "17:44", maghrib: "21:20", isha: "23:08" },
];

export default function GebedstijdenPage() {
  const [currentPrayer, setCurrentPrayer] = useState<string>("Dhuhr");
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string }>({ name: "Asr", time: "17:38" });
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const timeStr = now.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("nl-NL", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full neumorphic-extruded opacity-20 animate-float" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-sm tracking-widest uppercase mb-6">
            Gebedstijden
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-foreground mb-4 leading-tight">
            Gebedstijden <span className="text-accent">Eindhoven</span>
          </h1>
          <p className="font-body text-muted italic text-lg mb-8 max-w-2xl mx-auto">
            &quot;Voorwaar, het gebed is de gelovigen op vaste tijden voorgeschreven.&quot; — Koran 4:103
          </p>

          {/* Live Clock */}
          <div className="inline-flex items-center gap-4 p-6 rounded-[32px] neumorphic-extruded">
            <Clock size={24} className="text-accent" />
            <div className="text-left">
              <p className="font-display font-extrabold text-3xl text-foreground">{timeStr}</p>
              <p className="font-body text-sm text-muted capitalize">{dateStr}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Prayer Banner */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-[32px] bg-accent text-white flex items-center justify-between shadow-[6px_6px_18px_rgba(197,160,89,0.35)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Clock size={22} className="text-white" />
              </div>
              <div>
                <p className="font-body text-white/80 text-sm">Volgend gebed</p>
                <p className="font-display font-extrabold text-2xl">{nextPrayer.name} — {nextPrayer.time}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all px-4 py-2 rounded-xl font-body font-bold text-sm">
              <RefreshCw size={14} />
              Vernieuwen
            </button>
          </div>
        </div>
      </section>

      {/* Prayer Cards */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-[48px] neumorphic-extruded bg-background">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {prayers.map((prayer) => (
                <div
                  key={prayer.name}
                  className={`p-5 rounded-3xl text-center transition-all cursor-pointer ${
                    currentPrayer === prayer.name
                      ? "neumorphic-inset border-2 border-accent/30"
                      : "neumorphic-inset hover:scale-105"
                  }`}
                  onClick={() => setCurrentPrayer(prayer.name)}
                >
                  <prayer.icon size={16} className={`mx-auto mb-2 ${currentPrayer === prayer.name ? "text-accent" : "text-muted"}`} />
                  <span className="block font-body font-bold text-xs mb-1 text-muted uppercase tracking-wider">
                    {prayer.name}
                  </span>
                  <span className={`block font-display font-extrabold text-2xl tracking-tight ${currentPrayer === prayer.name ? "text-accent" : "text-foreground"}`}>
                    {prayer.time}
                  </span>
                  {prayer.iqama !== "—" && (
                    <span className="block font-body text-xs text-muted mt-1">Iqama: {prayer.iqama}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Juma Notice */}
            <div className="mt-4 p-5 rounded-2xl neumorphic-inset-sm bg-accent/5 border border-accent/20">
              <p className="font-body text-sm text-foreground text-center">
                <span className="font-bold text-accent">Vrijdaggebed (Juma):</span> Eerste khutbah 13:00 — Tweede khutbah 13:15 — Gebed 13:30
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Table */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <CalendarDays size={24} className="text-accent" />
            <h2 className="font-display font-bold text-3xl text-foreground">Weekrooster</h2>
          </div>
          <div className="p-6 rounded-[40px] neumorphic-extruded overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left font-display font-bold text-sm text-muted py-3 px-4 uppercase tracking-wider">Dag</th>
                  {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((h) => (
                    <th key={h} className="text-center font-display font-bold text-sm text-muted py-3 px-4 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weekSchedule.map((row, i) => (
                  <tr key={row.day} className={`${i % 2 === 0 ? "bg-white/5" : ""} rounded-xl`}>
                    <td className="font-display font-extrabold text-lg text-accent py-4 px-4">{row.day}</td>
                    {[row.fajr, row.dhuhr, row.asr, row.maghrib, row.isha].map((t, j) => (
                      <td key={j} className="text-center font-body font-medium text-foreground py-4 px-4">{t}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs text-muted text-center mt-4">
            * Tijden zijn bij benadering. Controleer regelmatig voor actuele tijden.
          </p>
        </div>
      </section>

      <div className="h-24" />
      <Footer />
    </main>
  );
}
