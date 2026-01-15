"use client";
import React, { useEffect, useState } from "react";
// Component to display the current Tailwind breakpoint
export function TailwindBreakpointIndicator() {
  const breakpoint = useTailwindBreakpoint();
  function tws(): string {
  if (typeof window === "undefined") return "base";
  const width = window.innerWidth;
  if (width >= 1536) return "2xl";
  if (width >= 1280) return "xl";
  if (width >= 1024) return "lg";
  if (width >= 768) return "md";
  if (width >= 640) return "sm";
  return "base";
}
  function useTailwindBreakpoint(): string {
    const [breakpoint, setBreakpoint] = useState(tws());
    useEffect(() => {
      const handleResize = () => setBreakpoint(tws());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return breakpoint;
  }
  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 9999,
        background: "#fff",
        padding: "4px 12px",
        borderRadius: "6px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      Tailwind Breakpoint: <b>{breakpoint}</b>
    </div>
  );
}
