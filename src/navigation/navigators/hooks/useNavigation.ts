/* eslint-disable no-restricted-imports */
import { useCallback, useMemo } from 'react';

import { useNavigation as useUntypedNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Keyboard } from 'react-native';

import { Routes } from '~/navigation/routes';

import { NavigationParamList } from '../types';

export const useNavigation = () => {
  const navigation =
    useUntypedNavigation<StackNavigationProp<NavigationParamList, Routes>>();

  const goBack = useCallback(() => {
    // that's a bug fix, don't touch it :-)
    Keyboard.dismiss();
    navigation.goBack();
  }, [navigation]);

  return useMemo(() => ({ ...navigation, goBack }), [navigation, goBack]);
};
