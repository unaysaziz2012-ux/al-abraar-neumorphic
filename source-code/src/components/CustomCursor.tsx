"use client";

import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor-container");
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      // Use CSS Variables for high-performance updates
      cursor.style.setProperty("--x", `${e.clientX}px`);
      cursor.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      id="custom-cursor-container"
      className="fixed inset-0 pointer-events-none z-[9999] [--x:-100px] [--y:-100px]"
    >
      <div
        className="absolute w-8 h-8 rounded-full border-2 border-accent/30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{
          transform: "translate3d(var(--x), var(--y), 0) scale(var(--cursor-scale, 1))",
        }}
      />
      <div
        className="absolute w-1.5 h-1.5 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: "translate3d(var(--x), var(--y), 0)",
        }}
      />
      <style jsx global>{`
        body:hover button,
        body:hover a,
        body:hover .neumorphic-extruded,
        body:hover .neumorphic-inset {
          --cursor-scale: 2;
        }
      `}</style>
    </div>
  );
}
