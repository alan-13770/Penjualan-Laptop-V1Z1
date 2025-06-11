import axios from "axios";

const API_URL = "https://wzypjglarryrvhndcxmf.supabase.co/rest/v1/faq";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eXBqZ2xhcnJ5cnZobmRjeG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjgyMjQsImV4cCI6MjA2NDYwNDIyNH0.YkPtO41nKRZ9K7wBkI9mLR0-AmUILrwfTmzj5ApzZ58";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation"
};

export const faqAPI = {
  async fetchFaqs() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createFaq(data) {
    const postData = {
      question: data.pertanyaan,
      answer: data.jawaban,
    };

    if (!postData.question || !postData.answer) {
      throw new Error("Pertanyaan dan jawaban wajib diisi");
    }

    const response = await axios.post(API_URL, postData, { headers });
    return response.data;
  },

  async updateFaq(id, data) {
    const url = `${API_URL}?id=eq.${id}`;
    const patchData = {
      question: data.pertanyaan,
      answer: data.jawaban,
    };

    const response = await axios.patch(url, patchData, { headers });
    return response.data;
  },

  async deleteFaq(id) {
    const url = `${API_URL}?id=eq.${id}`;
    await axios.delete(url, { headers });
  }
};