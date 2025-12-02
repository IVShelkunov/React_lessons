import { useCartStore } from "../store";

export function Cart() {
	const properties = ['Название товара' , 'Цена за штуку' , 'Количество' , 'Стоимость'];
	const items = useCartStore(state => state.items);
	const removeFromCart = useCartStore(state => state.removeFromCart);
	const clearCart = useCartStore(state => state.clearCart);
	const total = items.reduce((acc , currentItem) => currentItem.price * currentItem.quantity + acc, 0);
	return (
		<div className="cart">
			<h2>Корзина</h2>
			{items.length === 0 ? <p>Корзина пуста</p> :
				<table>
					<tr>
						{properties.map(property => (
							<th>{property}</th>
						))}
					</tr>
					{items.map(item => (
						<tr>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.quantity}</td>
							<td>{item.price * item.quantity}<button onClick={() => removeFromCart(item.id)}>🗑</button></td>
						</tr>
					))}
					<tr>Итого:{total} <button onClick={clearCart}>Очистить корзину🗑</button></tr>
				</table>

			}
		</div>
	);
}