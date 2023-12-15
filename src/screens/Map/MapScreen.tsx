import React, { useRef, useState } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import BottomSheetComponent from '~/components/BottomSheet/BottomSheetComponent';

import CustomMarker from './components/CustomMarker';
import MyLocationButton from './components/MyLocationButton';
import { Coordinates, MarkerItem, SportsType } from './types';

const MARKERS: MarkerItem[] = [
  {
    id: 1,
    latitude: 37.78425,
    longitude: -122.4024,
    title: 'Футбол',
    organizer: 'Алексей Иванов',
    type: SportsType.Football,
    schedule: [
      {
        day: 'пн',
        time: '19:00 - 21:00',
      },
      {
        day: 'ср',
        time: '19:00 - 21:00',
      },
      {
        day: 'пт',
        time: '19:00 - 21:00',
      },
    ],
    address: `Баскетбольная площадка на ул. Строителей, д. 17 к. 2`,
    description:
      'Всем привет! Ежедневно в будни вы можете полноценно поиграть во дворе на улице Строителей и хорошо провести время.',
  },
  {
    id: 2,
    latitude: 37.78525,
    longitude: -122.4624,
    title: 'Баскетбол',
    organizer: 'Алексей Иванов',
    type: SportsType.BasketBall,
    schedule: [
      {
        day: 'пн',
        time: '19:00 - 21:00',
      },
      {
        day: 'ср',
        time: '19:00 - 21:00',
      },
      {
        day: 'пт',
        time: '19:00 - 21:00',
      },
    ],
    address: `Баскетбольная площадка на ул. Строителей, д. 17 к. 2`,
    description:
      'Всем привет! Ежедневно в будни вы можете полноценно поиграть во дворе на улице Строителей и хорошо провести время.',
  },
  {
    id: 3,
    latitude: 37.78625,
    longitude: -122.4924,
    title: 'Волейбол',
    organizer: 'Алексей Иванов',
    type: SportsType.Volleyball,
    schedule: [
      {
        day: 'пн',
        time: '19:00 - 21:00',
      },
      {
        day: 'ср',
        time: '19:00 - 21:00',
      },
      {
        day: 'пт',
        time: '19:00 - 21:00',
      },
    ],
    address: `Баскетбольная площадка на ул. Строителей, д. 17 к. 2`,
    description:
      'Всем привет! Ежедневно в будни вы можете полноценно поиграть во дворе на улице Строителей и хорошо провести время.',
  },
];

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [currentMarker, setCurrentMarker] = useState<MarkerItem>();
  const animateTo = (coords: Coordinates) =>
    mapRef?.current?.animateToRegion(coords, 500);
  const onMarkerPress = (item: MarkerItem) => {
    const { latitude, longitude } = item;
    setCurrentMarker(item);
    bottomSheetRef.current?.present();
    const coords = {
      latitude: latitude - 0.002,
      longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    animateTo(coords);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.container}
        provider="google"
        showsUserLocation={true}
      >
        {MARKERS.map((item: MarkerItem) => (
          <CustomMarker
            key={item.id}
            markerItem={item}
            onMarkerPress={() => onMarkerPress(item)}
          />
        ))}
        <Marker
          draggable
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={'Test Marker'}
          description={'This is a description of the marker'}
        />
        <MyLocationButton animateToLocation={coords => animateTo(coords)} />
      </MapView>
      <BottomSheetComponent
        bottomSheetRef={bottomSheetRef}
        currentMarker={currentMarker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
