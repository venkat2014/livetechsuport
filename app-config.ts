// ✅ Full working version

// Define the AppConfig interface first
export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'LiveSupport',
  pageTitle: 'LiveSupport Voice Agent',
  pageDescription: 'Ask your voice agent ',

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
