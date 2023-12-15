import React from 'react';

import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  PressableProps,
} from 'react-native';

import { colors } from '~/lib/theme/colors';

interface ButtonProps extends PressableProps {
  buttonTitle: string;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button = (props: ButtonProps) => {
  const { buttonTitle, buttonStyle, disabled } = props;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonStyle,
        {
          ...(buttonStyle as ViewStyle),
          opacity: pressed || disabled ? 0.5 : 1,
        },
      ]}
      hitSlop={10}
      {...props}
    >
      <Text style={styles.text}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  buttonStyle: {
    backgroundColor: colors.orangeButton,
    borderRadius: 32,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
