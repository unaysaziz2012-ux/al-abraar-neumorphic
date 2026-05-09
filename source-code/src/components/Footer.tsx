"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const footerNav = [
  { label: "Over Ons", href: "/over-ons" },
  { label: "Gebedstijden", href: "/gebedstijden" },
  { label: "Onderwijs", href: "/onderwijs" },
  { label: "Projecten", href: "/projecten" },
  { label: "Doneren", href: "/doneren" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const copyIBAN = () => {
    navigator.clipboard.writeText("NL42 INGB 0001 2345 67");
  };

  return (
    <footer id="contact" className="pt-24 pb-10 bg-background border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full neumorphic-inset flex items-center justify-center p-1 overflow-hidden">
                <Image src="/Al-Abraar-logo.svg" alt="Al-Abraar Logo" width={36} height={36} className="object-contain" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-foreground">AL-ABRAAR</span>
            </Link>
            <p className="font-body text-muted leading-relaxed text-sm">
              Stichting Alabraar is een religieuze en sociaal-culturele organisatie in Eindhoven die zich inzet voor de moslimgemeenschap.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl neumorphic-extruded flex items-center justify-center text-muted hover:text-accent transition-all hover:neumorphic-extruded-hover active:neumorphic-inset-sm"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-xl neumorphic-extruded flex items-center justify-center text-muted hover:text-accent transition-all hover:neumorphic-extruded-hover active:neumorphic-inset-sm"
              >
                <Facebook size={18} />
              </a>
              <Link
                href="/doneren"
                aria-label="Doneren"
                className="w-11 h-11 rounded-xl neumorphic-extruded flex items-center justify-center text-muted hover:text-accent transition-all hover:neumorphic-extruded-hover active:neumorphic-inset-sm"
              >
                <Heart size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Navigatie</h4>
            <ul className="space-y-3">
              {footerNav.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-muted hover:text-accent transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted">
                <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                <span className="font-body text-sm">Paukenstraat 2,<br />5642 RS Eindhoven</span>
              </li>
              <li className="flex gap-3 text-muted">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:0402811111" className="font-body text-sm hover:text-accent transition-colors">040 281 1111</a>
              </li>
              <li className="flex gap-3 text-muted">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:info@alabraar.nl" className="font-body text-sm hover:text-accent transition-colors">info@alabraar.nl</a>
              </li>
            </ul>
          </div>

          {/* IBAN / Donate */}
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Steun Ons</h4>
            <div className="p-6 rounded-2xl neumorphic-inset bg-background/50 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/ANBI_FC.svg" alt="ANBI" width={28} height={28} />
                <span className="font-body text-xs text-accent font-bold">ANBI Erkend</span>
              </div>
              <p className="text-xs font-body text-muted uppercase tracking-widest font-bold">IBAN Nummer</p>
              <p className="font-display font-extrabold text-base text-foreground">NL42 INGB 0001 2345 67</p>
              <p className="font-body text-xs text-muted">t.n.v. Stichting Alabraar</p>
              <button
                onClick={copyIBAN}
                className="w-full py-2.5 rounded-xl bg-accent text-white font-body font-bold text-sm shadow-md hover:bg-accent-light transition-all"
              >
                Kopieer IBAN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted font-body">
          <p>© {new Date().getFullYear()} Stichting Alabraar. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacybeleid</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Algemene Voorwaarden</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
