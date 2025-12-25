import type { FilterCategory } from "../types/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeFilter } from "../store/filterSlice";
import { categories, nameCategory } from "../data/categoryData";
  
export function FilterPanel() {
	const dispatch = useAppDispatch();
	const currentFilter = useAppSelector(state => state.filter.value);
  
	return (
		<div className='filter'>
          <select value={currentFilter} onChange={(e) => dispatch(changeFilter(e.target.value as FilterCategory))}>
            {categories.map(category => (
              <option key={category} value={category}>{nameCategory(category)}</option>
            ))}
          </select>
        </div>
	);
}