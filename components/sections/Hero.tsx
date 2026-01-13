import Image from "next/image";
import { PiPlayFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { WordPullUp } from "@/components/ui/word-up";
import NCGTPHeroVideo from "@/components/ncgtp-hero-video";
import MotionButton from "@/components/motion/motion-button";
const Hero = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section id="hero-section" className="flex flex-col gap-4 h-full md:h-[90vh] pt-[8vh] pb-0 w-full md:w-5xl 2xl:w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 h-full">
                <div id="left" className="flex flex-col gap-4 items-center justify-center  md:basis-1/2 h-full">

                    <div className="flex flex-col p-4 md:p-8 bg-neutral-100/30 backdrop-blur-xs rounded-t-2xl ">
                        <h1 className="text-xs md:text-base text-blue-950 text-shadow-xs text-shadow-blue-400 text-left">North Carolina Global TransPark<span className="hidden">North Carolina Global TransPark</span></h1>
                        <h2 className="text-3xl md:text-4xl text-neutral-800 mb-6 font-bold">Scale Your Manufacturing on the East Coast’s Longest Runway.</h2>
                        <h3 className="text-neutral-800 text-2xl md:text-3xl text-balance">Unlock millions in performance-based incentives at the North Carolina Global TransPark.</h3>
                        <button className="mt-8 bg-amber-500 text-slate-950 px-8 py-4 rounded-full shadow-2xl border border-amber-600 flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:bg-amber-400 transition-all duration-300 w-fit self-start group cursor-pointer">
                            Request an Executive Site Briefing
                            <div className="h-6 w-px bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors cursor-pointer" />
                            <FaCalendarAlt className="size-5" />
                        </button>
                        <p className="text-slate-600 text-xs py-2 max-w-[430px] text-balance text-center">Includes {currentYear} Infrastructure Master Plan, FTZ Tax Breakdown, a Customized Incentive Breakdown and Site-Specific Utility Map.</p>
                    </div>
                </div>
                <div id="right" className="flex flex-col md:basis-1/2">
                    <div className="grid md:grid md:grid-cols-4 md:grid-rows-3 gap-2 h-full w-full">
                        <NCGTPHeroVideo />
                        <div className="md:col-start-1 lg:col-start-2 col-end-4 row-start-2 row-end-4 bg-blue-500 h-[450px] width-full z-20 rounded-bl-2xl relative">
                            <Image
                                src="/images/ncgtp/runway.webp"
                                alt="Runway at North Carolina Global TransPark"
                                priority
                                width={450}
                                height={450}
                                style={{ height: 450, width: "auto" }}
                                className="object-cover rounded-bl-2xl drop-shadow-sm drop-shadow-neutral-700"
                            />

                            <div className="bg-slate-50/40 h-full w-full absolute top-0 left-0 right-0 bottom-0" />
                            <Image
                                src="/images/ncgtp/grow-ftz.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute top-4 right-6 md:-right-6 drop-shadow-sm drop-shadow-neutral-700"
                                priority
                                width={150}
                                height={56}
                                style={{ height: 100, width: "auto" }}
                            />
                            <Image
                                src="/images/ncgtp/work-employers.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute top-1/2 -translate-y-1/2  left-8 md:-left-8 drop-shadow-sm drop-shadow-neutral-700"
                                priority
                                width={150}
                                height={56}
                                style={{ height: 100, width: "auto" }}
                            />
                            <Image
                                src="/images/ncgtp/jeremy-stroud.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute  top-2/3 -translate-y-2/3 right-10 drop-shadow-md drop-shadow-neutral-700"
                                priority
                                width={56}
                                height={150}
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