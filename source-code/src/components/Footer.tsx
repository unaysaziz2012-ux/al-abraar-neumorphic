"use client";

import React from "react";
import Link from "next/link";
import { Heart, Info, Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-48 pb-10 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-display font-extrabold text-2xl tracking-tight text-foreground">ALABRAAR</h3>
            <p className="font-body text-muted leading-relaxed">
              Stichting Alabraar is een religieuze en sociaal-culturele organisatie in Eindhoven die zich inzet voor de moslimgemeenschap.
            </p>
            <div className="flex gap-4">
              {[Heart, Info, Globe].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-xl neumorphic-extruded flex items-center justify-center text-muted hover:text-accent hover:neumorphic-extruded-hover active:neumorphic-inset-sm transition-all">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xl text-foreground mb-6">Navigatie</h4>
            <ul className="space-y-4">
              {["Over ons", "Gebedstijden", "Onderwijs", "Projecten", "Doneren"].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-body text-muted hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-xl text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 text-muted">
                <MapPin className="text-accent shrink-0" size={20} />
                <span className="font-body">Paukenstraat 2,<br />5642 RS Eindhoven</span>
              </li>
              <li className="flex gap-4 text-muted">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="font-body">040 281 1111</span>
              </li>
              <li className="flex gap-4 text-muted">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="font-body">info@alabraar.nl</span>
              </li>
            </ul>
          </div>

          {/* IBAN */}
          <div>
            <h4 className="font-display font-bold text-xl text-foreground mb-6">Steun ons</h4>
            <div className="p-6 rounded-2xl neumorphic-inset bg-background/50">
              <p className="text-xs font-body text-muted uppercase tracking-widest mb-2 font-bold">IBAN Nummer</p>
              <p className="font-display font-extrabold text-lg text-foreground mb-4">NL42 INGB 0001 2345 67</p>
              <button className="w-full py-3 rounded-xl bg-accent text-white font-body font-bold text-sm shadow-md hover:bg-accent-light transition-all">
                Kopieer IBAN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted font-body">
          <p>© {new Date().getFullYear()} Stichting Alabraar. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacybeleid</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
