import React from 'react';
import { PaintBucket } from 'lucide-react';
import { ColorSwatch } from './ColorSwatch';

const backgroundColorOptions = [
  { name: 'white', label: 'White', class: 'bg-white border border-gray-200' },
  { name: 'gray-50', label: 'Light Gray', class: 'bg-gray-50' },
  { name: 'blue-50', label: 'Light Blue', class: 'bg-blue-50' },
  { name: 'purple-50', label: 'Light Purple', class: 'bg-purple-50' },
  { name: 'emerald-50', label: 'Light Emerald', class: 'bg-emerald-50' },
  { name: 'orange-50', label: 'Light Orange', class: 'bg-orange-50' },
];

interface Props {
  selectedColor: string;
  onChange: (color: string) => void;
  label: string;
}

const BackgroundColorPicker: React.FC<Props> = ({ selectedColor, onChange, label }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <PaintBucket size={16} />
        <label className="text-sm font-medium">{label}</label>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {backgroundColorOptions.map((color) => (
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

export default BackgroundColorPicker;