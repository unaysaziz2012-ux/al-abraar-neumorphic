import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Moskee Al-Abraar Eindhoven | Welkom bij jouw moskee",
  description: "Welkom bij Moskee Al-Abraar in Eindhoven. Een plek voor gebed, gemeenschap en educatie. Ontdek onze projecten en activiteiten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${plusJakartaSans.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
