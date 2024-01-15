import axios from 'axios';
import Config from 'react-native-config';

import { RegistrationDataType } from './types';

const apiReg = Config.API_REGISTRATION;
const apiAuth = Config.API_AUTHENTICATION;

const getAxiosRequestWithToken = (accessToken: string) =>
  axios.create({
    headers: {
      authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });

const getAxiosRequest = () =>
  axios.create({
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  });

export default {
  checkEmail(email: string) {
    const request = getAxiosRequest();
    return request.get(`${apiReg}/registration/check-emaill/${email}`);
  },
  registration(data: RegistrationDataType) {
    const request = getAxiosRequest();
    return request.post(`${apiReg}/registration`, data);
  },
  validateEmail(login: string, code: string, area: number) {
    const request = getAxiosRequest();
    return request.get(
      `${apiAuth}/otp/validate?login=${login}&code=${code}&area=${area}`,
    );
  },
  auth(login: string, password: string) {
    const request = getAxiosRequest();
    return request.get(
      `${apiAuth}/authentication?login=${login}&password=${password}`,
    );
  },
};
