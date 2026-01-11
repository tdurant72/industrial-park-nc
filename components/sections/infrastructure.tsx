import { WordPullUp } from "@/components/ui/word-up";
import Image from "next/image";
import IncentiveCardSection from "@/components/incentive-card-section";

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:w-5xl 2xl:w-7xl">
        <div className="flex flex-col gap-4 mb-20 px-6 md:px-0 text-center">
          <WordPullUp words="Exclusive Incentives" className="text-4xl md:text-5xl mt-4 text-slate-950 font-bold text-center" />
          <h2 className="hidden">Exclusive Incentives for Relocating Businesses</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col content-center w-full md:w-1/4">
            <h3 className="text-3xl/8 font-semibold text-slate-900 mb-2">Unlock Industry-Leading Financial Advantages</h3>
            <h4 className="text-xl text-gray-700 mt-2 font-normal">
              NCGTP partners enjoy exclusive, performance-based incentives designed to maximize ROI and accelerate growth. These benefits are available only to businesses relocating or expanding at the Global TransPark.
            </h4>
          </div>
          <div className="flex w-full md:w-3/4 content-center h-full overflow-hidden md:pb-4">
            <Image
              width={800}
              height={600}
              src="/images/ncgtp/composite-center.webp"
              alt="infrastructure image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
        </div>
        <IncentiveCardSection />
        <div className="flex justify-center pt-[1vw]">
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-amber-600 transition-colors duration-200">
            See How Much You Qualify For
          </button>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;