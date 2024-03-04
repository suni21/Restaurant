import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Adjust based on your JSON Server port
});

export default instance;