import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export function ProjectsListPage() {
	return (
		<div className="projects">
			<h1>Наши проекты</h1>
			<ul>
				{projectsData.map(project => (
					<li key={project.id}><Link to={`/projects/${project.id}`}>{project.name}</Link></li>
				))}
			</ul>
		</div>
	);
}