import React, { FC } from 'react';

import Toast from 'react-native-toast-message';

import { toastConfig } from './toaster';

const ToastProvider: FC = () => {
  return <Toast config={toastConfig} />;
};

export { ToastProvider };
