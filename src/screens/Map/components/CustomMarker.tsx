import React from 'react';

import { Marker } from 'react-native-maps';

import { MarkerItem } from '../types';

interface CustomMarkerProps {
  markerItem: MarkerItem;
  onMarkerPress: () => void;
}

export default function CustomMarker(props: CustomMarkerProps) {
  const { markerItem, onMarkerPress } = props;
  return (
    <Marker
      coordinate={{
        latitude: markerItem.latitude,
        longitude: markerItem.longitude,
      }}
      onPress={onMarkerPress}
    />
  );
}
