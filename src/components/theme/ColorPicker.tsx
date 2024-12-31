import React from 'react';
import { Check } from 'lucide-react';

const colorOptions = [
  { name: 'blue', class: 'bg-blue-500', hover: 'hover:bg-blue-600' },
  { name: 'purple', class: 'bg-purple-500', hover: 'hover:bg-purple-600' },
  { name: 'pink', class: 'bg-pink-500', hover: 'hover:bg-pink-600' },
  { name: 'emerald', class: 'bg-emerald-500', hover: 'hover:bg-emerald-600' },
  { name: 'orange', class: 'bg-orange-500', hover: 'hover:bg-orange-600' },
  { name: 'red', class: 'bg-red-500', hover: 'hover:bg-red-600' },
  { name: 'indigo', class: 'bg-indigo-500', hover: 'hover:bg-indigo-600' },
  { name: 'teal', class: 'bg-teal-500', hover: 'hover:bg-teal-600' }
];

interface Props {
  selectedColor: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<Props> = ({ selectedColor, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Theme Color</label>
      <div className="grid grid-cols-4 gap-2">
        {colorOptions.map(({ name, class: bgClass }) => (
          <button
            key={name}
            className={`w-10 h-10 rounded-full ${bgClass} flex items-center justify-center
              transition-all duration-200 ${selectedColor === name ? 'ring-2 ring-offset-2' : ''}`}
            onClick={() => onChange(name)}
          >
            {selectedColor === name && <Check className="text-white" size={16} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;