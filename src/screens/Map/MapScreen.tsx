import React, { useRef } from 'react';

import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MyLocationButton from './components/MyLocationButton';

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.container}
        provider="google"
        showsUserLocation={true}
      >
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
        <MyLocationButton
          animateToLocation={coords =>
            mapRef?.current?.animateToRegion(coords, 1000)
          }
        />
      </MapView>
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
