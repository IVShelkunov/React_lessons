import { NavLink, Outlet } from "react-router-dom";
import styles from './LoginLayout.module.css'
export const LoginLayout = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}><Outlet/></main>
			<nav>
				<NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}`: styles.link} to={'.'} end>
					Вход
				</NavLink>
				<NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}`: styles.link} to={'registration'}>
					Регистрация
				</NavLink>
			</nav>
		</div>
	);
}