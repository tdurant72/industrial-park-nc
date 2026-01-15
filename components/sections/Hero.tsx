"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PiPlayFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { WordPullUp } from "@/components/ui/word-up";
import NCGTPHeroVideo from "@/components/ncgtp-hero-video";
import MotionButton from "@/components/motion/motion-button";

const Hero = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section id="hero-section" className="flex flex-col gap-4 h-full  pt-[9vh] pb-[4vh] w-full container max-w-7xl mx-auto overflow-hidden">
            
            <div className="flex flex-col md:flex-row justify-center md:items-center gap-2 md:gap-6 lg:h-full md:max-h-[75vh]">
                <div id="copy" className="flex flex-col gap-2 md:gap-4 items-center justify-center md:basis-1/2 lg:basis-2/3 h-full">
                    <div className="flex flex-col p-4 md:py-8 md:px-4 bg-neutral-100/30 backdrop-blur-xs rounded-t-2xl ">
                        <h1 className="text-xs md:text-base text-blue-950 text-shadow-xs text-shadow-blue-400 text-center md:text-left">North Carolina Global TransPark<span className="hidden">North Carolina Global TransPark</span></h1>
                        <h2 className="text-xl md:text-3xl lg:text-4xl text-neutral-800 mb-2 md:mb-6 font-bold text-center md:text-left">Scale Your Manufacturing on the East Coast’s Longest Runway.</h2>
                        <h3 className="text-neutral-800 text-lg md:text-2xl lg:text-3xl text-center md:text-left text-balance">Unlock millions in performance-based incentives at the North Carolina Global TransPark.</h3>
                        <div className="flex md:flex-col lg:flex-row sm:items-center gap-4 mt-8">
                            <div className="flex flex-col items-center md:items-start">
                                <button className="bg-amber-500 text-slate-950 px-3 md:px-6 py-1.5 md:py-2 rounded-full shadow-2xl border border-amber-600 flex items-center gap-4 text-xs md:font-regular lg:font-semibold uppercase tracking-widest hover:bg-amber-400 transition-all duration-300 w-fit md:self-start group text-balance cursor-pointer">
                                    Request an Executive Site Briefing
                                    <div className="h-6 w-px bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors cursor-pointer" />
                                    <FaCalendarAlt className="size-5" />
                                </button>
                                <p className="text-slate-600 text-xs py-2 max-w-[430px] text-balance text-center md:text-left">Includes {currentYear} Infrastructure Master Plan, FTZ Tax Breakdown, a Customized Incentive Breakdown and Site-Specific Utility Map.</p>
                            </div>
                            <a href="/confidential-inquiry" className="bg-slate-900 text-white px-3 md:px-6 py-1.5 md:py-3 rounded-full shadow-2xl border border-slate-800 flex items-center gap-4 text-xs md:font-regular lg:font-semibold uppercase text-balance tracking-widest hover:bg-slate-800 transition-all duration-300 w-fit md:self-start group cursor-pointer">
                                Confidential Site Evaluation
                            </a>
                        </div>
                    </div>
                </div>
                <div id="media" className="flex flex-col min-w-0 min-h-0 md:basis-1/2 lg:basis-1/3 ">
                    <div id="right-grid" className="grid grid-cols-3 grid-rows-3 gap-2 w-full  min-w-0 min-h-0">
                        <div id="video" className="hidden md:block md:col-start-2 col-span-2 row-start-1 row-span-2 content-center justify-items-center h-96 max-h-[450px] width-full overflow-hidden relative rounded-tr-2xl bg-amber-500 drop-shadow-sm drop-shadow-neutral-700">
                        <NCGTPHeroVideo />
                        </div>
                        <div id="graphics" className="col-start-1 col-span-3 row-start-1 row-span-3 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2 bg-[url('/images/ncgtp/runway.webp')] h-96 w-full z-20 rounded-bl-2xl relative">
                            <div className="bg-slate-50/40 h-full w-full absolute top-0 left-0 right-0 bottom-0" />
                            <Image
                                src="/images/ncgtp/grow-ftz.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute top-4 right-6 md:-right-6 drop-shadow-sm drop-shadow-neutral-700"
                                priority
                                width={150}
                                height={100}
                                style={{ height: 100, width: "auto" }}
                            />
                            <Image
                                src="/images/ncgtp/work-employers.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute top-1/2 -translate-y-1/2  left-8 md:left-2 xl:-left-2 drop-shadow-sm drop-shadow-neutral-700"
                                priority
                                width={133}
                                height={100}
                                style={{ height: 100, width: "auto" }}
                            />
                            <Image
                                src="/images/ncgtp/jeremy-stroud.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute  top-2/3 -translate-y-2/3 right-10 xl:right-6 drop-shadow-md drop-shadow-neutral-700"
                                priority
                                width={80}
                                height={100}
                                style={{ height: 100, width: "auto" }}
                            />
                            <MotionButton
                                className="absolute bottom-4 left-4 bg-neutral-500 text-neutral-50 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 hover:text-amber-700 transition-colors duration-200 self-start cursor-pointer"
                            >
                                Watch Video
                                <PiPlayFill className="inline-block mx-2" />
                            </MotionButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:col-span-4 md:row-start-4 content-center h-12 md:h-full w-full justify-center">
                <WordPullUp words="Unlock Millions in Incentives, Without the Red Tape" className="text-xl md:text-[3vw] lg:text-[2vw]" />
            </div>
        </section>
    );
}

export default Hero;