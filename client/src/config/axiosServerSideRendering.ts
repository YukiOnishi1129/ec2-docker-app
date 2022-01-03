import axios from 'axios';

const axiosServerSideRendering = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: 'http://ec2_docker_api:3000/api/v1',
});

export default axiosServerSideRendering;
