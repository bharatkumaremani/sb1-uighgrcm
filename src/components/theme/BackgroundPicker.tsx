import React from 'react';
import { Image } from 'lucide-react';

const backgroundOptions = [
  { name: 'gradient', url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809' },
  { name: 'abstract', url: 'https://images.unsplash.com/photo-1557683316-973673baf926' },
  { name: 'geometric', url: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7' },
  { name: 'minimal', url: 'https://images.unsplash.com/photo-1557683311-eac922347aa1' }
];

interface Props {
  selectedUrl: string;
  onChange: (url: string) => void;
}

const BackgroundPicker: React.FC<Props> = ({ selectedUrl, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Background Style</label>
      <div className="grid grid-cols-2 gap-2">
        {backgroundOptions.map(({ name, url }) => (
          <button
            key={name}
            className={`relative h-20 rounded-lg overflow-hidden 
              ${selectedUrl === url ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
            onClick={() => onChange(url)}
          >
            <img src={url} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100">
              <Image className="text-white" size={20} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundPicker;