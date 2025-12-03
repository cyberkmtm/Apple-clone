import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ButtonType } from '../types';

interface HeroProps {
  title: string;
  subhead: string;
  ctaLink: string;
  ctaText: string;
  imageUrl: string;
  textColor?: 'dark' | 'light';
  position?: 'top' | 'bottom';
  fullHeight?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subhead, 
  ctaLink, 
  ctaText, 
  imageUrl, 
  textColor = 'dark',
  position = 'top',
  fullHeight = true
}) => {
  const textClass = textColor === 'light' ? 'text-white' : 'text-[#1d1d1f]';
  const heightClass = fullHeight ? 'h-[calc(100vh-44px)]' : 'h-[580px]';
  
  // Text positioning logic
  const containerPos = position === 'top' ? 'pt-14 justify-start' : 'pb-14 justify-end';

  return (
    <div className={`relative w-full ${heightClass} bg-gray-100 overflow-hidden group cursor-pointer`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Text Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`relative h-full flex flex-col items-center text-center z-10 ${containerPos} ${textClass}`}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
          {title}
        </h2>
        <p className="text-xl md:text-2xl font-normal mb-4 max-w-[80%]">
          {subhead}
        </p>
        <div className="flex gap-6 items-center">
          <Button type={ButtonType.Filled} label={ctaText} to={ctaLink} />
          <Button type={ButtonType.Primary} label="Buy" to="/buy" className={textColor === 'light' ? 'text-blue-400 hover:text-blue-300' : ''} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;