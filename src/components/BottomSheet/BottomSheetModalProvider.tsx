import React, { FC, PropsWithChildren } from 'react';

import { BottomSheetModalProvider as BottomSheetModalProviderRN } from '@gorhom/bottom-sheet';

export const BottomSheetModalProvider: FC<PropsWithChildren> = ({
  children,
}) => <BottomSheetModalProviderRN>{children}</BottomSheetModalProviderRN>;
