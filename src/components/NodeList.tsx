import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";
import { deleteNote, fetchNotes } from "../api/notesApi";


export function NodeList() {
	const queryClient = useQueryClient();
	const deleteMutate = useMutation({
		mutationFn: (id:string) => deleteNote(id),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['notes']});
		}
	});
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
                <li key={note.id}>📌 {note.title}<button onClick={() => deleteMutate.mutate(note.id)}>Удалить❌</button></li>
              ))}
            </ul>
          )}
        </div>
	);
}