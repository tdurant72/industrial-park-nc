import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
export interface FeaturedNewsCardProps {
    imgSrc?: string;
    imgAlt?: string;
    title?: string;
    children?: React.ReactNode;
    className?: string;
    link?: string;
    isMain?: boolean;
}
const FeaturedNewsCard = ({ imgSrc, imgAlt, title, children, link, isMain = false, className }: FeaturedNewsCardProps) => {
    return (
        <div className={cn("relative flex flex-col items-end mt-8 bg-white drop-shadow-xl shadow-xl rounded-2xl w-full h-full", className)}>
            <div
                className={cn("relative mx-4 -mt-8 overflow-hidden text-white shadow-lg rounded-2xl bg-slate-950",
                    isMain ? "h-64 w-[95%] mx-auto" : "h-32 w-32"
                )}>
                <Image
                    src={imgSrc || "/images/placeholder.jpg"}
                    alt={imgAlt || "News image"}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-8 w-full text-left">
                <h5 className="block mb-4 text-2xl font-bold tracking-tight text-slate-900 antialiased">
                    {title}
                </h5>
                <div className="text-slate-700">
                    {children}
                </div>
            </div>
            <div className="p-8 pt-0 w-full text-left mt-auto">
                <a href={link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-bold text-center uppercase text-sm py-3.5 px-8 rounded-xl transition-all duration-300 bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40">
                    Read Article
                </a>
            </div>
        </div>
    );
}

export default FeaturedNewsCard;