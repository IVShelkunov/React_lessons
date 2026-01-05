import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ITicket, PriorityType } from "../types/ticket";
import { createTicket } from "../api/ticketApi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { useEffect } from "react";

export const CreateTicketPage = () => {
	
	interface ICreateTicketForm {
		title: string,
		description: string,
		priority:  PriorityType,
		isUrgent: boolean,
		urgentReason: string
	}
	const userId = useAppSelector(state => state.auth.user?.id);
	const navigate = useNavigate();
	const priorityList: PriorityType[] = ['low', 'medium' , 'high'];
	const priorityName = (priority:PriorityType):string => {
		return priority === 'low'? 'низкий': priority === 'medium'? 'средний':'высокий';
	}
	const {register , handleSubmit,watch,formState: {errors},setError,setValue} = useForm<ICreateTicketForm>({
		defaultValues: {
			title: '',
			description: '',
			priority: 'low',
			isUrgent: false,
			urgentReason: ''
		}
	});
	const [priority , isUrgent] = watch(['priority' , 'isUrgent']);
	const showUrgentCheckbox = priority === 'high';
	const showReasonInput = showUrgentCheckbox && isUrgent;
	const createTicketMutate = useMutation({
		mutationFn: (ticketData: Omit<ITicket,'id'>) => createTicket(ticketData),
		onSuccess: () => {
			navigate('/tickets');
		},
		onError: (e) => {
			setError('root',{message: e.message});
		}
	});
	const onSubmit: SubmitHandler<ICreateTicketForm> = (createTicketData:ICreateTicketForm) => {
		createTicketMutate.mutate({...createTicketData, status: 'open' , userId: userId!});
	}
	useEffect(() => {
		if(priority !== 'high') {
			setValue('isUrgent' , false);
			setValue('urgentReason','');
		}
	},[priority,setValue]);
	return (
		<div className="create-ticket">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="title">название заявки:</label>
					<input id="title" type="text" {...register('title' , {
						required: 'введите название!'
					})}/>
					{errors.title && <div className="error">{errors.title.message}</div>}
				</div>
				<div>
					<label htmlFor="description">описание:</label>
					<input id="description" type="text" {...register('description' , {
						required: 'введите описание!',
						minLength: {value: 10 , message: 'описание должно быть не менее 10 символов'}
					})}/>
					{errors.description && <div className="error">{errors.description.message}</div>}
				</div>
				<div>
					<label htmlFor="priority">приоритет:</label>
					<select id="priority" {...register('priority')}>
						{priorityList.map(item => (
							<option key={item} value={item}>{priorityName(item)}</option>
						))}
					</select>
				</div>
				{showUrgentCheckbox && (
					<div>
						<label style={{display:'inline-block'}} htmlFor="isUrgent">Cрочно!</label>
						<input id="isUrgent" type="checkbox" {...register('isUrgent')}/>
					</div>
				)}
				{showReasonInput && (
					<div>
						<label>опишите почему это срочно?</label>
						<textarea {...register('urgentReason',{
							required: 'напишите причину срочности!'
						})}/>
					</div>
				)}
				<button type="submit">создать заявку</button>
			</form>
		</div>
	);
}