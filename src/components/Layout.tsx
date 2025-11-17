import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<div className="layout">
			<header>Блог</header>
			<main>
				<Outlet/>
			</main>
			<footer>2025©</footer>
		</div>
	);
}