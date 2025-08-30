import { defineChain } from 'viem';

export const aurora_of_aura = defineChain({
  id: 1313161907,
  name: 'Aurora Of AURA',
  network: 'aurora_of_aura',
  nativeCurrency: {
    decimals: 18,
    name: 'Aurora Of AURA Token',
    symbol: 'AURA',
  },
  rpcUrls: {
    default: {
      http: ['https://0x4e4542b3.rpc.aurora-cloud.dev'],
      webSocket: ['wss://0x4e4542b3.rpc.aurora-cloud.dev'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Explorer',
      url: 'https://0x4e4542b3.rpc.aurora-cloud.dev/',
    },
  },
});

const scaffoldConfig = {
  // Only your custom chain; no sepolia or others included 
  targetNetworks: [aurora_of_aura],
  pollingInterval: 30000,
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || 'oKxs-03sij-U_N0iOlrSsZFr29-IqbuF',
  rpcOverrides: {},
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '3a8170812b534d0ff9d794f19a901d64',
  onlyLocalBurnerWallet: false,
} as const;

export default scaffoldConfig;