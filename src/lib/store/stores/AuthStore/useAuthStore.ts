import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { zustandStorage } from './mmkv';

interface AuthStoreState {
  isAuth: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthStoreState>()(
  persist(
    set => ({
      isAuth: false,
      accessToken: null,
      refreshToken: null,
      setTokens: (accessToken, refreshToken) =>
        set(() => ({
          accessToken,
          refreshToken,
          isAuth: true,
        })),

      clearTokens: () =>
        set(() => ({
          isAuth: false,
          accessToken: null,
          refreshToken: null,
        })),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
