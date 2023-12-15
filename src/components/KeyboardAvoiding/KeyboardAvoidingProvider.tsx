import React, { FC, PropsWithChildren, useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';

import { colors } from '~/lib/theme/colors';

export const KeyboardAvoidingProvider: FC<PropsWithChildren> = ({
  children,
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
      contentContainerStyle={styles.container}
      style={{ backgroundColor: colors.white }}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
