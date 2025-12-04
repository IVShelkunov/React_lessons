import type { CoinItemProps } from "../types/types";

export function CoinItem({coin}: CoinItemProps) {
	const {name , priceUsd} = coin;
	return (
		<div className="coin-item">
			<span className="price">
				${priceUsd}
			</span>
			<span>{name}</span>
		</div>
	);
}