import React, { useState } from 'react';

import { Input, InputProps } from '@rneui/themed';
import { StyleSheet } from 'react-native';

import { colors } from '~/lib/theme/colors';

export default function CustomInput(props: InputProps) {
  const { errorMessage } = props;
  return (
    <Input
      labelStyle={styles.labelStyleContainer}
      placeholder={''}
      errorStyle={styles.errorStyleContainer}
      inputContainerStyle={{
        borderBottomColor: errorMessage ? colors.red : colors.black,
        borderBottomWidth: 0.45,
      }}
      errorMessage={errorMessage}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  errorStyleContainer: {
    color: colors.red,
  },
  labelStyleContainer: {
    fontSize: 16,
    fontWeight: '500',
  },
});
