"use client"

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Banner() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full glass border-b border-border transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <span className="text-xl font-bold text-primary">
                            MSOE Robotics
                        </span>
                        <div className="hidden md:flex items-center space-x-1">
                            <BannerLink target="header">Home</BannerLink>
                            <BannerLink target="about">About</BannerLink>
                            <BannerLink target="programs">Focus</BannerLink>
                            <BannerLink target="innovation">Innovation</BannerLink>
                            <BannerLink target="vex-u">VEXU</BannerLink>
                            <BannerLink target="contact-us">Contact</BannerLink>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-xl hover:bg-muted transition-all active:scale-95"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-md border-b border-border ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-1">
                    <MobileNavLink target="header" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                    <MobileNavLink target="about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
                    <MobileNavLink target="programs" onClick={() => setIsMenuOpen(false)}>Focus</MobileNavLink>
                    <MobileNavLink target="innovation" onClick={() => setIsMenuOpen(false)}>Innovation</MobileNavLink>
                    <MobileNavLink target="vex-u" onClick={() => setIsMenuOpen(false)}>VEXU</MobileNavLink>
                    <MobileNavLink target="contact-us" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                </div>
            </div>
        </nav>
    );
}

function BannerLink({ target, children }) {
    const on_click = () => {
        const element = document.getElementById(target);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    return (
        <button 
            onClick={on_click}
            className="text-foreground/80 hover:text-primary px-4 py-2 rounded-xl text-sm font-medium transition-all relative group"
        >
            {children}
            <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-[calc(100%-32px)]"></span>
        </button>
    );
}

function MobileNavLink({ target, onClick, children }) {
    const on_click = () => {
        const element = document.getElementById(target);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            onClick();
        }
    }

    return (
        <button 
            onClick={on_click}
            className="w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
        >
            {children}
        </button>
    );
}