import axios from 'axios';

const BASE_URL = 'https://car-rental-api.goit.global';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
