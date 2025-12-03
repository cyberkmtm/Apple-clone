import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { ButtonType } from "../types";

const ITEMS = [
  {
    id: 1,
    title: "Scarface",
    tagline: "The new empire begins.",
    image:
      "https://i.pinimg.com/1200x/c4/17/4e/c4174edca374b0d65ebd69d43930b31f.jpg",
  },
  {
    id: 2,
    title: "Blade Runner 2049",
    tagline: "A new vision of the future.",
    image:
      "https://i.pinimg.com/736x/78/da/2b/78da2b36ed546fd197f887b98b0ec208.jpg",
  },
  {
    id: 3,
    title: "American Psycho",
    tagline: "Success has its downsides.",
    image:
      "https://i.pinimg.com/1200x/27/ef/9a/27ef9a8cf9eb463d5351f76e6a85ccd7.jpg",
  },
  {
    id: 4,
    title: "Snowfall",
    tagline: "Every empire has a beginning.",
    image:
      "https://i.pinimg.com/736x/96/e0/2c/96e02cf872eb358969c9e01c3fab85f7.jpg",
  },
];

const CarouselLarge: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 4 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="w-full bg-white">
      {/* Image Container */}
      <div
        className="relative w-full h-[75vh] md:h-[calc(100vh-80px)] overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <img
              src={ITEMS[index].image}
              alt={ITEMS[index].title}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay for Black Text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent md:hidden" />

            {/* Content */}
            <div className="absolute bottom-8 left-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-24 z-10 max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-5xl md:text-7xl font-bold text-black mb-3 tracking-tight leading-[1.1]">
                  {ITEMS[index].title}
                </h3>
                <p className="text-xl md:text-2xl font-medium text-gray-900 mb-8 leading-snug">
                  {ITEMS[index].tagline}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    type={ButtonType.Filled}
                    label="Watch Now"
                    className="bg-black text-white hover:bg-gray-800 border-0 px-8 py-3 text-[17px]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators - Below the image */}
      <div className="w-full py-6 flex justify-center items-center gap-3 bg-white">
        {ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-gray-800"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselLarge;
