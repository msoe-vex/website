"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images, autoplayInterval = 5000, alt = "Robotics image" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // Start autoplay timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, autoplayInterval);
  }, [nextSlide, autoplayInterval]);

  // Stop autoplay timer
  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Setup autoplay and handle pauses
  useEffect(() => {
    if (!isHovered && images.length > 1) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => stopTimer();
  }, [isHovered, images.length, startTimer, stopTimer]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="group relative w-full h-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img}
            alt={`${alt} - Slide ${index + 1}`}
            fill
            className="object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index === 0}
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 z-11"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer active:scale-90 border border-white/5"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="w-5 h-5" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer active:scale-90 border border-white/5"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-xs">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 cursor-pointer block ${
                index === currentIndex 
                  ? "bg-white scale-125" 
                  : "bg-white/30 hover:bg-white/60"
              }`}
              role="button"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
