import React, { useCallback, useMemo } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { MarkerItem } from '~/screens/Map/types';
import SportCard from '~/screens/SportCard/SportCard';

type BottomSheetComponentProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  onClose?: () => void;
  currentMarker: MarkerItem | undefined;
};

const BottomSheetComponent = (props: BottomSheetComponentProps) => {
  const { bottomSheetRef, onClose, currentMarker } = props;

  const snapPoints = useMemo(() => ['50%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      onDismiss={onClose}
      enablePanDownToClose
    >
      <SportCard currentMarker={currentMarker} />
    </BottomSheetModal>
  );
};

export default BottomSheetComponent;
