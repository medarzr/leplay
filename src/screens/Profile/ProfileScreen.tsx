import React from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { View } from 'react-native';

import Button from '~/components/Button/Button';
import { useAuthStore } from '~/lib/store/stores/AuthStore/useAuthStore';

export default function ProfileScreen() {
  const { clearTokens } = useAuthStore();
  const queryClient = useQueryClient();
  const logout = () => {
    clearTokens();
    queryClient.invalidateQueries();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button buttonTitle={'LogOut'} onPress={logout} />
    </View>
  );
}
