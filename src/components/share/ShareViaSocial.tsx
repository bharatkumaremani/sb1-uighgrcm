import React from 'react';
import { Twitter, Facebook, Linkedin, Link, Check } from 'lucide-react';
import { generateUniqueUrl, copyToClipboard } from '../../utils/sharing';

interface Props {
  cardId: string;
}

const ShareViaSocial: React.FC<Props> = ({ cardId }) => {
  const [copied, setCopied] = React.useState(false);
  const cardUrl = generateUniqueUrl(cardId);

  const handleCopy = async () => {
    const success = await copyToClipboard(cardUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-[#1DA1F2]',
      hover: 'hover:bg-[#1a8cd8]',
      onClick: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out my digital business card!`)}&url=${encodeURIComponent(cardUrl)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877F2]',
      hover: 'hover:bg-[#166fe5]',
      onClick: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(cardUrl)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0A66C2]',
      hover: 'hover:bg-[#095196]',
      onClick: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(cardUrl)}`;
        window.open(url, '_blank');
      }
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {shareButtons.map(({ name, icon: Icon, color, hover, onClick }) => (
          <button
            key={name}
            onClick={onClick}
            className={`flex flex-col items-center gap-2 p-3 rounded-lg text-white ${color} ${hover}`}
          >
            <Icon size={24} />
            <span className="text-sm">{name}</span>
          </button>
        ))}
      </div>

      <div className="relative mt-4">
        <input
          type="text"
          value={cardUrl}
          readOnly
          className="w-full p-2 pr-24 border rounded bg-gray-50"
        />
        <button
          onClick={handleCopy}
          className="absolute right-1 top-1 bottom-1 px-3 flex items-center gap-1 bg-gray-100 rounded hover:bg-gray-200"
        >
          {copied ? <Check size={16} /> : <Link size={16} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default ShareViaSocial;