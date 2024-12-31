export interface Theme {
  titleColor: string;
  textColor: string;
  backgroundColor: string;
  backgroundGradient: string;
  fontFamily: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}

export interface CardData {
  id: string;
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  profileImage: string;
  backgroundImage: string;
  theme: Theme;
}