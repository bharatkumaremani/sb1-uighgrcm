import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import ColorInput from './ColorInput';

interface Props {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const AdvancedColorPicker: React.FC<Props> = ({ label, color, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette size={16} />
          <label className="text-sm font-medium">{label}</label>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          {isExpanded ? 'Simple' : 'Advanced'}
        </button>
      </div>

      <div className="space-y-3">
        <ColorInput
          label="Color"
          value={color}
          onChange={onChange}
        />
        
        {isExpanded && (
          <div className="p-3 bg-gray-50 rounded-lg space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <div className="h-24 rounded-lg" style={{ backgroundColor: color }} />
                <div className="text-xs text-center text-gray-500">Preview</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${color}, white)` }} />
                <div className="text-xs text-center text-gray-500">Gradient</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedColorPicker;