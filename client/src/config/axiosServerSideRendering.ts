import axios from 'axios';

const axiosServerSideRendering = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: `${process.env.SERVER_SIDE_API_URL}`,
});

export default axiosServerSideRendering;
