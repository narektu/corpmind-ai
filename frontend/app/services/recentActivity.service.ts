import { API_BASE_URL, handleResponse } from './main.service';
import { DocumentActivity } from '../interfaces';

export const recentActivityService = {
  getAll: async (): Promise<DocumentActivity[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/activity`);
      return await handleResponse(response);
    } 
    catch (error) {
      console.error('Activity Service Error:', error);
      return [];
    }
  }
};