import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface Props {
  label: string;
  onImageSelect: (imageUrl: string) => void;
}

const ImageUploader: React.FC<Props> = ({ label, onImageSelect }) => {
  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-blue-500">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <Upload className="mx-auto mb-2" />
        <p className="text-sm text-gray-600">Click to upload image</p>
      </div>
    </div>
  );
};

export default ImageUploader;