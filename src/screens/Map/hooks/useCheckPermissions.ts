import { useEffect } from 'react';

import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { i18n } from '~/lib/localization/localize';
import toaster from '~/lib/notify/toaster';
import { isIos } from '~/utils/device';

interface useCheckPermissionsProps {
  getCurrentPosition: () => void;
}

export default function useCheckPermissions({
  getCurrentPosition,
}: useCheckPermissionsProps) {
  const hasPermissionIOS = async () => {
    const status = await Geolocation.requestAuthorization('always');

    if (status === 'granted') {
      return true;
    } else {
      toaster({
        type: 'error',
        body: i18n.t('notifications.geoError'),
      });
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (isIos) {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      toaster({
        type: 'error',
        body: i18n.t('notifications.geoError'),
      });
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    getCurrentPosition();
  };

  useEffect(() => {
    getLocation();
  }, []);
}
