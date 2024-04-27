import axios from 'axios';

const axiosAPI = axios.create({
    baseURL : 'http://localhost:5002/user',
    headers: {'content-type':'application/x-www-form-urlencoded'}
})

export default axiosAPI;