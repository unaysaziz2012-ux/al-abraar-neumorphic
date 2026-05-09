import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { BookOpen, GraduationCap, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Onderwijs | Moskee Al-Abraar Eindhoven",
  description:
    "Ontdek het onderwijsaanbod van Stichting Alabraar: Koranles, Arabisch taalonderwijs en meer voor kinderen en volwassenen.",
};

const courses = [
  {
    id: "koranles",
    icon: BookOpen,
    title: "Koranles",
    subtitle: "Voor kinderen & volwassenen",
    desc: "Wij bieden Koranles aan voor alle leeftijden. Kinderen leren de Koran lezen, memoriseren en begrijpen. Volwassenen kunnen ook deelnemen aan avondlessen.",
    details: ["Leeftijd 6+", "Weekdagen & weekend", "Kleine groepen", "Gecertificeerde docenten"],
    image: "/Al-Abraar-019-scaled-e1663595410766.jpg.jpeg",
    timing: "Ma t/m Vr: 16:00 – 18:00 | Za & Zo: 10:00 – 13:00",
  },
  {
    id: "arabisch",
    icon: GraduationCap,
    title: "Arabisch",
    subtitle: "Taal & Grammatica",
    desc: "Leer Arabisch van de grond af aan. Onze cursussen omvatten moderne standaard Arabisch, islamitische terminologie en Koranische Arabisch.",
    details: ["Beginners & gevorderden", "Avondlessen", "Lesmateriaal inbegrepen", "Online mogelijk"],
    image: "/Al-Abraar-067-2048x1365.jpg.jpeg",
    timing: "Di & Do: 19:30 – 21:00",
  },
  {
    id: "kinderen",
    icon: Users,
    title: "Islamitische Vorming",
    subtitle: "Kinderen & Jongeren",
    desc: "Een breed programma voor jonge moslims: islamitische basiskennis, fiqh, sira en morele vorming in een veilige en stimulerende omgeving.",
    details: ["Leeftijd 8-18 jaar", "Weekendlessen", "Spelenderwijs leren", "Activiteiten & uitjes"],
    image: "/Al-Abraar-048-scaled.jpg.jpeg",
    timing: "Zaterdag: 09:00 – 12:00",
  },
];

export default function OnderwijsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full neumorphic-extruded opacity-20 animate-float" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-sm tracking-widest uppercase mb-6">
            Onderwijs
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
            Kennis als <span className="text-accent">fundament</span>
          </h1>
          <p className="font-body text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            &quot;Zoek kennis, van de wieg tot het graf.&quot; — Bij Stichting Alabraar bieden wij kwalitatief islamitisch
            onderwijs voor iedereen, van jong tot oud.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "200+", label: "Leerlingen" },
              { value: "20+", label: "Lessen per week" },
              { value: "5", label: "Gecertificeerde docenten" },
              { value: "3", label: "Programma's" },
            ].map(({ value, label }) => (
              <div key={label} className="p-6 rounded-[28px] neumorphic-extruded text-center">
                <p className="font-display font-extrabold text-3xl text-accent mb-1">{value}</p>
                <p className="font-body text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {courses.map((course, i) => (
            <div
              key={course.id}
              id={course.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Image */}
              <div className="p-4 rounded-[48px] neumorphic-extruded">
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden neumorphic-inset-deep">
                  <Image src={course.image} alt={course.title} fill className="object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl neumorphic-inset flex items-center justify-center">
                  <course.icon size={26} className="text-accent" />
                </div>
                <div>
                  <p className="font-body text-accent font-bold text-sm uppercase tracking-wider mb-2">{course.subtitle}</p>
                  <h2 className="font-display font-extrabold text-4xl text-foreground mb-4">{course.title}</h2>
                  <p className="font-body text-muted text-lg leading-relaxed">{course.desc}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {course.details.map((d) => (
                    <div key={d} className="flex items-center gap-2 p-3 rounded-xl neumorphic-inset-sm">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="font-body text-sm text-foreground">{d}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl neumorphic-inset">
                  <Clock size={18} className="text-accent shrink-0" />
                  <p className="font-body text-sm text-muted">{course.timing}</p>
                </div>

                <button className="w-full py-4 rounded-2xl bg-accent text-white font-body font-bold text-base shadow-lg hover:bg-accent-light transition-all active:scale-[0.98]">
                  Aanmelden
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-24" />
      <Footer />
    </main>
  );
}
