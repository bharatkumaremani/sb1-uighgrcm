import React, { useState } from 'react';
import { X } from 'lucide-react';
import ShareViaPhone from './ShareViaPhone';
import ShareViaEmail from './ShareViaEmail';
import ShareViaSocial from './ShareViaSocial';

interface Props {
  cardId: string;
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<Props> = ({ cardId, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'phone' | 'email' | 'social'>('phone');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Share Your Card</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>

        <div className="flex border-b mb-6">
          {[
            { id: 'phone', label: 'Phone' },
            { id: 'email', label: 'Email' },
            { id: 'social', label: 'Social' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`flex-1 py-2 text-sm font-medium border-b-2 transition-colors
                ${activeTab === id 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'phone' && <ShareViaPhone cardId={cardId} />}
        {activeTab === 'email' && <ShareViaEmail cardId={cardId} />}
        {activeTab === 'social' && <ShareViaSocial cardId={cardId} />}
      </div>
    </div>
  );
};

export default ShareModal;