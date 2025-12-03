import { useCartStore } from "../store";

export function Cart() {
	const properties = ['Название товара' , 'Цена за штуку' , 'Количество' , 'Стоимость'];
	const items = useCartStore(state => state.items);
	const removeFromCart = useCartStore(state => state.removeFromCart);
	const clearCart = useCartStore(state => state.clearCart);
	const total = items.reduce((acc , currentItem) => currentItem.price * currentItem.quantity + acc, 0);
	return (
		<div className="cart">
			<div className="cart-body">
			<h2>Корзина</h2>
			{items.length === 0 ? <p>Корзина пуста</p> :
				(<div>
					<table>
						<tr>
							{properties.map(property => (
								<th key={property}>{property}</th>
							))}
						</tr>
						{items.map(item => (
							<tr key={item.id}>
								<td>{item.title}</td>
								<td>${item.price}</td>
								<td>{item.quantity}</td>
								<td>${(item.price * item.quantity).toFixed(2)}<button onClick={() => removeFromCart(item.id)}>🗑</button></td>
							</tr>
						))}
						<tr><td rowSpan={4}>Итого:{total.toFixed(2)}</td></tr>
				
						</table>
						<button onClick={clearCart}>Очистить корзину🗑</button>
				</div>)

			}
			</div>
		</div>
	);
}