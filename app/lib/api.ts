import axios from 'axios';
import { JobOpening } from '@/app/lib/types';

export const jobOpeningsApi = {
  
  getAll: async (): Promise<JobOpening[]> => {
    const response = await axios.get('/api/job-openings');
    return response.data;
  },

  
  create: async (data: any) => {
    const response = await axios.post('/api/job-openings', data);
    return response.data;
  },
};
