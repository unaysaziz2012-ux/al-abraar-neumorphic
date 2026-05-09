"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ naam: "", email: "", onderwerp: "", bericht: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full neumorphic-extruded opacity-20 animate-float" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-6 py-2 rounded-full neumorphic-inset-sm text-accent font-body font-bold text-sm tracking-widest uppercase mb-6">
            Contact
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
            Neem <span className="text-accent">contact</span> op
          </h1>
          <p className="font-body text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Heeft u vragen, wilt u lid worden, of wilt u uw kind aanmelden? Wij staan voor u klaar.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-foreground mb-8">Contactgegevens</h2>

              {[
                {
                  icon: MapPin,
                  title: "Adres",
                  lines: ["Paukenstraat 2", "5642 RS Eindhoven", "Nederland"],
                },
                {
                  icon: Phone,
                  title: "Telefoon",
                  lines: ["040 281 1111"],
                },
                {
                  icon: Mail,
                  title: "E-mail",
                  lines: ["info@alabraar.nl"],
                },
                {
                  icon: Clock,
                  title: "Openingstijden Kantoor",
                  lines: ["Ma – Vr: 09:00 – 17:00", "Za: 10:00 – 14:00", "Zo: Gesloten"],
                },
              ].map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex gap-5 p-6 rounded-[28px] neumorphic-extruded group">
                  <div className="w-12 h-12 shrink-0 rounded-xl neumorphic-inset flex items-center justify-center group-hover:neumorphic-extruded transition-all">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-body font-bold text-foreground mb-1">{title}</p>
                    {lines.map((l) => (
                      <p key={l} className="font-body text-muted text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map embed placeholder */}
              <div className="p-4 rounded-[32px] neumorphic-extruded overflow-hidden">
                <div className="relative rounded-[24px] overflow-hidden neumorphic-inset-deep" style={{ height: "220px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.2!2d5.4767!3d51.4416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzMwLjAiTiA1wrAyOCczNi4xIkU!5e0!3m2!1snl!2snl!4v1620000000000!5m2!1snl!2snl"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Locatie Al-Abraar Eindhoven"
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display font-bold text-3xl text-foreground mb-8">Stuur een bericht</h2>

              {submitted ? (
                <div className="p-12 rounded-[40px] neumorphic-extruded text-center space-y-4">
                  <CheckCircle size={48} className="text-accent mx-auto" />
                  <h3 className="font-display font-bold text-2xl text-foreground">Bericht verzonden!</h3>
                  <p className="font-body text-muted">
                    Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op, uiterlijk binnen 2 werkdagen.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ naam: "", email: "", onderwerp: "", bericht: "" }); }}
                    className="mt-4 px-8 py-3 rounded-2xl neumorphic-extruded font-body font-bold text-foreground hover:neumorphic-extruded-hover transition-all"
                  >
                    Nieuw bericht
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-[40px] neumorphic-extruded space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body font-bold text-sm text-foreground mb-2">Naam *</label>
                      <div className="rounded-2xl neumorphic-inset p-1">
                        <input
                          type="text"
                          required
                          value={form.naam}
                          onChange={(e) => setForm({ ...form, naam: e.target.value })}
                          placeholder="Uw naam"
                          className="w-full bg-transparent border-none focus:ring-0 outline-none px-4 py-3 font-body text-foreground placeholder:text-muted/50 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body font-bold text-sm text-foreground mb-2">E-mail *</label>
                      <div className="rounded-2xl neumorphic-inset p-1">
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="uw@email.nl"
                          className="w-full bg-transparent border-none focus:ring-0 outline-none px-4 py-3 font-body text-foreground placeholder:text-muted/50 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-body font-bold text-sm text-foreground mb-2">Onderwerp *</label>
                    <div className="rounded-2xl neumorphic-inset p-1">
                      <select
                        required
                        value={form.onderwerp}
                        onChange={(e) => setForm({ ...form, onderwerp: e.target.value })}
                        className="w-full bg-transparent border-none focus:ring-0 outline-none px-4 py-3 font-body text-foreground text-sm appearance-none"
                      >
                        <option value="" disabled>Kies een onderwerp</option>
                        <option value="lid">Lid worden</option>
                        <option value="aanmelding">Kind aanmelden voor lessen</option>
                        <option value="donatie">Donatie / vragen</option>
                        <option value="imam">Imam contacteren</option>
                        <option value="overig">Overig</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-body font-bold text-sm text-foreground mb-2">Bericht *</label>
                    <div className="rounded-2xl neumorphic-inset p-1">
                      <textarea
                        required
                        rows={5}
                        value={form.bericht}
                        onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                        placeholder="Schrijf uw bericht hier..."
                        className="w-full bg-transparent border-none focus:ring-0 outline-none px-4 py-3 font-body text-foreground placeholder:text-muted/50 text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-accent text-white font-body font-bold text-base shadow-lg hover:bg-accent-light transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    <Send size={18} />
                    Bericht Versturen
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="h-24" />
      <Footer />
    </main>
  );
}
