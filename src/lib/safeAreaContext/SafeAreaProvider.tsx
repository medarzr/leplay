import React, { FC, PropsWithChildren } from 'react';

import { SafeAreaProvider as SafeAreaProviderRN } from 'react-native-safe-area-context';

export const SafeAreaProvider: FC<PropsWithChildren> = ({ children }) => (
  <SafeAreaProviderRN style={{ flex: 1 }}>{children}</SafeAreaProviderRN>
);
