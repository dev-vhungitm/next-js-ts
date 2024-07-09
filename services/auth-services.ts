import { Login } from '@/models';
import axiosClient from './axios-client';
const apiURL = '/auth';

export const authServices = {
  login: (params: Login) => {
    const url = apiURL;
    return axiosClient.post(url, params);
  }
};
