// services/songApi.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const songApi = {
  getAll: async (filters) => {
    let url = '/api/songs/';
    
    // Add query parameters if filters are provided
    if (filters) {
      const params = new URLSearchParams();
      if (filters.genre) params.append('genre', filters.genre);
      if (filters.artist) params.append('artist', filters.artist);
      if (filters.is_famous !== undefined) params.append('is_famous', filters.is_famous.toString());
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
    }
    
    const response = await api.get(url);
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/api/songs/${id}/`);
    return response.data;
  },
  
  // For file uploads, we need to use FormData
  create: async (songData) => {
    const response = await api.post('/api/songs/', songData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  update: async (id, songData) => {
    const response = await api.patch(`/api/songs/${id}/`, songData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  delete: async (id) => {
    await api.delete(`/api/songs/${id}/`);
  }
};

export default songApi;