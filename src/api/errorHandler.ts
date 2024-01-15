import { DefaultError } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { i18n } from '~/lib/localization/localize';
import toaster from '~/lib/notify/toaster';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError;
  }
}
export const errorHandler = (error: DefaultError) => {
  try {
    console.log(`Something went wrong`, error?.response);
    switch (true) {
      case error?.response?.status === 400 &&
        (error.response.data as { title?: string })?.title ===
          'OTP is not valid':
        toaster({
          type: 'error',
          body: i18n.t('errors.incorrectCode'),
        });
        break;
      case error?.response?.status === 400 &&
        (error.response.data as { title?: string })?.title ===
          'One or more validation errors occurred':
        toaster({
          type: 'error',
          body: i18n.t('errors.incorrectEmailOrPassword'),
        });
        break;
      case error?.response?.status === 400 &&
        (error.response.data as { title?: string })?.title ===
          'OTP can not be generate. Please wait.':
        toaster({
          type: 'error',
          body: i18n.t('errors.otpError'),
        });
        break;
      default: {
        toaster({
          type: 'error',
          body: i18n.t('errors.errorDefault'),
        });
        break;
      }
    }
  } catch (e) {
    console.log(`e`, e);
  }
};
export default errorHandler;
