import { NavLink, Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom";
import type { ProjectParams, ProjectsContextTypes } from "../types/types";

export function ProjectDetailPage() {
	const navigate = useNavigate();
	const {projectId} = useParams<ProjectParams>();
	const {projects} = useOutletContext<ProjectsContextTypes>();
	const currentProject = projects.find(project => project.id === Number(projectId));
	if(currentProject) {
		return(
		<div className="project-detail">
			<h1>{currentProject.name}</h1>
			<nav className="tabs">
				<NavLink to={'.'} end >Описание</NavLink>
				<NavLink to={'tech'}>Технологии</NavLink>
			</nav>
			<div className="show">
				<Outlet/>
				<button onClick={() => navigate('/projects')}>Все проекты</button>
			</div>
		</div>
		);
	}
	
}