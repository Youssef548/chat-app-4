import axios from 'axios';

// Create a new Axios instance with custom configuration
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers you need
  },
  withCredentials: true,
});

// Example of making a GET request using the custom Axios instance
