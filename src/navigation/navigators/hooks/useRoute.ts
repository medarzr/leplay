// eslint-disable-next-line no-restricted-imports
import { useRoute as useRouteBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { Routes } from '~/navigation/routes';

import { NavigationParamList } from '../types';

type RouteProp<RouteName extends Routes> = StackScreenProps<
  NavigationParamList,
  RouteName
>['route'];

export const useRoute = <RouteName extends Routes>() => {
  return useRouteBase<RouteProp<RouteName>>();
};
