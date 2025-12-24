export interface INote {
  id: string,
  title: string,
  category: string,
  date: string
}
export type CreateNoteData = Pick<INote , 'title' | 'category'>;
export type FilterCategory = 'all' | 'work' | 'personal'|'learn'

export interface FilterState {
  value: FilterCategory
}


