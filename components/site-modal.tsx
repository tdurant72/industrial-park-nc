"use client"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from "framer-motion"
import { X } from "lucide-react"


import { IndustrialProperty } from "@/lib/properties"

interface ModalProps {
    siteData: IndustrialProperty;
    onClose: () => void;
}
const variants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        transition: { type: "spring", stiffness: 50, damping: 300 },
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        // transition: { type: "spring", stiffness: 100, damping: 300 },
    }),
};
const Modal = ({ siteData, onClose }: ModalProps) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

    const nextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % (siteData.photos.length || 1))
    }

    const prevPhoto = () => {
        setCurrentPhotoIndex(
            (prevIndex) =>
                (prevIndex - 1 + (siteData.photos.length || 1)) % (siteData.photos.length || 1),
        )
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-100/50 backdrop-blur-md  flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-[#2563eb]">{siteData.title}</h2>
                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{siteData.type} — {siteData.status}</span>
                        </div>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer p-2">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="relative h-[300px]">
                                <AnimatePresence initial={false}>
                                    <motion.img
                                        src={siteData.photos[currentPhotoIndex] || "/placeholder.svg"}
                                        key={currentPhotoIndex}
                                        alt={`Site photo ${currentPhotoIndex + 1}`}
                                        className="absolute inset-0 w-full h-[300px] object-cover rounded-xl shadow-inner"
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                    />
                                </AnimatePresence>
                                {siteData.photos.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevPhoto}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white cursor-pointer z-20"
                                        >
                                            &lt;
                                        </button>
                                        <button
                                            onClick={nextPhoto}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white cursor-pointer z-20"
                                        >
                                            &gt;
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Technical Overview</h3>
                                    <p className="text-slate-600 leading-relaxed overflow-hidden h-36">
                                        {siteData.description}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <p className="text-xs text-slate-500 uppercase font-bold">Acreage</p>
                                        <p className="text-lg font-semibold">{siteData.acreage} AC</p>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <p className="text-xs text-slate-500 uppercase font-bold">Max Build-Out</p>
                                        <p className="text-lg font-semibold">{siteData.maxBuildOutSqFt.toLocaleString()} SF</p>
                                    </div>
                                </div>
                                <a
                                    href={siteData.dossierUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 w-full py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl text-center shadow-lg transition-all"
                                >
                                    Download Technical Dossier
                                </a>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 border-t pt-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-slate-900 border-b pb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Utilities (Power Layer)
                                </h4>
                                <ul className="text-sm space-y-2 text-slate-600">
                                    <li><span className="font-semibold text-slate-900">Power:</span> {siteData.utilities.power}</li>
                                    <li><span className="font-semibold text-slate-900">Water:</span> {siteData.utilities.water}</li>
                                    <li><span className="font-semibold text-slate-900">Natural Gas:</span> {siteData.utilities.gas}</li>
                                    <li><span className="font-semibold text-slate-900">Dark Fiber:</span> {siteData.utilities.fiber}</li>
                                    <li><span className="font-semibold text-slate-900">Sewer:</span> {siteData.utilities.sewer}</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-slate-900 border-b pb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                    Logistics Connectivity
                                </h4>
                                <ul className="text-sm space-y-2 text-slate-600">
                                    <li><span className="font-semibold text-slate-900">Runway Access:</span> {siteData.logistics.runwayAccess}</li>
                                    <li><span className="font-semibold text-slate-900">Rail Ready:</span> {siteData.logistics.railAccess ? "Yes" : "No"}</li>
                                    <li><span className="font-semibold text-slate-900">Highway:</span> {siteData.logistics.highwayAccess}</li>
                                    <li><span className="font-semibold text-slate-900">Status:</span> {siteData.shovelReadyStatus}</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-slate-900 border-b pb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    Financial Incentives
                                </h4>
                                <ul className="text-sm space-y-2 text-slate-600">
                                    <li><span className="font-semibold text-slate-900">FTZ #214 Status:</span> {siteData.incentives.ftzStatus ? "Qualified" : "N/A"}</li>
                                    <li><span className="font-semibold text-slate-900">Tier Status:</span> {siteData.incentives.tierStatus}</li>
                                    <li className="mt-2 p-2 bg-emerald-50 text-emerald-800 rounded border border-emerald-100 text-xs italic">
                                        {siteData.incentives.taxNote}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-slate-900 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                {siteData.contact.logoPath && <img src={siteData.contact.logoPath} alt="Logo" className="h-12 w-auto brightness-0 invert" />}
                                <div className="text-white">
                                    <p className="font-bold text-lg">{siteData.contact.name}</p>
                                    <p className="text-slate-400 text-sm">{siteData.contact.title} | {siteData.contact.company}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <a href={`mailto:${siteData.contact.email}`} className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-lg transition-colors">
                                    Email Contact
                                </a>
                                {siteData.contact.cell && (
                                    <a href={`tel:${siteData.contact.cell}`} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors border border-slate-700">
                                        Call: {siteData.contact.cell}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal