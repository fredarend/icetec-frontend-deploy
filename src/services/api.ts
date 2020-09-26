import axios from 'axios';

const token = localStorage.getItem('@Icetec:token');

const api = axios.create({
  baseURL: 'https://appdevelopers.fredericobinsfeld.com.br',
});

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export { api, config };
