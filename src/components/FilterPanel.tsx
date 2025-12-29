import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchUsers } from "../api/usersApi";
import { changeFilter } from "../store/filterSlice";

export const FilterPanel = () => {
	const {data} = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers
	});
	const dispatch = useAppDispatch();
	const filter = useAppSelector(state => state.filter.value);
	return (
		<div className="filter">

			{data && (
				<select value={filter} onChange={(e) => dispatch(changeFilter(e.target.value))}>
					<option value='all'>Все</option>
					{data.map(user => (
						<option key={user.id} value={user.id}>{user.name}</option>
					))}
				</select>
			)}
		</div>	
	);
		
}