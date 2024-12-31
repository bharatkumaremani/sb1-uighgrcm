import React from 'react';
import { Link } from 'lucide-react';
import { SocialLink } from '../../types';

interface Props {
  links: SocialLink[];
  onChange: (links: SocialLink[]) => void;
}

const SocialLinksEditor: React.FC<Props> = ({ links, onChange }) => {
  const addLink = () => {
    onChange([...links, { platform: '', url: '', icon: 'Link' }]);
  };

  const updateLink = (index: number, updates: Partial<SocialLink>) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], ...updates };
    onChange(newLinks);
  };

  const removeLink = (index: number) => {
    onChange(links.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Link size={20} />
        Social Links
      </h3>
      <div className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              placeholder="Platform"
              value={link.platform}
              onChange={(e) => updateLink(index, { platform: e.target.value })}
              className="flex-1 p-2 border rounded"
            />
            <input
              type="url"
              placeholder="URL"
              value={link.url}
              onChange={(e) => updateLink(index, { url: e.target.value })}
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={() => removeLink(index)}
              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addLink}
          className="w-full py-2 border-2 border-dashed rounded-lg hover:border-blue-500 hover:text-blue-500"
        >
          Add Social Link
        </button>
      </div>
    </div>
  );
};

export default SocialLinksEditor;