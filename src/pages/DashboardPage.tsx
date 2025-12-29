import { FilterPanel } from "../components/FilterPanel";
import { TaskBoard } from "../components/TaskBoard";

export const DashboardPage = () => {
	return (
		<div className='dashboard'>
        	<FilterPanel/>
        	<TaskBoard/>
      	</div>
	);
}