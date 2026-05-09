import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PrayerTimes from "@/components/PrayerTimes";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-32">
      <Navbar />
      <Hero />
      
      {/* Massive Cinematic Spacer */}
      <div className="h-48 lg:h-96 w-full bg-background relative z-10" />

      <PrayerTimes />
      
      {/* Massive Cinematic Spacer */}
      <div className="h-48 lg:h-96 w-full bg-background relative z-10" />

      {/* Community Section */}
      <section id="over-ons" className="py-64 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full neumorphic-inset opacity-20 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-40">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="p-4 rounded-[48px] neumorphic-extruded bg-background max-w-md mx-auto rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-square rounded-[40px] overflow-hidden neumorphic-inset-deep">
                  <img 
                    src="/hero-bg.jpg" 
                    alt="Moskee Alabraar" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-12">
              <div className="inline-block px-4 py-1.5 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-sm tracking-wider uppercase">
                Over Ons
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Een thuishaven voor <br />
                <span className="text-accent">iedereen</span>
              </h2>
              <p className="font-body text-muted text-lg leading-relaxed">
                Stichting Alabraar is meer dan alleen een moskee. Het is een centrum voor spirituele groei, educatieve ondersteuning en maatschappelijke hulp. Wij geloven in de kracht van een sterke, verenigde gemeenschap.
              </p>
              
              <div className="grid grid-cols-2 gap-10 pt-4">
                <div className="p-8 rounded-3xl neumorphic-extruded">
                  <p className="font-display font-extrabold text-3xl text-accent mb-1">500+</p>
                  <p className="font-body text-sm text-muted">Wekelijkse bezoekers</p>
                </div>
                <div className="p-8 rounded-3xl neumorphic-extruded">
                  <p className="font-display font-extrabold text-3xl text-accent mb-1">20+</p>
                  <p className="font-body text-sm text-muted">Vrijwilligers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Cinematic Spacer */}
      <div className="h-48 lg:h-96 w-full bg-background relative z-10" />
      
      <Projects />
      
      {/* Massive Cinematic Spacer */}
      <div className="h-48 lg:h-96 w-full bg-background relative z-10" />

      {/* Newsletter Section */}
      <section className="py-80 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-12 md:p-24 rounded-[64px] neumorphic-extruded bg-background text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full neumorphic-inset-deep opacity-40" />
            
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-8 relative z-10">
              Blijf op de hoogte
            </h2>
            <p className="font-body text-muted text-lg mb-12 max-w-lg mx-auto relative z-10">
              Meld je aan voor onze nieuwsbrief en ontvang updates over onze projecten, lessen en evenementen.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-6 relative z-10">
              <div className="flex-grow rounded-2xl neumorphic-inset p-1">
                <input 
                  type="email" 
                  placeholder="E-mailadres" 
                  className="w-full h-full bg-transparent border-none focus:ring-0 px-6 py-5 font-body text-foreground placeholder:text-muted/50"
                  required
                />
              </div>
              <button className="px-10 py-5 rounded-2xl bg-accent text-white font-body font-bold text-lg shadow-xl hover:bg-accent-light transition-all active:scale-95 whitespace-nowrap">
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
