import React, { useState } from 'react';

import { FormikProvider } from 'formik';

import { KeyboardAvoidingProvider } from '~/components/KeyboardAvoiding/KeyboardAvoidingProvider';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { useLoginForm } from './hooks/useLoginForm';
import { useRegistrationForm } from './hooks/useRegistrationForm';
import { ScreenType } from './types';

export default function LoginScreen() {
  const [selector, setSelector] = useState<ScreenType>(ScreenType.Login);
  const { formik: loginFormik } = useLoginForm();
  const { formik: registrationFormik } = useRegistrationForm();
  return (
    <KeyboardAvoidingProvider>
      <Header
        selector={selector}
        setSelector={(screen: ScreenType) => setSelector(screen)}
      />
      <>
        {selector === ScreenType.Registration ? (
          <FormikProvider value={registrationFormik}>
            <RegistrationForm />
          </FormikProvider>
        ) : (
          <FormikProvider value={loginFormik}>
            <LoginForm />
          </FormikProvider>
        )}
      </>
    </KeyboardAvoidingProvider>
  );
}
