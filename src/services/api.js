import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  baseURL: process.env.APIURL,
  contentType: 'application/json'
});
export default api;
