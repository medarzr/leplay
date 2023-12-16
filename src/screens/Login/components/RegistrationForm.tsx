import React from 'react';

import { StyleSheet, View } from 'react-native';

import Button from '~/components/Button/Button';
import CustomInput from '~/components/CustomInput/CustomInput';
import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';

import { MAX_EMAIL_LENGTH, MAX_PASS_LENGTH } from '../hooks/constants';
import { useRegistrationFormContext } from '../hooks/useRegistrationForm';

export default function RegistrationForm() {
  const { values, touched, handleChange, handleSubmit, errors, dirty } =
    useRegistrationFormContext();
  return (
    <View style={styles.container}>
      <>
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
          value={values.passwordOne}
          autoCapitalize="none"
          onChangeText={handleChange('passwordOne')}
          maxLength={MAX_PASS_LENGTH}
          errorMessage={touched.passwordOne ? errors.passwordOne : undefined}
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
        disabled={!dirty}
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
    backgroundColor: colors.primaryGreen,
    marginTop: 12,
  },
  container: {
    paddingTop: 24,
    paddingHorizontal: 45,
    flex: 1,
  },
});
