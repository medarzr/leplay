import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';
import { ScheduleItem } from '~/screens/Map/types';

import { DescriptionTitle } from '../SportCard';

type BottomSheetComponentProps = {
  schedule: ScheduleItem[];
};

const ScheduleComponent = (props: BottomSheetComponentProps) => {
  const { schedule } = props;
  return (
    <View style={{ paddingBottom: 14 }}>
      <DescriptionTitle title={i18n.t('sportCard.schedule')} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {schedule?.map(item => (
          <View key={item.day} style={styles.itemContainer}>
            <Text style={styles.itemText}>{`${item.day} ${item.time}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ScheduleComponent;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 3,
    marginRight: 6,
    marginVertical: 3,
    padding: 6,
  },
  itemText: {
    fontSize: 13,
    color: colors.white,
    fontWeight: '400',
  },
});
