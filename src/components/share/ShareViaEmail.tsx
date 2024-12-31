import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { generateUniqueUrl } from '../../utils/sharing';

interface Props {
  cardId: string;
}

const ShareViaEmail: React.FC<Props> = ({ cardId }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Check out my digital business card');
  const [message, setMessage] = useState(`Here's my digital business card: ${generateUniqueUrl(cardId)}`);

  const handleShare = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="recipient@example.com"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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

      <button
        onClick={handleShare}
        className="w-full flex items-center justify-center gap-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <Mail size={18} />
        Send Email
      </button>
    </div>
  );
};

export default ShareViaEmail;