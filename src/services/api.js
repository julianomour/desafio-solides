import axios from 'axios';

const token = sessionStorage.getItem('token');
const api = axios.create({
  baseURL: 'https://solides-back.herokuapp.com/',

  contentType: 'application/json',
  Authorization: `Bearer ${token}`
});
export default api;
