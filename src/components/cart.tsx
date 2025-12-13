import { clearCart } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { CartItem } from "./CartItem";
import { PromoCodeForm } from "./PromoCodeForm";

export function Cart() {
	const dispatch = useAppDispatch();
	const promoStatus = useAppSelector(state => state.cart.promoStatus);
	const discount = useAppSelector(state => state.cart.discount);
	const cartList = useAppSelector(state => state.cart.cartList);
	const preTotal = cartList.map(item => item.price * item.quantity).reduce((acc,item) => {
		return acc + item;
	},0);
	const total = preTotal - (preTotal * discount/100);
	return (
		<div className="cart">
			<h2>Корзина🛒</h2>
			{cartList.length === 0 ? <p>корзина пуста</p> : (
				<div>
					<button onClick={() => dispatch(clearCart())}>Очистить корзину🗑</button>
					<table>
						{cartList.map(item => (
							<CartItem key={item.id} cartItem={item}/>
						))}
					</table>
					<PromoCodeForm/>
					{promoStatus === 'loading' && <div className="spinner cart-spin"></div>}
					{promoStatus === 'succeeded'&& <p className="succes-promo">промокод активирован</p>} 
					{promoStatus === 'failed' && <p className="error">Ошибка активации промокода</p>}
					{discount !== 0 && <p className="discount">Скидка: -{discount}%</p>}
				</div>
				
			)}
			
			
			{cartList.length !== 0 && <p>Итого: {total.toFixed(2)}$</p>}
		</div>
	);
}