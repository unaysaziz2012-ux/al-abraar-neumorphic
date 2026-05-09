import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowUpRight, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "Doneren | Moskee Al-Abraar Eindhoven",
  description:
    "Steun Stichting Alabraar met een donatie. ANBI-erkend, fiscaal aftrekbaar. Sadaqah Jariyah voor uw hiernamaals.",
};

export default function DonerenPage() {
  const amounts = [10, 25, 50, 100, 250, 500];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full neumorphic-extruded opacity-20 animate-float" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-sm tracking-widest uppercase mb-6">
            <Heart size={14} fill="currentColor" />
            Doneren
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
            Geef voor het <span className="text-accent">hiernamaals</span>
          </h1>
          <p className="font-body text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Elke bijdrage — groot of klein — is een sadaqah jariyah. Uw donatie ondersteunt onze moskee, onze
            gemeenschap en onze kinderen. Stichting Alabraar is ANBI-erkend.
          </p>
        </div>
      </section>

      {/* IBAN Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 md:p-16 rounded-[64px] neumorphic-extruded text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full neumorphic-inset opacity-30" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full neumorphic-inset opacity-20" />

            <div className="flex items-center justify-center mb-8">
              <Image src="/ANBI_FC.svg" alt="ANBI" width={60} height={60} />
              <div className="ml-4 text-left">
                <p className="font-body font-bold text-foreground">ANBI Erkend</p>
                <p className="font-body text-xs text-muted">Giften fiscaal aftrekbaar</p>
              </div>
            </div>

            <p className="font-body text-muted uppercase tracking-widest text-xs font-bold mb-3 relative z-10">
              Bankoverschrijving
            </p>
            <p className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-2 relative z-10">
              NL42 INGB 0001 2345 67
            </p>
            <p className="font-body text-muted mb-8 relative z-10">t.n.v. Stichting Alabraar — Eindhoven</p>

            <button
              className="flex items-center gap-3 px-8 py-4 rounded-2xl neumorphic-extruded font-body font-bold text-foreground hover:neumorphic-extruded-hover transition-all mx-auto relative z-10"
              onClick={() => navigator.clipboard.writeText("NL42 INGB 0001 2345 67")}
            >
              <Copy size={18} />
              Kopieer IBAN
            </button>
          </div>
        </div>
      </section>

      {/* Quick Amounts */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-foreground text-center mb-10">
            Kies een bedrag
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {amounts.map((a) => (
              <button
                key={a}
                className="p-5 rounded-2xl neumorphic-extruded hover:neumorphic-inset active:neumorphic-inset transition-all font-display font-extrabold text-xl text-foreground hover:text-accent"
              >
                €{a}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="flex-grow rounded-2xl neumorphic-inset p-1">
              <input
                type="number"
                placeholder="Eigen bedrag (€)"
                className="w-full bg-transparent border-none focus:ring-0 outline-none px-5 py-4 font-body text-foreground placeholder:text-muted/50"
              />
            </div>
            <button className="px-8 py-4 rounded-2xl bg-accent text-white font-body font-bold shadow-lg hover:bg-accent-light transition-all flex items-center gap-2">
              <Heart size={18} fill="currentColor" />
              Doneer
            </button>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-foreground text-center mb-12">
            Uw donatie gaat naar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Vastgoed Project", img: "/mosque-project.png", pct: 65 },
              { title: "Voedselbank", img: "/charity-project.png", pct: 85 },
              { title: "Onderwijs Fonds", img: "/Al-Abraar-048-scaled.jpg.jpeg", pct: 40 },
            ].map(({ title, img, pct }) => (
              <div key={title} className="p-5 rounded-[40px] neumorphic-extruded group">
                <div className="relative h-44 rounded-[32px] overflow-hidden neumorphic-inset-deep mb-5">
                  <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
                <div className="h-3 w-full rounded-full neumorphic-inset p-0.5 mb-2">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
                </div>
                <p className="font-body text-xs text-muted">{pct}% bereikt</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projecten"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl neumorphic-extruded font-body font-bold text-foreground hover:text-accent transition-all group"
            >
              Bekijk alle projecten
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="h-24" />
      <Footer />
    </main>
  );
}
