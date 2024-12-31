import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactInfo } from '../../types';

interface Props {
  info: ContactInfo;
  onChange: (info: ContactInfo) => void;
}

const ContactInfoEditor: React.FC<Props> = ({ info, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Mail size={20} />
        Contact Information
      </h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={info.email}
            onChange={(e) => onChange({ ...info, email: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            value={info.phone}
            onChange={(e) => onChange({ ...info, phone: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            value={info.location}
            onChange={(e) => onChange({ ...info, location: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoEditor;