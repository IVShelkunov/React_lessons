import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import styles from './Layout.module.css';
import { logout } from "../../store/authSlice";

export const Layout = () => {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(state => state.auth.isAuth);
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<nav>
					<NavLink to={'/'} className={styles.link}>Главная</NavLink>
					<NavLink to={'/posts'} className={styles.link}>Все посты</NavLink>
					<NavLink to={'/profile'} className={styles.link}>Профиль</NavLink>
					{isAuth ? <button className={styles.logout} onClick={() => dispatch(logout())} >Выйти</button>:<Link className={styles.login} to={'/login'}>Вход</Link>}
				</nav>
			</header>
			<main className={styles.main}><Outlet/></main>
			<footer className={styles.footer}>2026 ©</footer>
		</div>
	);
}