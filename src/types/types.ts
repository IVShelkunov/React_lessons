export interface Project {
	id: number , 
	name: string
}
export type ProjectsContextTypes = {
	projects: Project[]
}
export type ProjectParams = {
	projectId: string
}