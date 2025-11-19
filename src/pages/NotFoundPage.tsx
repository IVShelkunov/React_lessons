import { NavLink } from "react-router-dom";

//NotFoundPage.tsx
export function NotFoundPage() {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <NavLink to={'/'}>Вернуться на главную</NavLink>
    </div>
    );
}