"use client";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { BiPlay } from "react-icons/bi";
import Image from "next/image";
const BentoCard = ({
  src,
  img,
  title,
  description,
  snippet,
  isVideo,
  variants,
}: { src: string; img: string; title: string; description: string; snippet?: string; isVideo?: boolean; variants?: Variants }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  function handlePlay() {
    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }
  return (
    <motion.div variants={variants} initial="hidden" animate="visible" className="grid grid-cols-4 grid-rows-4 h-full overflow-hidden border border-slate-800 rounded-3xl bg-slate-900 shadow-2xl hover:border-amber-500/30 transition-colors duration-500 group/card">
      {isPlaying ? (
        <video
          ref={videoRef}
          src={src}
          className="col-span-4 row-span-4 size-full object-cover object-center z-50"
        />
      ) : (
        <>
          {/* <div
            className={`col-start-1 row-start-4 row-span-1 z-50  rounded-tr-[50px] bg-white/50 flex items-end py-2 gap-4 md:gap-7 
              }`}
          >
            
          </div> */}

          <div className="col-span-4 row-span-4 col-start-1 col-end-5 row-start-1 relative">
            <Image
              src={img}
              className="object-cover object-center h-full w-full min-h-[400px]"
              alt={title}
              width={566}
              height={400}
            />
            {/* Premium Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          <div className="col-start-1 col-span-4 row-start-3 row-span-2 relative z-10 flex flex-col justify-end p-6 md:p-8">
            <div className="flex justify-between items-end gap-4 w-full">
              <div className="max-w-[80%]">
                <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-1 italic">
                  {snippet ? `"${snippet}"` : ""}
                </p>
                <h4 className="text-xl md:text-2xl text-white font-bold tracking-tight">{title}</h4>
                <p className="text-slate-300 text-sm md:text-base font-medium">{description}</p>
              </div>
              <div className="pb-1">
                {isVideo && (
                  <button
                    className="group/play z-20 border-amber-500/50 border-2 rounded-full bg-amber-500/10 p-1 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 cursor-pointer"
                    onClick={handlePlay}
                  >
                    <BiPlay className="h-8 md:h-12 w-8 md:w-12 text-amber-500 group-hover/play:text-slate-950 transition-colors" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default BentoCard;