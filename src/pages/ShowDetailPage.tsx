import { useParams } from "react-router-dom";
import type { Show, ShowParams } from "../types/types";
import { useEffect, useState } from "react";

export function ShowDetailPage() {
	const [loading , setLoading] = useState(false);
	const [details , setDetails] = useState<Show | null>(null);
	const params = useParams<ShowParams>();
	const showId = Number(params.showId);
	useEffect(() => {
		const loadDetails = async (showId:number) => {
			setLoading(true);
			try {
				const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
				const showData:Show = await response.json();
				setDetails(showData);
				setLoading(false);
			} catch(error) {
				console.error(error);
				setLoading(false);
			}
		}
		loadDetails(showId);
	},[]);
	if(details) {
		return(
			<div className="show-details">
				<img src={details.image?.medium}/>
				<h2>{details.name}</h2>
				<p><span>{details.summary?.replace('\u003Cp\u003E' , '').replace('\u003C/p\u003E' ,'')}</span></p>
			</div>
		);
	}
}