import { strings } from '@/constants';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
};

const axiosClient = axios.create({
  baseURL: strings.apiURL,
  headers: headers
});

// Add a request interceptor
axiosClient.interceptors.request.use(config => {
  // Set token
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  response => {
    const statusCode = response.status;
    response = response.data;

    return { ...response, statusCode };
  },
  error => {
    const statusCode = error.response.status;
    error = error.response?.data || error.response;

    return { ...error, statusCode };
  }
);

export default axiosClient;
