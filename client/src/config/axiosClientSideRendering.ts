import axios from 'axios';

const axiosClientSideRendering = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: `${process.env.NEXT_PUBLIC_CLIENT_SIDE_API_URL}`,
});

export default axiosClientSideRendering;
