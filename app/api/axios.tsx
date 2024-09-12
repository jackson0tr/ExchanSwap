import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://backend.exchanswap.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosApi;
