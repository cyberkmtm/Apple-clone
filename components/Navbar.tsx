import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "../constants";
import { NavItem } from "../types";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);

  // Apple Logo SVG Path
  const AppleLogo = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.3 0 2.51.87 3.31.87.76 0 2.19-1.09 3.69-.93 1.26.13 2.41.64 3.18 1.75-2.73 1.66-2.28 5.79.46 6.94-.19.58-.45 1.17-.75 1.99M15 6.43c.69-1.17.96-2.35.82-3.43-1.03.05-2.29.69-3.02 1.55-.64.75-1.2 1.94-1.05 2.99 1.15.09 2.33-.52 3.25-1.11z" />
    </svg>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 group ${
        isScrolled || isOpen || hoveredItem
          ? "bg-[#161617]"
          : "bg-[#161617]/90 backdrop-blur-md"
      }`}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="max-w-[1024px] mx-auto px-4 h-[44px] flex justify-between items-center text-[#e8e8ed] text-xs font-light relative z-50">
        {/* Desktop Menu */}
        <ul className="hidden md:flex w-full justify-between items-center list-none h-full">
          <li className="opacity-80 hover:opacity-100 transition-opacity h-full flex items-center">
            <Link to="/">
              <AppleLogo />
            </Link>
          </li>
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setHoveredItem(item)}
            >
              <Link
                to={item.path}
                className={`px-2 transition-opacity ${
                  hoveredItem && hoveredItem !== item
                    ? "opacity-50"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer h-full flex items-center px-2">
            <Search size={14} />
          </li>
          <li className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer h-full flex items-center px-2">
            <ShoppingBag size={14} />
          </li>
        </ul>

        {/* Mobile Menu Header */}
        <div className="md:hidden flex w-full justify-between items-center z-50 relative">
          <Link to="/" className="opacity-80" onClick={() => setIsOpen(false)}>
            <AppleLogo />
          </Link>
          <div className="flex gap-4 items-center">
            <Search size={18} className="opacity-80" />
            <ShoppingBag size={18} className="opacity-80" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#e8e8ed]"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-[#161617] pt-20 px-8 transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-10 invisible"
          }`}
        >
          <ul className="flex flex-col gap-4 text-[#e8e8ed] text-[28px] font-semibold">
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={item.label}
                className={`border-b border-gray-700 pb-2 transform transition-all duration-700 delay-${
                  idx * 50
                }`}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                }}
              >
                <Link to={item.path} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Dropdown Panel */}
      <AnimatePresence>
        {hoveredItem && hoveredItem.subItems && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[44px] left-0 w-full bg-[#161617] overflow-hidden border-t border-gray-800 hidden md:block z-40"
            onMouseEnter={() => setHoveredItem(hoveredItem)} // Keep open when hovering dropdown
          >
            <div className="max-w-[1024px] mx-auto px-4 py-10">
              <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[#86868b] text-xs mb-2 uppercase font-semibold tracking-wide">
                    Explore {hoveredItem.label}
                  </span>
                  {hoveredItem.subItems.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.path}
                      className="text-[#e8e8ed] text-xl md:text-2xl font-semibold hover:text-white leading-relaxed"
                      onClick={() => setHoveredItem(null)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
                {/* Example: We could add a second column for 'Shop' or 'Support' here if we had structured data for it */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blur Backdrop for the rest of the page */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[44px] bg-black/40 backdrop-blur-sm z-30 hidden md:block h-screen"
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
