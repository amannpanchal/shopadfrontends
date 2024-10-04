import axios from 'axios';
const backendUrl = "https://shopad-backend-three.vercel.app/";
const token = localStorage.getItem("admintoken");

const axiosInstance  = axios.create({
    baseURL: backendUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
    }
})

export default axiosInstance ;