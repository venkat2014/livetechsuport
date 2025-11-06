// ✅ Full working version

// Define the AppConfig interface first
// Define the AppConfig interface first
export interface AppConfig {
  companyName: string;
  pageTitle: string;
  pageDescription: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  accent: string;
  logoDark: string;
  accentDark: string;
  startButtonText: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'LiveTechSupport',
  pageTitle: 'LiveTechSupport',
  pageDescription: 'Ask LiveTechSupport',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '',
  accent: '#002cf2',
  logoDark: '',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
