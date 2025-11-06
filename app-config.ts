// ✅ Full working version

// Define the AppConfig interface first
export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  sandboxId?: string;
  agentName?: string;
}

// Default values for configuration
export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Sriven Smart Solutions',
  pageTitle: 'TechSuport Live',
  pageDescription: 'Chat • Voice • Screen Share – Powered by Sriven Smart Solutions',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/logo.png',
  accent: '#0078FF',
  logoDark: '/logo.png',
  accentDark: '#0078FF',
  startButtonText: 'Start Support Session',

  sandboxId: undefined,
  agentName: undefined,
};
