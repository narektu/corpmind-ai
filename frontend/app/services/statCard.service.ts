import { API_BASE_URL, handleResponse } from './main.service';
import { StatCardProps } from '../interfaces';

export const statCardService = {
  getAll: async (): Promise<StatCardProps[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/stats`); 
      return await handleResponse(response);
    } 
    catch (error) {
      console.error('Stats Service Error:', error);
      return [];
    }
  }
};