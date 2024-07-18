import { City } from '../interfaces/City';

export const clearAll = (setCities: (cities: City[]) => void) => {
  localStorage.setItem('cities', JSON.stringify([]));
  setCities([]);
  window.location.href = '/';
};
