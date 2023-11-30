import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from '../routes';

import TabNavigator from './TabNavigator';

const NativeStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen component={TabNavigator} name={Routes.TabNavigator} />
    </NativeStack.Navigator>
  );
}
