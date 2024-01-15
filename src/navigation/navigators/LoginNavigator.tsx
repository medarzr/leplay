import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuthStore } from '~/lib/store/stores/AuthStore/useAuthStore';
import CodeScreen from '~/screens/Login/CodeScreen';
import LoginScreen from '~/screens/Login/LoginScreen';
import ProfileScreen from '~/screens/Profile/ProfileScreen';

import { Routes } from '../routes';

const NativeStack = createNativeStackNavigator();

export default function LoginNavigator() {
  const { isAuth } = useAuthStore();
  return (
    <NativeStack.Navigator
      screenOptions={{ headerShown: false, animation: 'fade' }}
    >
      {isAuth ? (
        <>
          <NativeStack.Screen
            component={ProfileScreen}
            name={Routes.ProfileScreen}
          />
        </>
      ) : (
        <>
          <NativeStack.Screen
            component={LoginScreen}
            name={Routes.LoginScreen}
          />
          <NativeStack.Screen component={CodeScreen} name={Routes.CodeScreen} />
        </>
      )}
    </NativeStack.Navigator>
  );
}
