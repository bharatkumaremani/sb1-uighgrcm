import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { CardData } from '../types';

interface Props {
  data: CardData;
}

const BusinessCard: React.FC<Props> = ({ data }) => {
  const IconComponent = {
    Github,
    Linkedin,
    Twitter
  };

  const getThemeStyles = () => {
    return {
      backgroundColor: data.theme.backgroundColor,
      color: data.theme.textColor,
      fontFamily: data.theme.fontFamily.replace('font-', ''),
      background: data.theme.backgroundGradient ? 
        `linear-gradient(to right, ${data.theme.backgroundColor}, ${data.theme.backgroundGradient})` : 
        data.theme.backgroundColor
    };
  };

  const getTitleStyles = () => {
    return {
      color: data.theme.titleColor
    };
  };

  return (
    <div 
      className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden"
      style={getThemeStyles()}
    >
      <div className="relative h-48">
        <img
          src={data.backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </div>
      
      <div className="relative -mt-20 px-6">
        <img
          src={data.profileImage}
          alt={data.personalInfo.name}
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto object-cover"
        />
      </div>

      <div className="px-6 py-4 text-center">
        <h1 className="text-2xl font-bold" style={getTitleStyles()}>
          {data.personalInfo.name}
        </h1>
        <p className="mt-1">{data.personalInfo.title}</p>
        <p className="text-sm mt-2">{data.personalInfo.bio}</p>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <Mail size={18} />
            <a href={`mailto:${data.contactInfo.email}`} className="hover:opacity-75">
              {data.contactInfo.email}
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone size={18} />
            <a href={`tel:${data.contactInfo.phone}`} className="hover:opacity-75">
              {data.contactInfo.phone}
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin size={18} />
            <span>{data.contactInfo.location}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          {data.socialLinks.map((link) => {
            const Icon = IconComponent[link.icon as keyof typeof IconComponent];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;