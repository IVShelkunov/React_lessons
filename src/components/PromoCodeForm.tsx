import { useState } from "react";
import { applyPromoCode } from "../store/cartSlice";
import { useAppDispatch } from "../store/hooks";

export function PromoCodeForm() {
	const dispatch = useAppDispatch();
	const [inputValue,setInputValue] = useState('');
	const handleChangeInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	}
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(applyPromoCode(inputValue));
		setInputValue('');
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="promo">Промокод:</label>
			<input id="promo" type="text" value={inputValue} onChange={handleChangeInputValue}/>
			<button type="submit">Активировать</button>
		</form>
	);
}