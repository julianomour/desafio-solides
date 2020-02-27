import axios from 'axios';

const token = sessionStorage.getItem('token');
const api = axios.create({
  baseURL: 'http://localhost:3333',

  contentType: 'application/json',
  Authorization: `Bearer ${token}`
});
export default api;
