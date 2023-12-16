import React from 'react';

import { StyleSheet } from 'react-native';

import Button from '~/components/Button/Button';
import CustomInput from '~/components/CustomInput/CustomInput';
import Modal from '~/components/Modal/Modal';
import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';

import { MAX_EMAIL_LENGTH } from '../hooks/constants';
import { useForgotPasswordForm } from '../hooks/useForgotPasswordForm';

export default function ForgotPasswordModal() {
  const {
    formik: {
      values,
      handleChange,
      touched,
      errors,
      handleSubmit,
      isValid,
      dirty,
    },
  } = useForgotPasswordForm();
  return (
    <Modal
      title={i18n.t('auth.changePass')}
      description={i18n.t('auth.changePassDesc')}
    >
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
      <Button
        disabled={!isValid || !dirty}
        onPress={() => handleSubmit()}
        buttonTitle={i18n.t('auth.send')}
        buttonStyle={{ ...styles.greenButtonStyle }}
      />
    </Modal>
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
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 45,
  },
});
