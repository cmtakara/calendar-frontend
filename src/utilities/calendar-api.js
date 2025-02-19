// calendar-api.js
import axios from 'axios';

// set up the base url for the route
const LOCAL_URL = 'http://localhost:5050';
const DEPLOY_URL = 'https://calendar-backend-76zw.onrender.com';
const API_URL = '/api/calendar';
// const URL = LOCAL_URL + API_URL;
const URL = DEPLOY_URL + API_URL;

export async function getAllEntries() {
    const response = await axios.get(URL);
    return response.data;
}

export async function getUserEntries(user) {
    const response = await axios.get(URL);
    return response.data;
}