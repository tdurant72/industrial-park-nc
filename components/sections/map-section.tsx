"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, MapControls, MapMarker, MarkerContent, MarkerLabel } from "@/components/ui/map";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { properties } from "@/lib/properties";
import { WordPullUp } from "@/components/ui/word-up";

import { IndustrialProperty } from "@/lib/properties";

interface PropertyDetailsDrawerProps {
    property: IndustrialProperty;
    onClose: () => void;
}

const PropertyDetailsDrawer: React.FC<PropertyDetailsDrawerProps> = ({ property, onClose }) => {
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-2/5 bg-white shadow-lg p-6 z-50 overflow-y-auto"
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-4 text-2xl">×</button>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">{property.title}</h2>
                {property.photos && property.photos.length > 0 && (
                    <div className="mb-6">
                        <Carousel className="w-[90%] mx-auto">
                            <CarouselContent>
                                {property.photos.map((photo: string, idx: number) => (
                                    <CarouselItem key={idx} className="flex items-center justify-center">
                                        <Image
                                            src={photo}
                                            alt={`${property.title} photo ${idx + 1}`}
                                            width={500}
                                            height={300}
                                            className="w-full rounded-lg object-cover h-60"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                )}
                <div className="mb-2 text-gray-600">
                    <span className="font-semibold">{property.acreage} acres</span> | <span className="font-semibold">{property.type}</span>
                </div>
                <div className="mb-4 text-gray-500 space-y-2">
                    <div><span className="font-semibold">Zoning:</span> {property.zoning}</div>
                    <div><span className="font-semibold">Shovel Ready:</span> {property.shovelReadyStatus}</div>
                    <div><span className="font-semibold">Runway Access:</span> {property.logistics.runwayAccess}</div>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-800 border-b pb-1 mb-2">Key Utilities</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                        <div><span className="font-semibold">Power:</span> {property.utilities.power}</div>
                        <div><span className="font-semibold">Water:</span> {property.utilities.water}</div>
                        <div><span className="font-semibold">Fiber:</span> {property.utilities.fiber}</div>
                        <div><span className="font-semibold">Sewer:</span> {property.utilities.sewer}</div>
                    </div>
                </div>

                <div className="mb-6 text-gray-700 text-base leading-relaxed">
                    {property.description}
                </div>

                <div className="flex gap-2 mb-8">
                    <Button size="sm" asChild>
                        <a href={property.dossierUrl} target="_blank" rel="noopener noreferrer">Download PDF</a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <a href={`mailto:${property.contact.email}?subject=Inquiry about ${property.title}`}>Contact Broker</a>
                    </Button>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                    <p className="font-bold text-slate-800 mb-1">Contact: {property.contact.name}</p>
                    <p className="text-gray-500">{property.contact.company}</p>
                    {property.contact.cell && <p className="text-gray-500">Cell: {property.contact.cell}</p>}
                    <p className="text-blue-600 truncate">{property.contact.email}</p>
                </div>
            </div>
        </motion.div>
    );
};

const MapSection: React.FC = () => {
    const [selectedProperty, setSelectedProperty] = useState<IndustrialProperty | null>(null);

    return (
        <section id='site-selection' className="flex flex-col gap-4 items-center overflow-hidden  p-0 py-[8vh] bg-radial-[at_25%_25%] from-slate-50 to-slate-200 to-75% h-full md:h-screen">
            <WordPullUp words='Site Selection' className='text-5xl text-slate-800 py-8' />
            <div id="copy"
                className="flex flex-col gap-4 md:w-5xl 2xl:w-7xl mx-auto p-0 ">
                <p className='text-2xl text-neutral-800 pb-10'>At NCGTP, site selection isn&apos;t a guessing game it&apos;s a launchpad. Our industrial sites and buildings are fully equipped with the infrastructure you need to hit the ground running. From precision utility planning to high-speed telecommunications, every detail is engineered for operational excellence. </p>
                {/* <Button variant="outline" className="w-max text-slate-800 border-slate-800 hover:bg-slate-100" onClick={()=>handleExploreClick()}>Explore Available Sites</Button> */}
                {/* <a className="px-4 py-3 bg-blue-900 text-slate-50 text-lg hover:bg-slate-50 hover:text-blue-900 border-2 border-blue-900 transition-colors duration-300 rounded-2xl w-fit" href="https://properties.zoomprospector.com/NCGLOBALTRANSPARK?page=1&s%5bSortDirection%5d=true&s%5bradiusLat%5d=0&s%5bSizeUnits%5d=1&s%5bradius%5d=0&s%5bradiusLng%5d=0&s%5bSortBy%5d=featured&s%5bAttributes%5d=1324%3A%5B%3D%5D1">Explore Available Sites</a> */}
            </div>
            <Card className="h-[75vh] md:w-5xl 2xl:w-7xl mx-auto p-0 overflow-hidden">
                {/* 35.32561712246613, -77.61504924333079*/}
                <Map center={[-77.61504924333079, 35.32561712246613]} zoom={13}>
                    {properties.map((place: IndustrialProperty) => (
                        <MapMarker
                            key={place.id}
                            longitude={place.coordinates.lng}
                            latitude={place.coordinates.lat}
                            onClick={() => setSelectedProperty(place)}
                        >
                            <MarkerContent>
                                <div className="size-5 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <Image
                                        src="/images/ncgtp/gtp-marker-icon.svg"
                                        alt={place.title}
                                        width={32}
                                        height={40}
                                        className="object-contain "
                                    />
                                </div>
                                <MarkerLabel position="bottom">{place.title}</MarkerLabel>
                            </MarkerContent>
                        </MapMarker>
                    ))}
                    <MapControls
                        position="bottom-right"
                        showZoom
                        showCompass
                        showLocate
                        showFullscreen
                    />
                </Map>
                <AnimatePresence>
                    {selectedProperty && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-slate-50/75 backdrop-blur-xs z-40"
                                onClick={() => setSelectedProperty(null)}
                            />
                            <PropertyDetailsDrawer
                                property={selectedProperty}
                                onClose={() => setSelectedProperty(null)}
                            />
                        </>
                    )}
                </AnimatePresence>
            </Card>
        </section>
    );
};

export default MapSection;