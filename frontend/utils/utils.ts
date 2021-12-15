import {Location} from 'react-native-location';
import {GeoDecode, Address} from './types';

const getFormattedTime = (target: number) => {
  return `${target >= 10 ? target.toString() : `0${target}`}`;
};

export const getConvertedDate = (date: Date) => {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  return `${getFormattedTime(hours)}:${getFormattedTime(
    minutes,
  )}:${getFormattedTime(seconds)}`;
};

export const getLastLocation = (locations: Location[]) => {
  const lastLocation = locations.reduce(
    (previous: Location, current) => {
      previous = previous.timestamp > current.timestamp ? previous : current;
      return previous;
    },
    {
      speed: 0,
      course: 0,
      accuracy: 0,
      altitude: 0,
      latitude: 0,
      longitude: 0,
      timestamp: 0,
      altitudeAccuracy: 0,
    },
  );
  return lastLocation;
};

export const geoDecode = async (
  latitude: number,
  longitude: number,
): Promise<GeoDecode> => {
  return fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
  ).then(response => response.json());
};

export const getConvertedLocation = (location: Address | undefined) => {
  if (location?.road && location?.city && location?.country) {
    return `${location.road}, ${location.city}, ${location.country}`;
  }
  return '';
};

export const getConvertedTimer = (secondsTarget: number) => {
  const seconds = secondsTarget % 60;
  let minutes = (secondsTarget - seconds) / 60;
  const oldMinutes = minutes;
  minutes = minutes % 60;
  const hours = (oldMinutes - minutes) / 60;
  return `${getFormattedTime(hours)}:${getFormattedTime(
    minutes,
  )}:${getFormattedTime(seconds)}`;
};
