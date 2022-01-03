import axios from 'axios';

const globalAxios = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: 'http://localhost:4000/api/v1',
});

export default globalAxios;
