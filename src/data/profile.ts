import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Hao',
  lastName: 'Hoang',
  position: 'Senior AI Engineer @ Spartan',
  summary: [
    'Author of over 20 AI knowledge-sharing repos on GitHub',
  ],
  avatar: {
    // srcPath: 'profile/avatar_500x500.jpg',
    srcPath: 'profile/avatar_500x500_v2.jpg',
    caption: 'Van Hao Hoang',
  },
  location: {
    name: 'Hanoi, Vietnam 🇻🇳 and Toulouse, France 🇫🇷',
  },
  tags: [
    { name: 'AI' },
    { name: 'LLMs' },
    { name: 'NLP' },
  ],
  socialLinks,
};
