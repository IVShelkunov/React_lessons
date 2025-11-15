//HomePage.tsx
import { useNavigate } from "react-router-dom";


export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Главная страница</h1>
      <p>Приветствуем вас на нашем сайте</p>
      <button onClick={()=> navigate('/about')}>Перейти на страницу "О нас" программно</button>
    </div>
  );
}
