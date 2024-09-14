// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/hoang-van-hao/',
    secondary: false,
    caption: 'Hao Hoang on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/vanhaohoang',
    secondary: false,
    caption: 'Hao Hoang on GitHub',
  },
  {
    type: socialLinkTypes.twitter,
    url: 'https://x.com/vanhaohoang',
    secondary: false,
    caption: 'Hao Hoang on Twitter',
  },
  {
    type: socialLinkTypes.facebook,
    url: 'https://www.facebook.com/theeyesneverlie28',
    secondary: true,
    hidden: true,
    caption: 'Hao Hoang on Facebook',
  },
  {
    type: socialLinkTypes.instagram,
    url: 'https://www.facebook.com/theeyesneverlie28',
    secondary: true,
    hidden: true,
    caption: 'Hao Hoang on Instagram',
  },
  {
    type: socialLinkTypes.medium,
    url: 'https://medium.com/@vanhaohoang',
    secondary: true,
    caption: 'Hao Hoang on Medium',
  },
  {
    type: socialLinkTypes.devTo,
    url: 'https://dev.to/vanhaohoang',
    secondary: true,
    caption: 'Hao Hoang on DevTo',
  },
  {
    type: socialLinkTypes.stackOverflow,
    url: 'https://stackexchange.com/users/31434875/hao-hoang',
    secondary: true,
    hidden: true,
    caption: 'Hao Hoang on StackOverflow',
  },
  {
    type: socialLinkTypes.youTube,
    url: 'https://www.youtube.com/@hoangvanhao7092',
    secondary: true,
    caption: 'Hao Hoang on YouTube',
  },
];
