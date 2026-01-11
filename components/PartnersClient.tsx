"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
export interface PartnerGalleryItem {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface PartnerGalleryProps {
    title?: string;
    description?: string;
    partnersList: PartnerGalleryItem[];
}
const partnersList = [
    {
        src: "/images/partners/cratetech-hero.webp",
        name: "CrateTech",
        description: "A full service, custom crating and packaging supply company.",
        long: "CrateTech is a full-service, custom crating and packaging supply company dedicated to providing innovative and reliable packaging solutions for a wide range of industries. With a focus on quality and customer satisfaction, CrateTech offers tailored crating services that ensure the safe and secure transportation of valuable and sensitive items. Their expertise includes custom wood, metal, and composite crates designed to meet specific shipping requirements. Committed to sustainability and efficiency, CrateTech combines advanced materials and skilled craftsmanship to deliver packaging solutions that protect products while minimizing environmental impact.",
        url: "https://cratetech.com/",
        logo: "/images/partners/cratetech-logo.png",
        className: "",
    },
    {
        src: "/images/partners/mje-hero.webp",
        name: "MJE Telestructure",
        description: "A telecommunications equipment distribution company",
        long: "MJE Telestructure is a leading telecommunications equipment distribution company that specializes in providing high-quality products and services to telecom operators, contractors, and service providers. With a comprehensive inventory of cutting-edge telecommunications equipment, including fiber optic solutions, wireless infrastructure, and network components, MJE Telestructure is committed to delivering reliable and innovative solutions that meet the evolving needs of the telecommunications industry. Their team of experts works closely with clients to ensure seamless integration and optimal performance of their telecommunications networks.",
        url: "https://mje-telestructure.com",
        logo: "/images/partners/mje-logo.png",
        className: "",
    },
    {
        src: "/images/partners/db-hero.webp",
        name: "DB Schenker",
        description: "Integrated transportation and logistics solutions",
        long: "DB Schenker is a global leader in integrated transportation and logistics solutions, offering a comprehensive range of services that include land, air, and sea freight, contract logistics, and supply chain management. With a vast network spanning over 130 countries, DB Schenker provides tailored solutions to meet the unique needs of various industries, ensuring efficient and reliable delivery of goods worldwide. Their expertise in handling complex logistics challenges, combined with advanced technology and sustainable practices, makes them a trusted partner for businesses seeking to optimize their supply chains and enhance operational efficiency.",
        url: "https://www.dbschenker.com/usa/",
        logo: "/images/partners/dbschenker-logo.png",
        className: "",
    },
    {
        src: "/images/partners/MAC-hero.webp",
        name: "Mountain Air Cargo, Inc.",
        description: "Express cargo delivery and fleet maintenance",
        long: "Mountain Air Cargo, Inc. (MAC) is a leading provider of express cargo delivery services, specializing in time-sensitive shipments across North America. With a robust fleet of aircraft and a commitment to reliability, MAC offers tailored logistics solutions for businesses of all sizes. Their services include next-flight-out options, scheduled deliveries, and specialized handling for sensitive cargo. In addition to their air freight capabilities, MAC provides comprehensive fleet maintenance services, ensuring that their aircraft operate at peak performance and safety standards. Their dedication to customer service and operational excellence has made them a trusted partner in the logistics industry.",
        url: "https://mtaircargo.com/",
        logo: "/images/partners/mac-logo.png",

        className: "",
    },
    {
        src: "/images/partners/ncdps-hero.webp",
        name: "North Carolina Emergency Management",
        description: "Disaster response, recovery and mitigation assistance",
        long: "the NC Department of Public Safety, is responsible for preparing for, responding to, recovering from, and mitigating the impacts of natural and man-made disasters across the state. Its mission includes coordinating statewide emergency response efforts, managing disaster recovery programs, supporting local governments with planning and training, and administering grants for hazard mitigation and infrastructure resilience. NCEM also oversees programs related to hazardous materials, disaster case management, and private infrastructure repair, ensuring communities are equipped to handle emergencies and recover effectively.",
        url: "https://www.ncdps.gov/our-organization/emergency-management",
        logo: "/images/partners/NCDPS-logo.png",

        className: "",
    },
    {
        name: "Fly Exclusive",
        description: "On demand charter service",
        long: "Fly Exclusive is a premier on-demand charter service that offers personalized and flexible private aviation solutions for individuals and businesses. With a focus on safety, comfort, and convenience, Fly Exclusive provides access to a diverse fleet of aircraft, ranging from light jets to large-cabin planes, catering to various travel needs. Their services include tailored flight itineraries, luxury amenities, and dedicated customer support, ensuring a seamless travel experience. Whether for business trips, leisure travel, or special occasions, Fly Exclusive delivers exceptional service and unparalleled access to private air travel.",
        url: "https://www.flyexclusive.com/",
        logo: "/images/partners/flyexcusive-logo.png",
        src: "/images/partners/fly-hero.webp",

        className: "",
    },
    {
        name: "Spirit AeroSystems",
        description: "Aerospace manufacturing and engineering services",
        long: "Spirit AeroSystems is a leading aerospace manufacturer and engineering services provider, specializing in the design and production of aerostructures for commercial and defense aircraft. With a global presence and a commitment to innovation, Spirit AeroSystems delivers high-quality components such as fuselages, wings, and propulsion systems to major aircraft manufacturers worldwide. Their expertise in advanced materials, manufacturing processes, and engineering solutions enables them to meet the evolving demands of the aerospace industry. Spirit AeroSystems is dedicated to driving efficiency, performance, and sustainability in aviation through cutting-edge technology and collaborative partnerships.",
        url: "https://www.spiritaero.com/",
        logo: "/images/partners/spirit-logo.png",
        src: "/images/partners/spirit-hero.webp",
    },
    {
        name: "Lenoir Community College",
        description: "Workforce development and technical training programs",
        long: "Lenoir Community College offers comprehensive workforce development and technical training programs designed to equip students with the skills needed for successful careers. With a focus on hands-on learning and industry partnerships, the college provides a range of certificate and degree programs in fields such as manufacturing, healthcare, information technology, and more. Lenoir Community College is committed to supporting local economic growth by preparing a skilled workforce that meets the needs of employers and communities.",
        url: "https://www.lenoircc.edu/",
        logo: "/images/partners/lcc-logo.png",
        src: "/images/partners/lenoir-hero.webp",
    },
    {
        name: "North Carolina Forest Service",
        description: "Forest management and conservation services",
        long: "The North Carolina Forest Service is dedicated to the management, conservation, and protection of the state's forest resources. Through a variety of programs and services, the agency supports sustainable forestry practices, wildfire prevention and suppression, and habitat conservation. The Forest Service works closely with landowners, communities, and other stakeholders to promote healthy forests that provide economic, environmental, and recreational benefits for current and future generations.",
        url: "https://www.ncforestservice.gov/",
        logo: "/images/partners/ncfs-logo.png",
        src: "/images/partners/ncfs-hero.webp",
    }
];

const PartnerDetails = ({
    partner,
    onClose,
}: {
    partner: (typeof partnersList)[0];
    onClose: () => void;
}) => {
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full  md:w-2/5 bg-white shadow-lg p-6 z-50"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 p-4"
            >
                ×
            </button>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">{partner.name}</h2>
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={500}
                    height={300}
                    className="w-full rounded-lg mb-6 object-contain h-60"
                />
                <p className="text-gray-600 mb-4">{partner.description}</p>

                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Partner Details</h3>
                    <p className="text-gray-600">
                        {partner.long}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <h4>Partner Website: <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{partner.name}</a></h4>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export function PartnersClient() {
    const [selectedPartner, setSelectedPartner] = useState<
        (typeof partnersList)[0] | null
    >(null);
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="w-full h-full flex flex-col items-center justify-center overflow-hidden py-2">
                <div className="flex shrink-0 gap-4 py-8 w-full justify-center">
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                            carouselApi?.scrollPrev();
                        }}
                        disabled={!canScrollPrev}
                        className="rounded-full border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-white disabled:opacity-30 p-6"
                    >
                        <ArrowLeft className="size-6" />
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                            carouselApi?.scrollNext();
                        }}
                        disabled={!canScrollNext}
                        className="rounded-full border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-white disabled:opacity-30 p-6"
                    >
                        <ArrowRight className="size-6" />
                    </Button>
                </div>
                <div className="w-full">
                    <Carousel
                        setApi={setCarouselApi}
                        opts={{
                            align: "center",
                            breakpoints: {
                                "(max-width: 768px)": {
                                    dragFree: true,
                                },
                            },
                        }}
                    >
                        <CarouselContent className="ml-0">
                            {partnersList.map((item) => (
                                <CarouselItem
                                    key={item.name}
                                    className="max-w-[320px] pl-5 lg:max-w-[400px]"
                                >
                                    <div className="group rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl transition-all duration-300 hover:border-amber-500/30">
                                        <div className="group relative h-full min-h-[450px] overflow-hidden">
                                            <img
                                                src={item.src}
                                                alt={item.name}
                                                className="absolute h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Gradient Overlay Matching BentoCard */}
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-8">
                                                <div className="mb-2 text-2xl font-bold text-white capitalize">
                                                    {item.name}
                                                </div>
                                                <div className="text-slate-300 mb-8 line-clamp-2 text-base">
                                                    {item.description}
                                                </div>
                                                <button className="flex items-center text-sm font-bold rounded-xl px-5 py-3 bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all cursor-pointer group/btn" onClick={() => setSelectedPartner(item)}>
                                                    Explore Partnership{" "}
                                                    <ArrowRight className="ml-2 size-5 transition-transform group-hover/btn:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </motion.div>
            <AnimatePresence>
                {selectedPartner && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
                            onClick={() => setSelectedPartner(null)}
                        />
                        <PartnerDetails
                            partner={selectedPartner}
                            onClose={() => setSelectedPartner(null)}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
}