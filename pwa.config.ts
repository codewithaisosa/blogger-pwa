import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'Nairachimp',
  shortName: 'Nairachimp',
  description: 'Learn how to create, customize, and monetize a blog on Blogger. Learn how to make money online in Nigeria, including blogging and affiliate marketing.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Shortcut 1',
      shortName: 'Shortcut 1',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/shortcut-1?utm_source=homescreen',
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
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.nairachimp.com/',
} satisfies Config;
