import type { Config } from './types';

export default {
  id: '/',
  name: 'TeachMe',
  shortName: 'TeachMe',
  description: 'Teachme.ng is your go-to guide for all things university in Nigeria. We'll cover JAMB prep, JAMB guide, admissions and more. Plus free tools and resources.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#000',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'JAMB Syllabus',
      shortName: 'JAMB Syllabus',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/JAMB%20Syllabus?utm_source=homescreen',
    },
    {
      name: 'Shortcut 2',
      shortName: 'Shortcut 2',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '944d4a23-da82-4157-8015-010d38a6bdb5',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.teachme.ng/',
} satisfies Config;
