import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Button from '~/components/Button/Button';
import { i18n } from '~/lib/localization/localize';
import { colors } from '~/lib/theme/colors';

import { MarkerItem } from '../../types';

import ScheduleComponent from './components/ScheduleComponent';
import SportsIcons from './components/SportsIcons';

type BottomSheetComponentProps = {
  currentMarker: MarkerItem | undefined;
};

export const DescriptionTitle: React.FC<{ title: string }> = ({ title }) => (
  <View style={{ paddingBottom: 10 }}>
    <Text style={styles.descriptionTitleText}>{title}</Text>
  </View>
);

const SportCard = (props: BottomSheetComponentProps) => {
  const { currentMarker } = props;
  const { schedule } = currentMarker ?? {};
  return (
    <View style={styles.container}>
      {currentMarker && (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{currentMarker?.title}</Text>
            <SportsIcons type={currentMarker?.type} />
          </View>
          {schedule && <ScheduleComponent schedule={schedule} />}
          <View style={styles.itemContainer}>
            <FontAwesome
              name={'map-marker'}
              size={16}
              color={colors.primaryGreen}
              style={{ marginRight: 10 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.organizerText}>{currentMarker?.address}</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <DescriptionTitle title={i18n.t('sportCard.organizer')} />
            <Text style={styles.organizerText}>{currentMarker?.organizer}</Text>
          </View>
          <View style={styles.itemContainer}>
            <DescriptionTitle title={i18n.t('sportCard.numberOfPlayers')} />
            <Text
              style={[
                styles.organizerText,
                { color: colors.grayDescriptionText },
              ]}
            >
              15
            </Text>
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
          <Button buttonStyle={{ margin: 24 }} buttonTitle="Отправить заявку" />
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
