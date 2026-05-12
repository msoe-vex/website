"use client";

import { useEffect, useRef, useState } from "react";
import Sponsor from "./Sponsor";
import MSOE from "./../../assets/sponsors/MSOE.png";
import ISCFAX from "./../../assets/sponsors/ISCFAX.png";
import MILWAUKEE_TOOL from "./../../assets/sponsors/Milwaukee_Tool.png";
import FVCR from "./../../assets/sponsors/FVCR.png";
import MORE_ROBOTICS from "./../../assets/sponsors/More_Robotics.png";
import ROCKWELL from "./../../assets/sponsors/Rockwell_Automation.png";
import LAKE_AREA from "./../../assets/sponsors/Lake_Area_Insurance.png";
import POLYMATH from "./../../assets/sponsors/Polymath_Inc.png";

const sponsors_data = [
    { img: MSOE, link: "https://msoe.edu/", alt: "MSOE" },
    { img: ISCFAX, link: "https://iscfax.com/", alt: "ISCFAX" },
    { img: MILWAUKEE_TOOL, link: "https://www.milwaukeetool.com/", alt: "Milwaukee Tool" },
    { img: FVCR, link: "https://fvcrinc.wixsite.com/fox-valley-robotics/", alt: "Fox Valley Robotics" },
    { img: MORE_ROBOTICS, link: "https://www.facebook.com/MORERobotics1714/", alt: "More Robotics 1714" },
    { img: ROCKWELL, link: "https://www.rockwellautomation.com/", alt: "Rockwell Automation" },
    { img: LAKE_AREA, link: "https://lakeareains.com/", alt: "Lake Area Insurance Agency" },
    { img: POLYMATH, link: "http://www.polymathinc.com/", alt: "Polymath Inc" },
];

export default function SponsorBar() {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const targetScroll = useRef(0);
    const currentScroll = useRef(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationFrameId;
        const autoSpeed = 0.8;

        const animate = () => {
            // Auto scroll logic
            if (!isHovered) {
                targetScroll.current += autoSpeed;
            }

            // Smooth interpolation (Lerp)
            const lerpFactor = 0.1;
            currentScroll.current += (targetScroll.current - currentScroll.current) * lerpFactor;
            
            container.scrollLeft = currentScroll.current;

            // Bidirectional Infinite loop check
            // With 3 sets, we want to stay in the middle set (index 1)
            const oneThirdWidth = container.scrollWidth / 3;
            if (oneThirdWidth > 0) {
                if (currentScroll.current >= oneThirdWidth * 2) {
                    currentScroll.current -= oneThirdWidth;
                    targetScroll.current -= oneThirdWidth;
                } else if (currentScroll.current <= oneThirdWidth) {
                    currentScroll.current += oneThirdWidth;
                    targetScroll.current += oneThirdWidth;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    const handleWheel = (e) => {
        // Support Shift + Scroll (standard horizontal scroll shortcut) 
        // or dedicated horizontal delta (trackpad)
        if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            // Use deltaX if present, otherwise use deltaY when shifting
            const delta = e.shiftKey ? (e.deltaX || e.deltaY) : e.deltaX;
            targetScroll.current += delta;
            
            // Prevent page from scrolling/navigating when we're interacting with the bar
            if (e.cancelable) e.preventDefault();
        }
    };

    // Mouse drag support
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeftStart.current = targetScroll.current;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // speed multiplier
        targetScroll.current = scrollLeftStart.current - walk;
    };

    return (
        <div className="relative w-full group">
            <div 
                ref={scrollRef}
                className="flex overflow-x-hidden whitespace-nowrap cursor-grab active:cursor-grabbing select-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    handleMouseUp();
                }}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="flex min-w-max py-2">
                    {sponsors_data.map((s, i) => (
                        <Sponsor key={i} {...s} />
                    ))}
                    {/* Triple duplication to ensure smooth infinite wheel scroll in both directions */}
                    {sponsors_data.map((s, i) => (
                        <Sponsor key={`dup1-${i}`} {...s} />
                    ))}
                    {sponsors_data.map((s, i) => (
                        <Sponsor key={`dup2-${i}`} {...s} />
                    ))}
                </div>
            </div>
            
            {/* Gradient Mask for fading edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
        </div>
    );
}