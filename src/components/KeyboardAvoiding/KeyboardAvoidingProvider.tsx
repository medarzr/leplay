import React, { FC, useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';

import { colors } from '~/lib/theme/colors';

interface KeyboardAvoidingProviderProps {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export const KeyboardAvoidingProvider: FC<KeyboardAvoidingProviderProps> = ({
  children,
  contentContainerStyle,
  style,
}) => {
  const onFocusEffect = useCallback(() => {
    // This should be run when screen gains focus - enable the module where it's needed
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    AvoidSoftInput.setAvoidOffset(30);
    return () => {
      // This should be run when screen loses focus - disable the module where it's not needed, to make a cleanup
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, []);

  useFocusEffect(onFocusEffect); //
  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={{
        ...styles.container,
        ...(contentContainerStyle as ViewStyle),
      }}
      style={{ backgroundColor: colors.white, ...(style as ViewStyle) }}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
});
