export interface Coordinates {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export enum SportsType {
  Volleyball = 'volleyball',
  Football = 'football',
  BasketBall = 'basketball',
}
export interface MarkerItem {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  organizer: string;
  description: string;
  type: SportsType;
}
