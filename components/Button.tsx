import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ButtonType } from '../types';

interface ButtonProps {
  type: ButtonType;
  label: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, label, to, onClick, className = '' }) => {
  const baseClasses = "inline-flex items-center transition-all duration-300 text-[17px]";
  
  let typeClasses = "";
  
  switch (type) {
    case ButtonType.Filled:
      typeClasses = "bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-5 py-2 font-medium text-sm";
      break;
    case ButtonType.Outline:
      typeClasses = "bg-transparent border border-white hover:bg-white hover:text-black text-white rounded-full px-5 py-2 font-medium text-sm";
      break;
    case ButtonType.Primary:
    default:
      typeClasses = "text-[#0066cc] hover:underline cursor-pointer group font-medium";
      break;
  }

  const content = (
    <>
      {label}
      {type === ButtonType.Primary && (
        <ChevronRight size={14} className="ml-1 mt-[2px] group-hover:translate-x-0.5 transition-transform" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${typeClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${typeClasses} ${className}`}>
      {content}
    </button>
  );
};

export default Button;