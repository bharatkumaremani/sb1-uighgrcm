import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { generateUniqueUrl } from '../../utils/sharing';

interface Props {
  cardId: string;
}

const ShareViaPhone: React.FC<Props> = ({ cardId }) => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`Check out my digital business card: ${generateUniqueUrl(cardId)}`);

  const handleShare = () => {
    const formattedPhone = phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 123-4567"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          <MessageCircle size={18} />
          Share via WhatsApp
        </button>
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Send size={18} />
          Share via SMS
        </button>
      </div>
    </div>
  );
};

export default ShareViaPhone;