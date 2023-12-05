import React, { FC, PropsWithChildren } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const GestureHandlerProvider: FC<PropsWithChildren> = ({ children }) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    {children}
  </GestureHandlerRootView>
);
