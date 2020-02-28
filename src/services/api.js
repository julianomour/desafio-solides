import axios from 'axios';

const api = axios.create({
  baseURL: 'https://solides-back.herokuapp.com',
  contentType: 'application/json'
});
export default api;
