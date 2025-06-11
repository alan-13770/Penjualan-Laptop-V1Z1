import axios from "axios";

const API_URL = "https://wzypjglarryrvhndcxmf.supabase.co/rest/v1/blog";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eXBqZ2xhcnJ5cnZobmRjeG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjgyMjQsImV4cCI6MjA2NDYwNDIyNH0.YkPtO41nKRZ9K7wBkI9mLR0-AmUILrwfTmzj5ApzZ58"; 

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};