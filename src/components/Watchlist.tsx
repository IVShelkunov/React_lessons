import { useCryptoStore } from "../store/cryptoStore";
import { CoinItem } from "./CoinItem";
import { Price } from "./Price";

export function Watchlist() {
	const watchlist = useCryptoStore(state => state.watchlist);
	const removeFromWatchlist = useCryptoStore(state => state.removeFromWatchlist);
	return (
		<div className="watch-list">
			<h2>My favorite</h2>
			{watchlist.length === 0 ? <p>Ваш список пуст.</p> : (
				<ul>
					{watchlist.map(coin => (
						<li key={coin.id}><CoinItem coin={coin}/><button onClick={() => removeFromWatchlist(coin.id)}>Del</button></li>
					))}
				</ul>
			)}
		</div>
	);
}