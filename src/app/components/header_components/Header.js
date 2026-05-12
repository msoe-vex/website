"use client";

import Image from "next/image";
import HEADER from "../../assets/MSOE_Robotics_Header.png"
import SponsorBar from "./SponsorBar"
import HeaderBackground, {set_mouse_position} from "./HeaderBackground";

export default function Header() {
    return (
        <header id="header" className="relative">
            <div className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden bg-background">
                <HeaderBackground id="header-background" classes="absolute inset-0 w-full h-full opacity-40 dark:opacity-60"/>
                
                <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto" onMouseMove={set_mouse_position}>
                    <div className="relative w-full max-w-2xl aspect-[3/1] mb-8 animate-in fade-in zoom-in duration-1000">
                        <Image 
                            src={HEADER} 
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(225,29,72,0.2)] dark:drop-shadow-[0_0_30px_rgba(225,29,72,0.4)]" 
                            alt="MSOE Robotics" 
                            priority
                        />
                    </div>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-2xl leading-relaxed">
                        Pioneering the future of competitive robotics through 
                        <span className="text-primary font-semibold"> innovation</span>, 
                        <span className="text-primary font-semibold"> community</span>, and 
                        <span className="text-primary font-semibold"> excellence</span>.
                    </p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-primary hover:bg-rose-600 text-primary-foreground rounded-full font-bold uppercase tracking-wide text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative z-20 w-full -translate-y-1/2">
                <div className="max-w-md mx-auto px-6 py-3 glass rounded-full shadow-xl border border-white/10">
                    <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-foreground/70">
                        Our Partners & Sponsors
                    </h2>
                </div>
            </div>

            <div className="py-6 bg-background border-y border-border overflow-hidden">
                <SponsorBar/>
            </div>
        </header>
    );
}