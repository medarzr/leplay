import React from 'react';

import { View } from 'react-native';

import { BottomSheetModalProvider } from '~/components/BottomSheet/BottomSheetModalProvider';
import { Compose } from '~/components/Compose';
import { GestureHandlerProvider } from '~/lib/gestureHandler';
import { ToastProvider } from '~/lib/notify/ToastProvider';
import { ThemeProvider } from '~/lib/theme/ThemeProvider';
import { NavigationProvider } from '~/navigation/NavigationProvider';
import RootNavigator from '~/navigation/navigators/RootNavigator';

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <Compose
        components={[
          GestureHandlerProvider,
          ThemeProvider,
          BottomSheetModalProvider,
          NavigationProvider,
        ]}
      >
        <RootNavigator />
      </Compose>
      <ToastProvider />
    </View>
  );
}

export default App;
