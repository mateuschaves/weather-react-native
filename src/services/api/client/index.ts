import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { constants } from '~/config';
import errorHandler from './errorHandler';

const instance = axios.create({
  baseURL: constants.BASE_URL,
});

const client = async (options: AxiosRequestConfig, handlerError = true) => {
  const onSuccess = (response: AxiosResponse) => response;

  const onError = (error: AxiosError) => errorHandler(error, handlerError);

  try {
    const response = await instance(options);
    return onSuccess(response);
  } catch (error: any) {
    return onError(error);
  }
};

export default client;
