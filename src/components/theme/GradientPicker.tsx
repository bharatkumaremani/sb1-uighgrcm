import React from 'react';
import { Palette } from 'lucide-react';

const gradientOptions = [
  {
    name: 'blue-purple',
    label: 'Blue to Purple',
    class: 'bg-gradient-to-r from-blue-500 to-purple-500'
  },
  {
    name: 'emerald-blue',
    label: 'Emerald to Blue',
    class: 'bg-gradient-to-r from-emerald-500 to-blue-500'
  },
  {
    name: 'purple-pink',
    label: 'Purple to Pink',
    class: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    name: 'orange-red',
    label: 'Orange to Red',
    class: 'bg-gradient-to-r from-orange-500 to-red-500'
  }
];

interface Props {
  selectedGradient: string;
  onChange: (gradient: string) => void;
}

const GradientPicker: React.FC<Props> = ({ selectedGradient, onChange }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Palette size={16} />
        <label className="text-sm font-medium">Background Gradient</label>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {gradientOptions.map((gradient) => (
          <button
            key={gradient.name}
            onClick={() => onChange(gradient.name)}
            className={`
              h-16 rounded-lg ${gradient.class}
              ${selectedGradient === gradient.name ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
              transition-all duration-200
            `}
          >
            <span className="sr-only">{gradient.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GradientPicker;