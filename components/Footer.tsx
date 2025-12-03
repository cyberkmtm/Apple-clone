import React, { useState } from 'react';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs py-10">
      <div className="max-w-[980px] mx-auto px-4">
        
        {/* Legal Text Top */}
        <div className="border-b border-[#d2d2d7] pb-6 mb-6 text-[#6e6e73]">
          <p className="mb-2">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card.
          </p>
          <p>
            Subscription required for Apple TV+, Apple Fitness+, Apple News+, and Apple Arcade.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {FOOTER_LINKS.map((column, idx) => (
            <FooterColumn key={idx} title={column.title} links={column.links} />
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-[#d2d2d7] flex flex-col md:flex-row justify-between items-center text-[#6e6e73]">
          <div className="mb-2 md:mb-0">
            Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">Sales and Refunds</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">Legal</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile accordion behavior, desktop static list
  return (
    <div className="border-b md:border-0 border-[#d2d2d7] md:pb-0">
      <button 
        className="w-full flex justify-between items-center py-3 md:py-0 md:mb-2 font-semibold text-[#1d1d1f] md:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="md:hidden text-sm transform transition-transform duration-300" style={{ rotate: isOpen ? '45deg' : '0deg' }}>+</span>
      </button>
      <ul className={`overflow-hidden transition-all duration-300 ease-in-out md:block ${isOpen ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}`}>
        {links.map(link => (
          <li key={link} className="mb-2">
            <a href="#" className="text-[#424245] hover:underline">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;