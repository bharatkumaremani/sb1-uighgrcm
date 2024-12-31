import React from 'react';
import { Type } from 'lucide-react';
import { ColorSwatch } from './ColorSwatch';

const textColorOptions = [
  { name: 'gray-900', label: 'Dark', class: 'bg-gray-900' },
  { name: 'gray-700', label: 'Medium', class: 'bg-gray-700' },
  { name: 'gray-500', label: 'Light', class: 'bg-gray-500' },
  { name: 'blue-600', label: 'Blue', class: 'bg-blue-600' },
  { name: 'purple-600', label: 'Purple', class: 'bg-purple-600' },
  { name: 'emerald-600', label: 'Emerald', class: 'bg-emerald-600' },
];

interface Props {
  selectedColor: string;
  onChange: (color: string) => void;
  label: string;
}

const TextColorPicker: React.FC<Props> = ({ selectedColor, onChange, label }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Type size={16} />
        <label className="text-sm font-medium">{label}</label>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {textColorOptions.map((color) => (
          <ColorSwatch
            key={color.name}
            color={color}
            isSelected={selectedColor === color.name}
            onClick={() => onChange(color.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default TextColorPicker;