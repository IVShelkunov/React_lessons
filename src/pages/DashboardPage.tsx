import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeStatusTicket, fetchTicketsByUserId } from "../api/ticketApi";
import { useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";
import type { ITicket} from "../types/ticket";

export const DashboardPage = () => {
	const queryClient = useQueryClient();
	//получение заявок
	const userId = useAppSelector(state => state.auth.user?.id);
	const {data, isLoading,isError,error} = useQuery({
		queryKey: ['tickets' , userId],
		queryFn: () => fetchTicketsByUserId(userId!)
	});
	//изменение статуса
	const statusTicketsMutate = useMutation({
		mutationFn: ({id , status}:Pick<ITicket , 'id' | 'status'> ) => changeStatusTicket({id,status}),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['tickets']});
		}
	});
	return (
		<div className="dashboard">
		{isLoading && <div>загрузка заявок...</div>}
		{isError && <div className="error">{error.message}</div>}
		{data && (
			<div>
			{data.length === 0 ? (
				<div>
					<p>У вас нет заявок</p>
					<Link to={'/create'}>Создать</Link>
				</div>
			):(
			<ul>
				{data.map(ticket => (
					<li key={ticket.id}>
						<span className={ticket.status === 'open'? ticket.priority: ticket.status}>📌{ticket.title}</span>
						{ticket.status === 'open' ? <button onClick={() => statusTicketsMutate.mutate({id: ticket.id,status:'close'})}>Закрыть заявку</button>:
						<button onClick={() => statusTicketsMutate.mutate({id: ticket.id,status:'open'})}>Восстановить заявку</button>
						}
					</li>
				))}
			</ul>
			)}
			
		</div>
		)}
		</div>
		
	);
}