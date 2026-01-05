type StatusType = 'open' | 'close';
export type PriorityType = 'low' | 'medium' | 'high';
export interface ITicket {
	id: string,
    title: string,
    description: string,
    priority: string,
    isUrgent: boolean,
    urgentReason?: string
    status: StatusType,
    userId: string
}