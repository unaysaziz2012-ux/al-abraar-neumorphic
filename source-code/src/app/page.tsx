import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PrayerTimes from "@/components/PrayerTimes";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Heart, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />



      <PrayerTimes />



      {/* Community / About Section */}
      <section id="over-ons" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full neumorphic-inset opacity-20 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Image */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="p-4 rounded-[48px] neumorphic-extruded bg-background max-w-md mx-auto rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-square rounded-[40px] overflow-hidden neumorphic-inset-deep">
                  <Image
                    src="/Al-Abraar-046R.jpg.jpeg"
                    alt="Moskee Al-Abraar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-sm tracking-wider uppercase">
                Over Ons
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight">
                Een thuishaven voor <br />
                <span className="text-accent">iedereen</span>
              </h2>
              <p className="font-body text-muted text-lg leading-relaxed">
                Stichting Alabraar is meer dan alleen een moskee. Het is een centrum voor spirituele groei,
                educatieve ondersteuning en maatschappelijke hulp. Wij geloven in de kracht van een sterke,
                verenigde gemeenschap in Eindhoven.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Users, value: "500+", label: "Wekelijkse bezoekers" },
                  { icon: Heart, value: "20+", label: "Vrijwilligers" },
                  { icon: BookOpen, value: "200+", label: "Leerlingen" },
                  { icon: MapPin, value: "2006", label: "Opgericht" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="p-5 rounded-3xl neumorphic-extruded flex items-center gap-3">
                    <Icon size={18} className="text-accent shrink-0" />
                    <div>
                      <p className="font-display font-extrabold text-xl text-accent">{value}</p>
                      <p className="font-body text-xs text-muted">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/over-ons"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl neumorphic-extruded font-body font-bold text-foreground hover:text-accent transition-all group"
              >
                Lees meer over ons
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      <Projects />



      {/* Newsletter Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 md:p-20 rounded-[64px] neumorphic-extruded bg-background text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full neumorphic-inset-deep opacity-40" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full neumorphic-inset opacity-30" />

            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6 relative z-10">
              Blijf op de hoogte
            </h2>
            <p className="font-body text-muted text-lg mb-10 max-w-lg mx-auto relative z-10">
              Meld je aan voor onze nieuwsbrief en ontvang updates over onze projecten, lessen en evenementen.
            </p>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="flex-grow rounded-2xl neumorphic-inset p-1">
                <input
                  type="email"
                  placeholder="E-mailadres"
                  className="w-full h-full bg-transparent border-none focus:ring-0 outline-none px-5 py-4 font-body text-foreground placeholder:text-muted/50"
                  required
                />
              </div>
              <button className="px-8 py-4 rounded-2xl bg-accent text-white font-body font-bold shadow-xl hover:bg-accent-light transition-all active:scale-95 whitespace-nowrap">
                Inschrijven
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
