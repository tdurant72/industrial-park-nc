"use client";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Mail, Phone, Calendar } from "lucide-react";

const StickyExpertButton = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!showSticky) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="minimized"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="bg-amber-500 text-slate-950 px-6 py-4 rounded-full shadow-2xl border border-amber-600 flex items-center gap-3 group hover:bg-amber-400 transition-colors cursor-pointer"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Request Briefing</span>
            <div className="h-6 w-px bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />
            <span className="text-sm font-semibold">Expand</span>
            <Calendar className="size-5" />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ scale: 0.9, opacity: 0, y: 50, transformOrigin: "bottom right" }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            className="bg-slate-950 border border-slate-50 w-[320px] rounded-4xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 pb-0 flex justify-between items-center">
              <h3 className="text-amber-500 font-extrabold uppercase tracking-[0.2em] text-sm text-balance">Request An Executive Briefing</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Expert Card */}
            <div className="p-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 mb-6">
                <div className="flex gap-4 items-center">
                  <div className="relative size-16 rounded-2xl overflow-hidden border-2 border-amber-500/30">
                    <Image
                      src="/images/ncgtp/jeremy-stroud.webp"
                      alt="Jeremy Stroud"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Jeremy Stroud</h4>
                    <p className="text-slate-400 text-xs">Business Development Specialist</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  className="w-full bg-cyan-400/20 text-cyan-50 border border-cyan-400/30 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-cyan-400 hover:text-slate-950 transition-all shadow-lg  flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <FaCalendarAlt className="size-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  Schedule a Meeting
                </button>
                <button
                  className="w-full bg-slate-900 text-slate-300 border border-slate-800 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                >
                  <Mail className="size-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  Contact By Email
                </button>
                <button
                  className="w-full bg-slate-900 text-slate-300 border border-slate-800 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                >
                  <Phone className="size-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  Contact By Phone
                </button>
              </div>
            </div>

            {/* Minimize Footer */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-slate-900/30 border-t border-slate-800/50 text-slate-500 hover:text-slate-300 transition-colors text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4"
            >
              Minimize
              <div className="h-px w-8 bg-slate-800" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StickyExpertButton;
