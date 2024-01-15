import React from 'react';

import { View } from 'react-native';

import { BottomSheetModalProvider } from '~/components/BottomSheet/BottomSheetModalProvider';
import { Compose } from '~/components/Compose';
import { ModalProvider } from '~/components/Modal/hooks/useModalContext';
import { GestureHandlerProvider } from '~/lib/gestureHandler';
import { ToastProvider } from '~/lib/notify/ToastProvider';
import { QueryProvider } from '~/lib/queryProvider';
import { SafeAreaProvider } from '~/lib/safeAreaContext';
import { ThemeProvider } from '~/lib/theme/ThemeProvider';
import { NavigationProvider } from '~/navigation/NavigationProvider';
import RootNavigator from '~/navigation/navigators/RootNavigator';

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <Compose
        components={[
          GestureHandlerProvider,
          SafeAreaProvider,
          ThemeProvider,
          BottomSheetModalProvider,
          NavigationProvider,
          QueryProvider,
          ModalProvider,
        ]}
      >
        <RootNavigator />
      </Compose>
      <ToastProvider />
    </View>
  );
}

export default App;
