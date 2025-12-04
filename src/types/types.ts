export interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;
}
export interface CryptoState {
  //state
  coins: CryptoCoin[],
  watchlist: CryptoCoin[],
  isLoading: boolean,
  //actions
  loadCoins: () => Promise<void>,
  addToWatchlist: (coin:CryptoCoin) => void,
  removeFromWatchlist: (id:string) => void
}
export interface PriceProps {
  coinPrice: number
}
export interface CoinItemProps {
  coin: CryptoCoin
}