"use client";
import React, { useEffect, useState } from "react";
const NCGTPHeroVideo = () => {
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
        }
    }, []);
    return (
        <>
            {isIOS ? (
                <iframe
                    src="https://www.youtube.com/embed/iiV5udOKPc4?autoplay=1&loop=1&controls=0&playlist=iiV5udOKPc4"
                    title="NCGTP video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen

                    className="absolute inset-0 w-full h-full border-0"
                    style={{ objectFit: "cover", scale: 2.2 }}
                ></iframe>
            ) : (
                <video
                    // src="https://ncgtpedr.com/hubfs/NCGTPEDR_Website_Banner.mp4"
                    src="/videos/ncgtp-hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full border-0"
                    style={{ objectFit: "cover", scale: 1 }}
                ></video>
            )}
        </>
    );
}

export default NCGTPHeroVideo;