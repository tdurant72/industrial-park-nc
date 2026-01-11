import React from 'react'
import { WordPullUp } from '@/components/ui/word-up'
import FeaturedNewsCard from '@/components/featured-news-card'
const Latest = () => {
    return (
        <section id="latest-news" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
            <div className="container mx-auto px-6 md:w-5xl 2xl:w-7xl relative z-10">
                <div className="mb-20 text-center">
                    <WordPullUp
                        words="Latest News"
                        className="text-slate-950 text-4xl md:text-5xl font-bold text-center"
                    />
                    <p className="text-slate-600 text-xl font-medium mt-6 max-w-2xl mx-auto">
                        Staying ahead of the curve in industrial logistics and aerospace.
                    </p>
                </div>
                <div id='all' className='flex flex-col lg:flex-row gap-8 items-start'>
                    {/* Featured Article - Left Column */}
                    <div className='w-full lg:w-1/2'>
                        <FeaturedNewsCard
                            imgSrc='/images/news/charlotte.jpg'
                            imgAlt='North Carolina Ranks in Top Three States to Do Business'
                            title='North Carolina Ranks in Top Three States to Do Business'
                            link='https://www.cnbc.com/2024/06/17/north-carolina-ranks-in-top-three-states-to-do-business.html'
                            isMain={true}
                        >
                            <div className="space-y-4">
                                <p className="text-lg text-slate-800 leading-relaxed font-bold">
                                    CNBC named North Carolina as second best state to do business and in the top three for the fifth year in a row.
                                </p>
                                <p className="text-base text-slate-700 leading-relaxed">
                                    This recognition comes thanks to our well-trained and diverse workforce, booming economy, and strong business environment. In 2021, the state ranked second; and in both 2022 and 2023 North Carolina ranked first.
                                </p>
                                <blockquote className='font-bold text-amber-700 border-l-4 border-amber-500 pl-4 py-2 italic bg-amber-50/50 rounded-r-lg'>
                                    “Investing in our people makes our continued success possible,” said Governor Roy Cooper.
                                </blockquote>
                            </div>
                        </FeaturedNewsCard>
                    </div>

                    {/* Secondary Stories - 2 Column Grid on Right */}
                    <div id="stories" className='w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16'>
                        <FeaturedNewsCard imgSrc='/images/news/batteries.jpg' imgAlt='Natron Energy' title='Natron Energy: $1.4B Investment' link='https://www.prnewswire.com/news-releases/natron-energy-announces-1-4-billion-investment-in-north-carolina-301842467.html'>
                            <p className="text-sm text-slate-950 font-semibold leading-relaxed">Establishing a sodium-ion battery giga-factory at the Kingsboro CSX Select Megasite, driving regional growth.</p>
                        </FeaturedNewsCard>
                        <FeaturedNewsCard imgSrc='/images/news/aircraft.jpg' imgAlt='Military Aircraft' title='Military Maintenance Facility' link='https://www.witn.com/2024/06/11/major-investment-officials-break-ground-military-aircraft-maintenance-facility-nc-global-transpark/'>
                            <p className="text-sm text-slate-950 font-semibold leading-relaxed">Officials break ground on a major Navy and Marine Corps maintenance facility at the TransPark.</p>
                        </FeaturedNewsCard>
                        <FeaturedNewsCard imgSrc='/images/news/airport.jpg' imgAlt='Pilot Training' title='$30M Pilot Training Center' link='https://www.prnewswire.com/news-releases/north-carolina-and-nc-global-transpark-invest-30-million-for-pilot-training-center-301837906.html'>
                            <p className="text-sm text-slate-950 font-semibold leading-relaxed">Securing a cutting-edge pilot training center to advance North Carolina&apos;s aviation leadership.</p>
                        </FeaturedNewsCard>
                        <FeaturedNewsCard imgSrc='/images/news/students.jpg' imgAlt='RIME 2024' title='NCGTP hosts RIME 2024' link='https://www.prnewswire.com/news-releases/global-transpark-hosts-rime-2024-connecting-students-with-industry-301838907.html'>
                            <p className="text-sm text-slate-950 font-semibold leading-relaxed">Connecting students with industry leaders to foster the next generation of industrial workforce.</p>
                        </FeaturedNewsCard>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Latest