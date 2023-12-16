import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { SvgIcons } from '~/assets/svg';
import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';
import { entireScreenHeight } from '~/utils/device';

import { ScreenType } from '../types';

interface HeaderProps {
  selector: ScreenType;
  setSelector: (screen: ScreenType) => void;
}

interface SelectButtonProps {
  selector: ScreenType;
  title: string;
  typeOfButton: ScreenType;
  onPress: () => void;
}

const SelectButton = ({
  title,
  selector,
  typeOfButton,
  onPress,
}: SelectButtonProps) => (
  <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
    {selector === typeOfButton && <View style={styles.picedLineContainer} />}
  </TouchableOpacity>
);

export default function Header(props: HeaderProps) {
  const { selector, setSelector } = props;
  return (
    <View style={styles.upComponent}>
      <View style={styles.inUpContainer}>
        <SvgIcons.LeplayLogo />
        <View style={styles.buttonContainer}>
          <SelectButton
            title={i18n.t('auth.login')}
            selector={selector}
            typeOfButton={ScreenType.Login}
            onPress={() => setSelector(ScreenType.Login)}
          />
          <SelectButton
            title={i18n.t('auth.registration')}
            selector={selector}
            typeOfButton={ScreenType.Registration}
            onPress={() => setSelector(ScreenType.Registration)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upComponent: {
    height: entireScreenHeight / 2.5,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inUpContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
    padding: 8,
  },
  picedLineContainer: {
    position: 'absolute',
    backgroundColor: colors.primaryGreen,
    height: 3,
    bottom: 0,
    width: '100%',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
  },
});
