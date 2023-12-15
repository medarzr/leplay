import React, { useState } from 'react';

import { FormikProvider } from 'formik';
import { View, StyleSheet } from 'react-native';

import { KeyboardAvoidingProvider } from '~/components/KeyboardAvoiding/KeyboardAvoidingProvider';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import { useLoginForm } from './hooks/useLoginForm';
import { ScreenType } from './types';

export default function LoginScreen() {
  const [selector, setSelector] = useState<ScreenType>(ScreenType.Login);
  const { formik } = useLoginForm();
  return (
    <KeyboardAvoidingProvider>
      <Header
        selector={selector}
        setSelector={(screen: ScreenType) => setSelector(screen)}
      />
      <FormikProvider value={formik}>
        <View style={styles.formContainer}>
          {selector === ScreenType.Registration ? <View /> : <LoginForm />}
        </View>
      </FormikProvider>
    </KeyboardAvoidingProvider>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 0.55,

    // marginHorizontal: 45,
  },
});
