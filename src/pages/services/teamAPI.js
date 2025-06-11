// src/services/teamAPI.js
import axios from 'axios';

const API_URL = "https://wzypjglarryrvhndcxmf.supabase.co/rest/v1/team";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eXBqZ2xhcnJ5cnZobmRjeG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjgyMjQsImV4cCI6MjA2NDYwNDIyNH0.YkPtO41nKRZ9K7wBkI9mLR0-AmUILrwfTmzj5ApzZ58"; 

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const teamAPI = {
  async fetchAll() {
    const res = await axios.get(`${API_URL}?select=*`, { headers });
    return res.data;
  },
  async add(member) {
    const res = await axios.post(API_URL, [member], { headers });
    return res.data;
  },
  async update(id, member) {
    const res = await axios.patch(`${API_URL}?id=eq.${id}`, member, { headers });
    return res.data;
  },
  async remove(id) {
    const res = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    return res.data;
  },
};
