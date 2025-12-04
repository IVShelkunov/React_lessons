import type { PriceProps } from "../types/types";

export function Price({coinPrice}:PriceProps) {
	return (
		<span className="price">
			${coinPrice}
		</span>
	);
}