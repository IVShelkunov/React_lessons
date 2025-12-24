import { useState } from "react";
import type { FilterCategory } from "../types/types";
import { useAppDispatch } from "../store/hooks";
import { changeFilter } from "../store/filterSlice";
import { categories, nameCategory } from "../data/categoryData";
  
export function FilterPanel() {
	const dispatch = useAppDispatch();
	const [filter, setFilter] = useState<FilterCategory>('all');
  	const handleChangeFilter = (e:React.ChangeEvent<HTMLSelectElement>) => {
  		const filterValue = e.target.value as FilterCategory;
    	setFilter(filterValue);
      dispatch(changeFilter(filterValue));
      
  	}
  
	return (
		<div className='filter'>
          <select value={filter} onChange={handleChangeFilter}>
            {categories.map(category => (
              <option key={category} value={category}>{nameCategory(category)}</option>
            ))}
          </select>
        </div>
	);
}