import React from 'react';

import { StyleSheet, View } from 'react-native';

import Button from '~/components/Button/Button';
import CustomInput from '~/components/CustomInput/CustomInput';
import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';

import {
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PASS_LENGTH,
} from '../hooks/constants';
import { useRegistrationFormContext } from '../hooks/useRegistrationForm';

interface RegistrationFormProps {
  isPending: boolean;
}

export default function RegistrationForm({ isPending }: RegistrationFormProps) {
  const { values, touched, handleChange, handleSubmit, errors, dirty } =
    useRegistrationFormContext();
  return (
    <View style={styles.container}>
      <>
        <CustomInput
          label={i18n.t('auth.firstName')}
          autoComplete="name"
          returnKeyType="next"
          value={values.firstName}
          onChangeText={handleChange('firstName')}
          maxLength={MAX_NAME_LENGTH}
          errorMessage={touched.firstName ? errors.firstName : undefined}
        />
        <CustomInput
          label={i18n.t('auth.lastName')}
          autoComplete="name-family"
          returnKeyType="next"
          value={values.lastName}
          onChangeText={handleChange('lastName')}
          maxLength={MAX_NAME_LENGTH}
          errorMessage={touched.lastName ? errors.lastName : undefined}
        />
        <CustomInput
          label="Email"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
          value={values.email}
          autoCapitalize="none"
          onChangeText={handleChange('email')}
          maxLength={MAX_EMAIL_LENGTH}
          errorMessage={touched.email ? errors.email : undefined}
        />
        <CustomInput
          label={i18n.t('auth.password')}
          autoComplete="password"
          keyboardType="ascii-capable"
          returnKeyType="next"
          value={values.password}
          autoCapitalize="none"
          onChangeText={handleChange('password')}
          maxLength={MAX_PASS_LENGTH}
          errorMessage={touched.password ? errors.password : undefined}
          secureTextEntry
        />
        <CustomInput
          label={i18n.t('auth.repeatPass')}
          autoComplete="password"
          keyboardType="ascii-capable"
          returnKeyType="done"
          value={values.passwordTwo}
          autoCapitalize="none"
          onChangeText={handleChange('passwordTwo')}
          maxLength={MAX_PASS_LENGTH}
          errorMessage={touched.passwordTwo ? errors.passwordTwo : undefined}
          secureTextEntry
        />
      </>
      <Button
        disabled={!dirty || isPending}
        isLoading={isPending}
        onPress={() => handleSubmit()}
        buttonTitle={i18n.t('auth.loginToApp')}
        buttonStyle={styles.greenButtonStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: colors.primaryGreen,
    fontSize: 16,
  },
  forgotButtonContainer: {
    alignItems: 'center',
    padding: 12,
  },
  greenButtonStyle: {
    marginTop: 12,
  },
  container: {
    paddingTop: 24,
    paddingHorizontal: 45,
    flex: 1,
  },
});
