//ProjectsPage.tsx

import { Link, useOutletContext } from "react-router-dom";
import type { ProjectsContextTypes } from "../types/types";



export function ProjectsPage() {
	const {projects} = useOutletContext<ProjectsContextTypes>();
	return (
		<div>
			<h1>Мои проекты</h1>
			<ul>
				{projects.map(project => (
					<li key={project.id}><Link to={'/project'}>Проект #{project.id}</Link></li>
				))}
			</ul>
		</div>
	);
}