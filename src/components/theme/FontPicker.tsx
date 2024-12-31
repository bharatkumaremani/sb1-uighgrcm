import React from 'react';
import { Type } from 'lucide-react';

const fontOptions = [
  { name: 'font-sans', label: 'Sans Serif', preview: 'Modern & Clean' },
  { name: 'font-serif', label: 'Serif', preview: 'Classic & Elegant' },
  { name: 'font-mono', label: 'Monospace', preview: 'Technical & Precise' }
];

interface Props {
  selectedFont: string;
  onChange: (font: string) => void;
}

const FontPicker: React.FC<Props> = ({ selectedFont, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Typography</label>
      <div className="space-y-2">
        {fontOptions.map(({ name, label, preview }) => (
          <button
            key={name}
            onClick={() => onChange(name)}
            className={`w-full p-3 text-left rounded-lg border transition-all
              ${selectedFont === name 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'}`}
          >
            <div className={`${name}`}>
              <div className="flex items-center justify-between">
                <span className="font-medium">{label}</span>
                {selectedFont === name && <Type size={16} className="text-blue-500" />}
              </div>
              <p className="text-sm text-gray-600 mt-1">{preview}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FontPicker;