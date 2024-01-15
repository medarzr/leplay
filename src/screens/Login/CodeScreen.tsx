import React, { useEffect, useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';

import TransparentButton from '~/components/Button/TransparentButton';
import CodeInput from '~/components/CodeInput/CodeInput';
import { KeyboardAvoidingProvider } from '~/components/KeyboardAvoiding/KeyboardAvoidingProvider';
import { i18n } from '~/lib/localization/localize';
import { useAuthStore } from '~/lib/store/stores/AuthStore/useAuthStore';
import { colors } from '~/lib/theme/colors';
import { useRoute } from '~/navigation/navigators/hooks/useRoute';
import { Routes } from '~/navigation/routes';

import ForgotPasswordModal from './components/ForgotPasswordModal';
import Header from './components/Header';
import useValidateEmail from './hooks/apiHooks/useValidateEmail';

export interface CodeScreenParams {
  email: string;
  numberOfAuth: number;
}

export const CodeScreen = () => {
  const [value, setValue] = useState('');
  const route = useRoute<Routes.CodeScreen>();
  const { email, numberOfAuth } = route.params;
  const { data, refetch, isLoading, isError, isLoadingError } =
    useValidateEmail(email, value, numberOfAuth);
  const { setTokens } = useAuthStore();
  useEffect(() => {
    if (value.length !== 6) {
      return;
    }
    refetch();
  }, [value, refetch]);
  useEffect(() => {
    if (data) {
      setTokens(data.access_token, data.refresh_token);
    }
  }, [data]);

  console.log('val', isError, isLoadingError, data);
  return (
    <KeyboardAvoidingProvider>
      <Header />
      <View style={styles.container}>
        <View style={styles.upContainer}>
          <CodeInput
            value={value}
            onChange={val => setValue(val)}
            isError={isError}
          />
        </View>
        <View style={styles.downContainer}>
          <Text style={styles.textStyle}>{i18n.t('auth.codeDesc')}</Text>
          <TransparentButton
            disabled={isLoading}
            isLoading={isLoading}
            onPress={() => refetch()}
            buttonStyle={{ marginVertical: 16 }}
            buttonTitle={i18n.t('auth.resendCode')}
            activityColor={colors.grayDescriptionText}
          />
        </View>
      </View>
      <ForgotPasswordModal />
    </KeyboardAvoidingProvider>
  );
};
export default CodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 15,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.grayDescriptionText,
    textAlign: 'center',
  },
  upContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  downContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
