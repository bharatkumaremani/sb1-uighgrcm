import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BusinessCard from './components/BusinessCard';
import ThemeCustomizer from './components/ThemeCustomizer';
import ImageUploader from './components/ImageUploader';
import ShareOptions from './components/ShareOptions';
import PersonalInfoEditor from './components/editors/PersonalInfoEditor';
import ContactInfoEditor from './components/editors/ContactInfoEditor';
import SocialLinksEditor from './components/editors/SocialLinksEditor';
import { CardData } from './types';

const defaultCardData: CardData = {
  id: uuidv4(),
  personalInfo: {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    bio: 'Building amazing web experiences',
  },
  contactInfo: {
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  },
  profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  backgroundImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
  theme: {
    titleColor: '#1a202c',
    textColor: '#4a5568',
    backgroundColor: '#ffffff',
    backgroundGradient: '#f7fafc',
    fontFamily: 'font-sans'
  },
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'Github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'Linkedin'
    }
  ]
};

function App() {
  const [cardData, setCardData] = useState<CardData>(defaultCardData);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <PersonalInfoEditor
              info={cardData.personalInfo}
              onChange={(personalInfo) => setCardData({ ...cardData, personalInfo })}
            />
            <ContactInfoEditor
              info={cardData.contactInfo}
              onChange={(contactInfo) => setCardData({ ...cardData, contactInfo })}
            />
            <SocialLinksEditor
              links={cardData.socialLinks}
              onChange={(socialLinks) => setCardData({ ...cardData, socialLinks })}
            />
            <ThemeCustomizer
              theme={cardData.theme}
              onChange={(theme) => setCardData({ ...cardData, theme })}
            />
            <ImageUploader
              label="Profile Image"
              onImageSelect={(url) => setCardData({ ...cardData, profileImage: url })}
            />
            <ImageUploader
              label="Background Image"
              onImageSelect={(url) => setCardData({ ...cardData, backgroundImage: url })}
            />
          </div>
          
          <div className="lg:col-span-2">
            <BusinessCard data={cardData} />
            <div className="mt-6">
              <ShareOptions
                cardId={cardData.id}
                phoneNumber={cardData.contactInfo.phone.replace(/\D/g, '')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;