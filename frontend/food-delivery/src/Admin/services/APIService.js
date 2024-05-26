import axios from 'axios';

const API_URL = 'http://example.com/api'; // Replace with your API URL

class APIService {
    // Example methods for interacting with your API
    getUsers() {
        return axios.get(`${API_URL}/users`);
    }

    getProducts() {
        return axios.get(`${API_URL}/products`);
    }

    // Add more methods as needed
}

export default new APIService();
