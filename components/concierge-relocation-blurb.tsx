import React from "react";
import { PiHandshakeFill } from "react-icons/pi";
import { WordPullUp } from "./ui/word-up";
const ConciergeRelocationBlurb = () => (
  <section className="w-full h-full md:h-[50vh] bg-slate-950 py-24 px-4 md:px-0 flex justify-center items-center">
    <div className="flex flex-col items-center gap-6 md:gap-10 2xl:w-4/5 mx-auto">
      <WordPullUp className="text-3xl md:text-5xl font-bold text-white mb-2" words="Concierge Relocation Service" />

      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-6 md:gap-10 mx-auto">
        <div className="shrink-0 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 rounded-full w-24 h-24 shadow-lg shadow-amber-500/5">
          <PiHandshakeFill className="text-amber-500 text-5xl" />
        </div>
        <p className="text-xl md:text-2xl text-slate-300 text-balance leading-relaxed">
          Experience <span className="text-amber-500 font-semibold italic">white glove support</span> designed for executives and decision makers. Our dedicated relocation team handles every detail from site selection and permitting to workforce onboarding, ensuring a seamless transition to NCGTP.
        </p>
      </div>
    </div>
  </section>
);

export default ConciergeRelocationBlurb;
