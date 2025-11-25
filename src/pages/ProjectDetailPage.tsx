import { useParams } from "react-router-dom";
import type { ProjectParams } from "../types/types";
import { projectsData } from "../data/projectsData";

export function ProjectDetailPage() {
	const {projectId} = useParams<ProjectParams>();
	const selectedProject = projectsData.find(project => project.id === Number(projectId));
	if(selectedProject) {
		return (
			<div className="project-detail">
				<h1>{selectedProject.name}</h1>
				<p>{selectedProject.description}</p>
				<h3>Задачи проекта:</h3>
				<ul>
					{selectedProject.tasks.map(task => (
						<li key={task}>{task}</li>
					))}
				</ul>
			</div>
			);
	}
}