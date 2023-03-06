import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers : {"Content-Type": "application/json"} 
  // commonly required header specifications 
});

export default api;
