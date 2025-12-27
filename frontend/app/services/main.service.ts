export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function handleResponse(response: Response) {
   if (!response.ok) {
     const errorData = await response.json().catch(() => ({}));
     throw new Error(errorData.detail || 'Network response was not ok');
   }
   return response.json();
 }