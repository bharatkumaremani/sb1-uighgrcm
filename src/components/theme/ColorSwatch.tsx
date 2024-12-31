import React from 'react';
import { Check } from 'lucide-react';

interface ColorOption {
  name: string;
  label: string;
  class: string;
}

interface Props {
  color: ColorOption;
  isSelected: boolean;
  onClick: () => void;
}

export const ColorSwatch: React.FC<Props> = ({ color, isSelected, onClick }) => {
  return (
    <button
      title={color.label}
      onClick={onClick}
      className={`
        w-8 h-8 rounded-full flex items-center justify-center
        ${color.class}
        ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
        transition-all duration-200
      `}
    >
      {isSelected && <Check size={14} className="text-current" />}
    </button>
  );
};