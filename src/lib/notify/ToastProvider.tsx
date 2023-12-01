import React, { FC } from 'react';

import Toast from 'react-native-toast-message';

import { toastConfig } from './toaster';
// import { ToastProps } from 'react-native-toast-notifications/lib/typescript/toast';

// import { colors } from '../theme/colors';

const ToastProvider: FC = () => {
  return <Toast config={toastConfig} />;
};

export { ToastProvider };
