import axios from "axios";

const API_URL = "https://wzypjglarryrvhndcxmf.supabase.co/rest/v1/career";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eXBqZ2xhcnJ5cnZobmRjeG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjgyMjQsImV4cCI6MjA2NDYwNDIyNH0.YkPtO41nKRZ9K7wBkI9mLR0-AmUILrwfTmzj5ApzZ58"; 

const headers = {
  apikey: API_KEY.replace("Bearer ", ""),
  Authorization: API_KEY,
  "Content-Type": "application/json",
};

export const careerAPI = {
  async fetchAll() {
    const res = await axios.get(API_URL, { headers });
    return res.data;
  },

  async create(job) {
    const res = await axios.post(API_URL, job, { headers });
    return res.data;
  },

  async update(id, job) {
    const res = await axios.patch(`${API_URL}?id=eq.${id}`, job, { headers });
    return res.data;
  },

  async delete(id) {
    const res = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    return res.data;
  },
};

