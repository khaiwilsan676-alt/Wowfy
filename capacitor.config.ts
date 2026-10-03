import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wowfy.app',
  appName: 'Wowfy',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SystemBars: {
      insetsHandling: 'css',
      style: 'LIGHT',
      hidden: false
    },
    StatusBar: {
      overlaysWebView: true,
      style: 'LIGHT'
    }
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
