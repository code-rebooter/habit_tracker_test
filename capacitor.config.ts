import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sovereign.app',
  appName: 'Sovereign',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
