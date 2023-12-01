import React from 'react';

import { View } from 'react-native';

import { Compose } from '~/components/Compose';
import { ToastProvider } from '~/lib/notify/ToastProvider';
import { ThemeProvider } from '~/lib/theme/ThemeProvider';
import { NavigationProvider } from '~/navigation/NavigationProvider';
import RootNavigator from '~/navigation/navigators/RootNavigator';

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <Compose components={[ThemeProvider, NavigationProvider]}>
        <RootNavigator />
      </Compose>
      <ToastProvider />
    </View>
  );
}

export default App;
