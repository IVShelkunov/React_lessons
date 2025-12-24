import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";
import { fetchNotes } from "../api/notesApi";

export function NodeList() {
	const filter = useAppSelector(state => state.filter.value);
	const {data, isLoading , isError,error} = useQuery({
		queryKey: ['notes' , filter],
		queryFn: () => fetchNotes(filter === 'all' ? undefined: filter)
	});
	return (
		<div className='note-list'>
          {isLoading && <div>загрузка заметок...</div>}
          {isError && <div>{error.message}</div>}
          {data && (
            <ul>
              {data.map(note => (
                <li>{note.title}</li>
              ))}
            </ul>
          )}
        </div>
	);
}