import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Projecten & Doneren | Moskee Al-Abraar Eindhoven",
  description:
    "Steun de projecten van Stichting Alabraar: vastgoedfonds, voedselbank, ANBI-erkend. Uw bijdrage maakt een verschil.",
};

const projects = [
  {
    id: "vastgoed",
    title: "Vastgoed Project",
    subtitle: "Eigen pand in Eindhoven",
    desc: "Help ons bij de aankoop en verbouwing van ons eigen pand in Eindhoven. Met een eigen locatie kunnen wij onze gemeenschap duurzaam bedienen en uitbreiden. Dit project is essentieel voor de toekomst van Stichting Alabraar.",
    image: "/mosque-project.png",
    progress: 65,
    goal: "€500.000",
    raised: "€325.000",
    donors: 142,
    iban: "NL42 INGB 0001 2345 67",
    tag: "Hoogste prioriteit",
    tagColor: "bg-accent text-white",
  },
  {
    id: "voedselbank",
    title: "Voedselbank Alabraar",
    subtitle: "Maandelijkse voedselpakketten",
    desc: "Maandelijkse voedselpakketten voor gezinnen die het hard nodig hebben. Wij bereiken elke maand meer dan 50 gezinnen in de regio Eindhoven. Elke bijdrage helpt ons meer levens te verbeteren.",
    image: "/charity-project.png",
    progress: 85,
    goal: "€10.000",
    raised: "€8.500",
    donors: 89,
    iban: "NL42 INGB 0001 2345 67",
    tag: "Urgent",
    tagColor: "bg-red-400 text-white",
  },
  {
    id: "onderwijs",
    title: "Onderwijs Fonds",
    subtitle: "Koranles & Arabisch",
    desc: "Financier de educatieve programma's van Stichting Alabraar. Van Koranles voor kinderen tot arabische taalcursussen voor volwassenen — kennis is de investering met de hoogste return.",
    image: "/Al-Abraar-048-scaled.jpg.jpeg",
    progress: 40,
    goal: "€20.000",
    raised: "€8.000",
    donors: 56,
    iban: "NL42 INGB 0001 2345 67",
    tag: "Lopend",
    tagColor: "neumorphic-inset-sm text-accent",
  },
];

export default function ProjectenPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full neumorphic-extruded opacity-20 animate-float" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-sm tracking-widest uppercase mb-6">
            Projecten & Doneren
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
            Investeer in het <span className="text-accent">hiernamaals</span>
          </h1>
          <p className="font-body text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Elke bijdrage aan Stichting Alabraar is een sadaqah jariyah — een aanhoudende liefdadigheid waarvan u ook
            na uw overlijden profiteert. Wij zijn een erkende ANBI-instelling.
          </p>
        </div>
      </section>

      {/* ANBI Badge */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-[32px] neumorphic-extruded flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 shrink-0">
              <Image src="/ANBI_FC.svg" alt="ANBI Erkend" width={80} height={80} />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">ANBI-erkende organisatie</h3>
              <p className="font-body text-muted text-sm leading-relaxed">
                Stichting Alabraar heeft de ANBI-status (Algemeen Nut Beogende Instelling). Dit betekent dat uw
                giften fiscaal aftrekbaar zijn van uw belastbaar inkomen. Uw bijdrage is transparant en goed
                besteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16" id="projecten">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <div
                key={project.id}
                id={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image */}
                <div className="p-4 rounded-[48px] neumorphic-extruded">
                  <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden neumorphic-inset-deep">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-body font-bold ${project.tagColor}`}>
                        {project.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <p className="font-body text-accent font-bold text-sm uppercase tracking-wider mb-2">{project.subtitle}</p>
                    <h2 className="font-display font-extrabold text-4xl text-foreground mb-4">{project.title}</h2>
                    <p className="font-body text-muted text-lg leading-relaxed">{project.desc}</p>
                  </div>

                  {/* Progress */}
                  <div className="p-6 rounded-[28px] neumorphic-extruded space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-accent" />
                        <span className="font-body font-bold text-foreground text-sm">Voortgang</span>
                      </div>
                      <span className="font-display font-extrabold text-accent text-xl">{project.progress}%</span>
                    </div>
                    <div className="h-5 w-full rounded-full neumorphic-inset p-1">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light shadow-[0_0_12px_rgba(197,160,89,0.4)] transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider font-bold">Ingezameld</p>
                        <p className="font-display font-extrabold text-xl text-foreground">{project.raised}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted uppercase tracking-wider font-bold">Doel</p>
                        <p className="font-display font-extrabold text-xl text-foreground">{project.goal}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted uppercase tracking-wider font-bold">Donateurs</p>
                        <p className="font-display font-extrabold text-xl text-foreground">{project.donors}</p>
                      </div>
                    </div>
                  </div>

                  {/* IBAN */}
                  <div className="p-5 rounded-2xl neumorphic-inset-sm">
                    <p className="text-xs font-body text-muted uppercase tracking-widest mb-1 font-bold">IBAN</p>
                    <p className="font-display font-bold text-foreground text-lg">{project.iban}</p>
                    <p className="font-body text-xs text-muted mt-1">t.n.v. Stichting Alabraar — O.v.v. {project.title}</p>
                  </div>

                  <button className="w-full py-4 rounded-2xl bg-accent text-white font-body font-bold text-lg shadow-lg hover:bg-accent-light transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                    Nu Doneren
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-24" />
      <Footer />
    </main>
  );
}
