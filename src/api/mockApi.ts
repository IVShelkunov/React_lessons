import type { CryptoCoin } from "../types/types";

export const mockCoins: CryptoCoin[] = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', priceUsd: 64230.50 },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', priceUsd: 3450.12 },
  { id: 'solana', name: 'Solana', symbol: 'SOL', priceUsd: 145.60 },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', priceUsd: 0.45 },
  { id: 'ripple', name: 'XRP', symbol: 'XRP', priceUsd: 0.60 },
  { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', priceUsd: 7.20 },
];
export const fetchCoinsList = (): Promise<CryptoCoin[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCoins);
    }, 1000);
  });
};