import React from "react";
import Button from "./Button";
import { ButtonType } from "../types";

const GAMES = [
  {
    title: "Oppenheimer",
    img: "https://i.pinimg.com/1200x/5b/d5/36/5bd5364ccbb3b7e09fec715e345bceb4.jpg",
  },
  {
    title: "Dexter",
    img: "https://i.pinimg.com/736x/fa/e4/5b/fae45b646279ac871b2c43fec0d4feaf.jpg",
  },
  {
    title: "American Psycho",
    img: "https://i.pinimg.com/1200x/27/ef/9a/27ef9a8cf9eb463d5351f76e6a85ccd7.jpg",
  },
  {
    title: "Good Fellas",
    img: "https://i.pinimg.com/1200x/51/0e/7a/510e7a998dbbce00ef7fc1f383e83fc2.jpg",
  },
  {
    title: "The Godfather",
    img: "https://i.pinimg.com/736x/ed/5e/82/ed5e82e4ba42115b2661247aa22b7dd9.jpg",
  },
  {
    title: "The wolf of Wall Street",
    img: "https://i.pinimg.com/736x/30/de/c9/30dec9d71e35692f9a5458f1d4873713.jpg",
  },
  {
    title: "Mr Robot",
    img: "https://i.pinimg.com/736x/63/c0/70/63c07034dd64735214289f083b99a6e1.jpg",
  },
  {
    title: "Fight Club",
    img: "https://i.pinimg.com/736x/0e/8a/f1/0e8af1325ad6c1df8328195b7294b47c.jpg",
  },
];

const CarouselSmall: React.FC = () => {
  // Duplicate the array to ensure seamless infinite scrolling
  const items = [...GAMES, ...GAMES, ...GAMES];

  return (
    <div className="w-full pb-12 overflow-hidden bg-white">
      {/* Header removed as requested */}

      <div className="relative w-full mt-4">
        <div className="flex w-max gap-6 animate-infinite-scroll px-6">
          {items.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              // Increased dimensions: Mobile 350px, Desktop 500px (approx 16:9)
              className="relative w-[350px] h-[197px] md:w-[500px] md:h-[281px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-gray-100 group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with Watch Now Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <Button
                  type={ButtonType.Filled}
                  label="Watch Now"
                  className="bg-black text-white hover:bg-gray-800 border-0 scale-90 group-hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inject styles locally for the custom keyframe animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          /* Slowed down from 20s to 45s */
          animation: scroll 45s linear infinite;
        }
        /* Decrease speed further (increase duration) on hover */
        .animate-infinite-scroll:hover {
          animation-duration: 90s;
        }
      `}</style>
    </div>
  );
};

export default CarouselSmall;
