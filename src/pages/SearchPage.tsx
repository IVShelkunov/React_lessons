import React, { useState } from "react";
import { useShowStore } from "../store/showStore";
import { ShowResultItem } from "../components/ShowResultItem";

export function SearchPage() {
	const searchResults = useShowStore(state => state.searchResults);
	const searchShows =  useShowStore(state => state.searchShows);
	const isLoading = useShowStore(state => state.isLoading);
	const [inputValue , setInputValue] = useState('');
	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchShows(inputValue);
		setInputValue('');
	}
	const isEmptyQuery = inputValue.trim() === '';
	return (
		<div className="search">
			<form onSubmit={handleSubmit}>
				<input type="search" value={inputValue} onChange={handleChangeInputValue}/>
				<button type="submit" disabled={isEmptyQuery}>Найти</button>
			</form>
			<div className="search-result">
				{isLoading ? <p>Загрузка...</p>: (
					<ul>
					{searchResults.map(show => (
						<ShowResultItem key={show.id} show={show}/>
					))}
				</ul>
				)}
				
			</div>
		</div>
	);
}