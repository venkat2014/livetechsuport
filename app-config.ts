// ✅ Full working version

// Define the AppConfig interface first
export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'LiveTechSupport',
  pageTitle: 'LiveTechSupport',
  pageDescription: 'Ask LiveTechSupport',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  // leave empty if you don't have image assets yet
  logo: '',
  accent: '#002cf2',
  logoDark: '',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
