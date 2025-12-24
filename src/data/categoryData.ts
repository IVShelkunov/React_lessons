import type { FilterCategory } from "../types/types";

export const categories: FilterCategory[] = ['all' , 'work' , 'personal','learn'] ;
  export const nameCategory = (category: FilterCategory):string => {
    switch(category) {
    case 'all':  
      return 'Все';
    case 'work':  
      return 'Работа';
    case 'personal':  
      return 'Личное';
    case 'learn':  
      return 'Учеба';
    }
  }