import React from 'react';
import { Theme } from '../types';
import AdvancedColorPicker from './theme/AdvancedColorPicker';
import FontPicker from './theme/FontPicker';

interface Props {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

const ThemeCustomizer: React.FC<Props> = ({ theme, onChange }) => {
  return (
    <div className="space-y-6 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Customize Design</h3>
      
      <div className="space-y-6">
        <AdvancedColorPicker
          label="Title Color"
          color={theme.titleColor}
          onChange={(color) => onChange({ ...theme, titleColor: color })}
        />
        
        <AdvancedColorPicker
          label="Text Color"
          color={theme.textColor}
          onChange={(color) => onChange({ ...theme, textColor: color })}
        />

        <AdvancedColorPicker
          label="Background Color"
          color={theme.backgroundColor}
          onChange={(color) => onChange({ ...theme, backgroundColor: color })}
        />

        <AdvancedColorPicker
          label="Gradient Color"
          color={theme.backgroundGradient}
          onChange={(color) => onChange({ ...theme, backgroundGradient: color })}
        />

        <FontPicker
          selectedFont={theme.fontFamily}
          onChange={(font) => onChange({ ...theme, fontFamily: font })}
        />
      </div>
    </div>
  );
};

export default ThemeCustomizer;