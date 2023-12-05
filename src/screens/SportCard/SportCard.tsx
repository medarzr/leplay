import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';

import { MarkerItem } from '../Map/types';

import SportsIcons from './components/SportsIcons';

type BottomSheetComponentProps = {
  currentMarker: MarkerItem | undefined;
};

const DescriptionTitle: React.FC<{ title: string }> = ({ title }) => (
  <View style={{ paddingBottom: 10 }}>
    <Text style={styles.descriptionTitleText}>{title}</Text>
  </View>
);

const SportCard = (props: BottomSheetComponentProps) => {
  const { currentMarker } = props;

  return (
    <View style={styles.container}>
      {currentMarker && (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{currentMarker?.title}</Text>
            <SportsIcons type={currentMarker?.type} />
          </View>
          <View style={styles.itemContainer}>
            <DescriptionTitle title={i18n.t('sportCard.organizer')} />
            <Text style={styles.organizerText}>{currentMarker?.organizer}</Text>
          </View>
          <DescriptionTitle title={i18n.t('sportCard.description')} />
          <Text
            style={[
              styles.descriptionTitleText,
              { color: colors.grayDescriptionText },
            ]}
          >
            {currentMarker?.description}
          </Text>
        </>
      )}
    </View>
  );
};

export default SportCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '500',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
  },
  descriptionTitleText: {
    color: colors.grayDescriptionTitleText,
    fontSize: 14,
    fontWeight: '400',
  },
  organizerText: {
    color: colors.primaryGreen,
    fontSize: 14,
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingBottom: 14,
  },
});
