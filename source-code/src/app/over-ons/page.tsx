import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, Heart, Award, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Ons | Moskee Al-Abraar Eindhoven",
  description:
    "Leer meer over Stichting Alabraar – een religieuze en sociaal-culturele organisatie in Eindhoven die zich inzet voor de moslimgemeenschap.",
};

const values = [
  {
    icon: Heart,
    title: "Compassie",
    desc: "Wij geloven in de kracht van liefde en medeleven voor onze medemens, ongeacht achtergrond.",
  },
  {
    icon: BookOpen,
    title: "Educatie",
    desc: "Kennis is de sleutel tot groei. Wij bieden lessen in Koran, Arabisch en islamitische wetenschappen.",
  },
  {
    icon: Users,
    title: "Gemeenschap",
    desc: "Samen zijn we sterker. We bouwen aan een hechte, inclusieve gemeenschap in Eindhoven.",
  },
  {
    icon: Award,
    title: "Integriteit",
    desc: "Transparantie en eerlijkheid staan centraal in alles wat wij doen.",
  },
];

const team = [
  { name: "Imam Abdurrahman", role: "Hoofd Imam", image: "/Al-Abraar-019-scaled-e1663595410766.jpg.jpeg" },
  { name: "Bestuur & Vrijwilligers", role: "20+ Actieve Leden", image: "/Al-Abraar-023-scaled.jpg.jpeg" },
  { name: "Onderwijs Team", role: "Docenten & Begeleiders", image: "/Al-Abraar-048-scaled.jpg.jpeg" },
];

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#E0E5EC]">
          <Image
            src="/Al-Abraar-001R.jpg.jpeg"
            alt="Al-Abraar gemeenschap"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full neumorphic-extruded opacity-20 animate-float" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-sm tracking-widest uppercase mb-6">
            Over Ons
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
            Een thuishaven voor <span className="text-accent">iedereen</span>
          </h1>
          <p className="font-body text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Stichting Alabraar is meer dan alleen een moskee. Het is een centrum voor spirituele groei, educatieve
            ondersteuning en maatschappelijke hulp — opgericht in 2006 in Eindhoven.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2006", label: "Opgericht" },
              { value: "500+", label: "Gezinsleden" },
              { value: "20+", label: "Vrijwilligers" },
              { value: "5×", label: "Dagelijks gebed" },
            ].map(({ value, label }) => (
              <div key={label} className="p-8 rounded-[32px] neumorphic-extruded text-center">
                <p className="font-display font-extrabold text-4xl text-accent mb-2">{value}</p>
                <p className="font-body text-muted font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24" />

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="p-4 rounded-[48px] neumorphic-extruded bg-background">
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden neumorphic-inset-deep">
                  <Image
                    src="/Al-Abraar-046R.jpg.jpeg"
                    alt="Gebedsruimte Al-Abraar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-[28px] neumorphic-extruded bg-background">
                <p className="font-display font-extrabold text-3xl text-accent">18+</p>
                <p className="font-body text-sm text-muted">Jaar actief</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl neumorphic-extruded">
                    <Target size={20} className="text-accent" />
                  </div>
                  <h2 className="font-display font-bold text-3xl text-foreground">Onze Missie</h2>
                </div>
                <p className="font-body text-muted text-lg leading-relaxed">
                  Het bevorderen van de islamitische identiteit, het ondersteunen van moslimgezinnen in Eindhoven en
                  omstreken, en het bijdragen aan een betere samenleving door educatie, humanitaire dienstverlening en
                  gemeenschapsopbouw.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl neumorphic-extruded">
                    <Eye size={20} className="text-accent" />
                  </div>
                  <h2 className="font-display font-bold text-3xl text-foreground">Onze Visie</h2>
                </div>
                <p className="font-body text-muted text-lg leading-relaxed">
                  Wij streven naar een bloeiende, zelfvoorzienende moslimgemeenschap in Eindhoven die actief bijdraagt
                  aan de samenleving — vanuit de islamitische waarden van rechtvaardigheid, medeleven en kennis.
                </p>
              </div>

              <Link
                href="/projecten"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent text-white font-body font-bold hover:bg-accent-light transition-all"
              >
                Bekijk onze projecten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24" />

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Onze Kernwaarden
            </h2>
            <p className="font-body text-muted text-lg max-w-2xl mx-auto">
              De waarden die ons dagelijks handelen sturen en onze gemeenschap definiëren.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-[40px] neumorphic-extruded group hover:scale-[1.01] transition-transform">
                <div className="w-14 h-14 rounded-2xl neumorphic-inset flex items-center justify-center mb-6 group-hover:neumorphic-extruded transition-all">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">{title}</h3>
                <p className="font-body text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24" />

      {/* Gallery Row */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl text-foreground mb-12 text-center">
            Onze Gemeenschap
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "/Al-Abraar-067-2048x1365.jpg.jpeg",
              "/Al-Abraar-077-scaled-e1663596963569.jpg.jpeg",
              "/Al-Abraar-083R.jpg.jpeg",
            ].map((src, i) => (
              <div key={i} className="p-3 rounded-[32px] neumorphic-extruded group overflow-hidden">
                <div className="relative aspect-square rounded-[24px] overflow-hidden neumorphic-inset-deep">
                  <Image
                    src={src}
                    alt={`Gemeenschap foto ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24" />

      <Footer />
    </main>
  );
}
