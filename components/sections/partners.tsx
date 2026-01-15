import { PartnersClient } from "@/components/PartnersClient";
import { WordPullUp } from "@/components/ui/word-up";

export function Partners() {
    return (
        <section className="w-full bg-slate-950 py-32">
            <div className="container max-w-7xl mx-auto px-6 ">
                <div className="mb-16 text-center">
                    <WordPullUp className="text-4xl md:text-5xl font-bold text-white mb-6 text-center" words="Some of our partners" />
                    <p className="text-slate-400 text-xl md:text-2xl max-w-3xl leading-relaxed mx-auto">
                        We are proud to collaborate with a diverse range of partners who share our commitment to <span className="text-amber-500 font-semibold italic">excellence and innovation</span>. Together, we drive success and create lasting value.
                    </p>
                </div>
                <PartnersClient />
            </div>
        </section>
    );
}