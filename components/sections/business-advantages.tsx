import BentoCard from "@/components/bento-card";
import TestimonialCard from "@/components/testimonial-card";
import { CheckCircle2 } from "lucide-react";

const BusinessAdvantages = () => {
    return (
        <section id="business-advantages" className="w-full -mx-6 md:mx-0 py-24 bg-slate-950 text-white">
            <div className="mx-auto px-6 md:w-5xl 2xl:w-7xl">

                {/* ROW 1: THE LOGIC RIBBON */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-amber-500/50 transition-colors group">
                        <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2 italic">Strategic Advantage</p>
                        <h3 className="text-4xl font-bold mb-2">0% Tax</h3>
                        <p className="text-slate-200 text-sm">North Carolina corporate tax phase-out through 2030 vision.</p>
                        <div className="mt-4 flex gap-2">
                            <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded border border-amber-500/20 leading-none">2030 VISION</span>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-amber-500/50 transition-colors">
                        <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2 italic">Market Validation</p>
                        <h3 className="text-4xl font-bold mb-2">#1 State</h3>
                        <p className="text-slate-200 text-sm">Recognized as the top state for business climate and growth.</p>
                        <div className="mt-4 flex gap-2">
                            <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded border border-amber-500/20 leading-none">CBRE & FORBES</span>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-amber-500/50 transition-colors">
                        <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2 italic">Operations Readiness</p>
                        <h3 className="text-4xl font-bold mb-2">5.2M</h3>
                        <p className="text-slate-200 text-sm">Skilled labor force ready for advanced manufacturing.</p>
                        <div className="mt-4 flex gap-2">
                            <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded border border-amber-500/20 leading-none">GLOBAL TALENT</span>
                        </div>
                    </div>
                </div>

                {/* ROW 2: EXECUTIVE SUMMARY */}
                <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
                    <div className="lg:basis-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Hear from <span className="text-amber-500">Industry Leaders</span>
                        </h2>
                        <p className="text-xl text-slate-300 font-medium mb-8">
                            How NCGTP delivers 30% logistics efficiency and millions in annual tax savings.
                        </p>
                    </div>
                    <div className="lg:basis-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                            "Strategic 11,500 ft runway access",
                            "Tier 1 highest priority incentives",
                            "Turnkey shovel-ready development",
                            "Direct dual-feed power reliability"
                        ].map((bullet) => (
                            <div key={bullet} className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="text-amber-500 size-5 shrink-0" />
                                <span className="text-base font-medium">{bullet}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ROW 3: SOCIAL PROOF GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard description="Jens H. Lund Testimonial">
                        <BentoCard
                            src="/videos/ncgtp-hero.mp4"
                            img="/images/founders/Jens-Lund.webp"
                            title="Jens H. Lund"
                            description="CEO of DSV"
                            snippet="Saved $2M in year one"
                            isVideo
                        />
                    </TestimonialCard>

                    <TestimonialCard description="Jim Segrave Testimonial">
                        <BentoCard
                            src="/videos/ncgtp-hero.mp4"
                            img="/images/founders/Jim-Segrave.webp"
                            title="Jim Segrave"
                            description="CEO of Fly Exclusive"
                            snippet="Reduced logistics time by 30%"
                            isVideo
                        />
                    </TestimonialCard>

                    <TestimonialCard description="Patrick Shanahan Testimonial">
                        <BentoCard
                            src="/videos/ncgtp-hero.mp4"
                            img="/images/founders/Patrick-Shanahan.webp"
                            title="Patrick Shanahan"
                            description="CEO of Spirit AeroSystems"
                            snippet="150% workforce growth"
                            isVideo
                        />
                    </TestimonialCard>
                </div>
            </div>
        </section>
    );
}

export default BusinessAdvantages;