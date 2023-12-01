import { Platform, Dimensions } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const entireScreenWidth = Dimensions.get('window').width;
export const entireScreenHeight = Dimensions.get('window').height;

export const { OS } = Platform;
