import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import type { ProjectParams, ProjectsContextTypes } from "../types/types";

export function ProjectDetailPage() {
	const navigate = useNavigate();
	const {projectId} = useParams<ProjectParams>();
	const {projects} = useOutletContext<ProjectsContextTypes>();
	const currentProject = projects.find(project => project.id === Number(projectId));
	if(currentProject) {
		return(
		<div>
			<h1>{currentProject.name}</h1>
			<button onClick={() => navigate('/projects')}>Все проекты</button>
		</div>
		);
	}
	
}