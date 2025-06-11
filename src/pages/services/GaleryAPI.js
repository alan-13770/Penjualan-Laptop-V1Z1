
import axios from 'axios';

const API_URL = "https://wzypjglarryrvhndcxmf.supabase.co/rest/v1/gallery_items";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eXBqZ2xhcnJ5cnZobmRjeG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjgyMjQsImV4cCI6MjA2NDYwNDIyNH0.YkPtO41nKRZ9K7wBkI9mLR0-AmUILrwfTmzj5ApzZ58";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

export const galleryAPI = {
  async fetchGalleryItems() {
    try {
      const response = await axios.get(API_URL, { headers });
      return response.data;
    } catch (error) {
      console.error("Fetch gagal:", error);
      return [];
    }
  },

  async insertGalleryItem(item) {
    try {
      const response = await axios.post(API_URL, item, { headers });
      return response.data;
    } catch (error) {
      console.error("Insert gagal:", error.response?.data || error.message);
    }
  },

  async updateGalleryItem(id, item) {
    try {
      const response = await axios.patch(`${API_URL}?id=eq.${id}`, item, { headers });
      return response.data;
    } catch (error) {
      console.error("Update gagal:", error.response?.data || error.message);
    }
  },

  async deleteGalleryItem(id) {
    try {
      const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
      return response.data;
    } catch (error) {
      console.error("Delete gagal:", error.response?.data || error.message);
    }
  }
};
