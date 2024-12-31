import React, { useState, useEffect } from 'react';
import { isValidHexColor } from '../../utils/colors';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorInput: React.FC<Props> = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    if (e.target.type === 'color' || isValidHexColor(newValue)) {
      onChange(newValue);
    }
  };

  const handleBlur = () => {
    if (!isValidHexColor(inputValue)) {
      setInputValue(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium flex-1">{label}</label>
      <input
        type="color"
        value={value}
        onChange={handleInputChange}
        className="w-8 h-8 rounded cursor-pointer"
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="#000000"
        className="w-24 px-2 py-1 text-sm border rounded"
      />
    </div>
  );
};

export default ColorInput;