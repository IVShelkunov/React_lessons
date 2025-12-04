import { useEffect } from "react";
import { useCryptoStore } from "../store/cryptoStore";
import { Price } from "./Price";
import { CoinItem } from "./CoinItem";

export function CryptoList() {
	const coins = useCryptoStore(state => state.coins);
	const isLoading = useCryptoStore(state => state.isLoading);
	const loadCoins = useCryptoStore(state => state.loadCoins);
	const watchlist = useCryptoStore(state => state.watchlist);
	const addToWatchlist = useCryptoStore(state => state.addToWatchlist);
	const isExist = (coinId : string):boolean => watchlist.some(item => item.id === coinId);
	useEffect(() => {
		loadCoins();
	} ,[]);
	return (
		<div className="crypto-list">
			<h2>Crypto List</h2>
			{isLoading ? <p>Загрузка...</p> : (
			<ul>
				{coins.map(coin => (
					<li key={coin.id}><CoinItem coin={coin}/><button disabled={isExist(coin.id)} onClick={() => addToWatchlist(coin)}>{isExist(coin.id) ? 'Added' : 'Add' }</button></li>
				))}
			</ul>	
			)}
		</div>
	);
}