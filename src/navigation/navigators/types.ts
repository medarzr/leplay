import React from 'react';

import { ParamListBase } from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackScreenProps,
} from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

import { CodeScreenParams } from '~/screens/Login/CodeScreen';

import { Routes } from '../routes';

// type StackParamList = undefined | { screen: Routes | null };

export interface NavigationParamList extends ParamListBase {
  [Routes.CodeScreen]: CodeScreenParams;
}

type RouteProps<RouteName extends Routes> = StackScreenProps<
  NavigationParamList,
  RouteName
>;

export type Screen<RouteName extends Routes> = React.FC<
  RouteProps<RouteName>
> & {
  options?: () => StackNavigationOptions & StackHeaderOptions;
};
