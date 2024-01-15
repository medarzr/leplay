import React, { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { StyleSheet, Text, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';

interface CodeInputProps {
  value: string;
  onChange: (val: string) => void;
  isError?: boolean;
}
const CELL_COUNT = 6;
export default function CodeInput({
  onChange,
  isError,
  value,
}: CodeInputProps) {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const queryClient = useQueryClient();
  const onFocusFunction = () => {
    if (isError) queryClient.clear();
  };
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange,
  });

  const renderCell = useCallback(
    ({
      index,
      symbol,
      isFocused,
    }: {
      symbol: string;
      isFocused: boolean;
      index: number;
    }) => (
      <View
        key={index}
        style={[styles.cell, { marginRight: index === 2 ? 36 : 12 }]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {isFocused && (
          <Text style={{ color: colors.primaryGreen, fontSize: 30 }}>
            <Cursor />
          </Text>
        )}
        <Text style={styles.symbolStyle}>{symbol}</Text>
        <View
          style={[
            styles.bottomLine,
            {
              backgroundColor: isError
                ? colors.red
                : symbol
                  ? colors.primaryGreen
                  : colors.black,
            },
          ]}
        />
      </View>
    ),
    [getCellOnLayoutHandler],
  );
  return (
    <>
      <Text style={styles.descStyle}>{i18n.t('auth.enterCode')}</Text>
      <CodeField
        ref={ref}
        {...props}
        autoFocus
        onFocus={onFocusFunction}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        renderCell={renderCell}
        textContentType="oneTimeCode"
        value={value}
        onChangeText={onChange}
        rootStyle={{ marginVertical: 30, maxWidth: 300 }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cell: {
    minWidth: 30,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    borderRadius: 100,
  },
  symbolStyle: {
    fontSize: 30,
    color: colors.black,
    fontWeight: '500',
  },
  descStyle: {
    fontSize: 18,
    color: colors.grayDescriptionText,
    fontWeight: '500',
    textAlign: 'center',
  },
});
