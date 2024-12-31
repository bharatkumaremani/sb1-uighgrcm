import React, { useState } from 'react';
import { Share2, MessageCircle, Check, Copy } from 'lucide-react';
import QRCode from 'qrcode.react';
import { generateUniqueUrl, copyToClipboard } from '../utils/sharing';

interface Props {
  cardId: string;
  phoneNumber: string;
}

const ShareOptions: React.FC<Props> = ({ cardId, phoneNumber }) => {
  const [copied, setCopied] = useState(false);
  const cardUrl = generateUniqueUrl(cardId);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(cardUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToWhatsApp = () => {
    const message = `Check out my digital business card: ${cardUrl}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6">Share Your Card</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg break-all">
            <p className="text-sm text-gray-600">{cardUrl}</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleCopyLink}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            
            <button
              onClick={shareToWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
          <QRCode value={cardUrl} size={160} level="H" />
          <p className="mt-2 text-sm text-gray-600">Scan to view card</p>
        </div>
      </div>
    </div>
  );
};

export default ShareOptions;