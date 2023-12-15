import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/lib/theme/colors';
import { SportsType } from '~/screens/Map/types';

type SportsIconsProps = {
  type: SportsType;
};
const Icon = (name: string) => (
  <MaterialIcons name={name} size={24} color={colors.primaryGreen} />
);
const SportsIcons = ({ type }: SportsIconsProps) => {
  switch (type) {
    case SportsType.Football:
      return Icon('sports-soccer');
    case SportsType.BasketBall:
      return Icon('sports-basketball');
    case SportsType.Volleyball:
      return Icon('sports-volleyball');
    default:
      return false;
  }
};

export default SportsIcons;
