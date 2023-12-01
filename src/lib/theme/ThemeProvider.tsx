import React, { PropsWithChildren } from 'react';

import { StatusBar } from 'react-native';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <StatusBar
        animated
        translucent
        backgroundColor="white"
        barStyle="dark-content"
        showHideTransition="fade"
      />
      {children}
    </>
  );
};
