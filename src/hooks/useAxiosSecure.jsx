import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://openlibrary.org',
});

export default function useAxiosSecure() {
    return axiosSecure;
}
