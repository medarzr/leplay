import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // background: colors.white,
    // primary: colors.primary,
  },
};

interface NavigationProviderProps {
  children: React.ReactNode;
}
export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
};
