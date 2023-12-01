import React from 'react';

import Toast, { BaseToast, BaseToastProps } from 'react-native-toast-message';

import { colors } from '../theme/colors';

type Props = {
  type: 'success' | 'error' | 'info';
  body: string;
  description?: string;
};

const toaster = (props: Props) => {
  const { type, body, description } = props;

  Toast.show({
    type,
    text1: body,
    text2: description,
    visibilityTime: 5000,
    onPress: Toast.hide,
  });
};
export default toaster;

export const toastConfig = {
  success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.primaryGreen }}
      text1NumberOfLines={3}
    />
  ),
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.red }}
      text1NumberOfLines={3}
    />
  ),
  info: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.orange }}
      text1NumberOfLines={3}
    />
  ),
};
