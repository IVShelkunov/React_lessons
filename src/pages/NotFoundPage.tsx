import { NavLink } from "react-router-dom"

export const NotFoundPage = () =>  {
	return (
		<div className='not-found'>
			<h1>404 - Страница не найдена</h1>
      		<p>Извините, запрашиваемая страница не существует.</p>
      		<NavLink to={'/'}>Вернуться на главную</NavLink>
		</div>
	)
}