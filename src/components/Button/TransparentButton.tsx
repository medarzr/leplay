import React from 'react';

import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  PressableProps,
  ActivityIndicator,
} from 'react-native';

import { colors } from '~/lib/theme/colors';

interface ButtonProps extends PressableProps {
  buttonTitle: string;
  buttonStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  activityColor?: string;
}

const TransparentButton = (props: ButtonProps) => {
  const {
    buttonTitle,
    buttonStyle,
    disabled,
    isLoading,
    activityColor = colors.white,
  } = props;
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
      {isLoading ? (
        <ActivityIndicator color={activityColor} />
      ) : (
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      )}
    </Pressable>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  buttonText: {
    color: colors.primaryGreen,
    fontSize: 16,
    fontWeight: '300',
  },
  buttonStyle: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
