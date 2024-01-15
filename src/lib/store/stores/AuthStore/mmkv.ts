import Config from 'react-native-config';
import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

const storage = new MMKV({
  id: `user-storage`,
  encryptionKey: Config.USER_ENCRIPTION_KEY,
});

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};
