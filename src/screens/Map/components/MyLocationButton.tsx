import React from 'react';

import { Pressable, StyleSheet } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { colors } from '~/lib/theme/colors';

import useCheckPermissions from '../hooks/useCheckPermissions';
import { Coordinates } from '../types';

interface MyLocationButtonProps {
  animateToLocation: (myCoords: Coordinates) => void;
}

export default function MyLocationButton({
  animateToLocation,
}: MyLocationButtonProps) {
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const myCoords = {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        };
        animateToLocation(myCoords);
      },
      () => {},
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  useCheckPermissions({ getCurrentPosition });

  return (
    <>
      <Pressable
        onPress={getCurrentPosition}
        style={({ pressed }) => [
          styles.myLocationButtonStyle,
          { opacity: pressed ? 0.5 : 1 },
        ]}
        hitSlop={10}
      />
      <FontAwesome
        name={'location-arrow'}
        onPress={getCurrentPosition}
        size={16}
        color={colors.primaryGreen}
        style={styles.icon}
        suppressHighlighting
      />
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    bottom: 40,
    right: 17,
    borderRadius: 40,
  },
  myLocationButtonStyle: {
    flexGrow: 1,
    position: 'absolute',
    bottom: 32,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
});
