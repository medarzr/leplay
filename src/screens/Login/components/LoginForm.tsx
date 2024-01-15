import React from 'react';

import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import Button from '~/components/Button/Button';
import CustomInput from '~/components/CustomInput/CustomInput';
import { useModal } from '~/components/Modal/hooks/useModalContext';
import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';

import { MAX_EMAIL_LENGTH, MAX_PASS_LENGTH } from '../hooks/constants';
import { useLoginFormContext } from '../hooks/useLoginForm';

import ForgotPasswordModal from './ForgotPasswordModal';

interface LoginFormProps {
  isPending: boolean;
}

export default function LoginForm({ isPending }: LoginFormProps) {
  const {
    values,
    touched,
    handleChange,
    handleSubmit,
    errors,
    isValid,
    dirty,
  } = useLoginFormContext();
  const { showModal } = useModal();
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
          returnKeyType="done"
          value={values.password}
          onChangeText={handleChange('password')}
          maxLength={MAX_PASS_LENGTH}
          errorMessage={touched.password ? errors.password : undefined}
          secureTextEntry
        />
      </>
      <>
        <TouchableOpacity
          style={styles.forgotButtonContainer}
          onPress={showModal}
        >
          <Text style={styles.buttonTextStyle}>
            {i18n.t('auth.forgotPass')}
          </Text>
        </TouchableOpacity>
        <Button
          disabled={!isValid || !dirty || isPending}
          isLoading={isPending}
          onPress={() => handleSubmit()}
          buttonTitle={i18n.t('auth.loginToApp')}
          buttonStyle={styles.greenButtonStyle}
        />
      </>
      <ForgotPasswordModal />
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
    marginVertical: 12,
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 45,
  },
});
