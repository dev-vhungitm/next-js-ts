import { ILogin, IResponse } from '@/models';
import axiosClient from './axios-client';
const apiURL = '/auth';

export const authServices = {
  login: (params: ILogin): Promise<IResponse> => {
    const url = apiURL;
    return axiosClient.post(url, params);
  }
};
