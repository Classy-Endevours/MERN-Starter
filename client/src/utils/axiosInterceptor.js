import axios from 'axios';
import { LOGIN_ROUTE } from '../constant/routes';

const requestInterceptor = () => {
  axios.interceptors.request.use(async (req) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      req.headers.common.Authorization = token;
    }
    return req;
  });
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        window.location = LOGIN_ROUTE;
      }
      return error;
    },
  );
};
export default requestInterceptor;
