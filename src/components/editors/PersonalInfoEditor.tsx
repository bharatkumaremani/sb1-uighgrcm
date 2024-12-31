import React from 'react';
import { User, Briefcase, FileText } from 'lucide-react';
import { PersonalInfo } from '../../types';

interface Props {
  info: PersonalInfo;
  onChange: (info: PersonalInfo) => void;
}

const PersonalInfoEditor: React.FC<Props> = ({ info, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <User size={20} />
        Personal Information
      </h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={info.name}
            onChange={(e) => onChange({ ...info, name: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={info.title}
            onChange={(e) => onChange({ ...info, title: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            value={info.bio}
            onChange={(e) => onChange({ ...info, bio: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoEditor;