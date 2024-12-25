import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // This should point to your backend server
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
});

export default axiosInstance;