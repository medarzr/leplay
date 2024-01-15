import React, { useCallback, useMemo } from 'react';

import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import SportCard from '~/screens/Map/components/SportCard/SportCard';
import { MarkerItem } from '~/screens/Map/types';

type BottomSheetComponentProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  onClose?: () => void;
  currentMarker: MarkerItem | undefined;
};

const BottomSheetComponent = (props: BottomSheetComponentProps) => {
  const { bottomSheetRef, onClose, currentMarker } = props;

  const snapPoints = useMemo(() => ['50%', '50%'], []);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
      onDismiss={onClose}
      enablePanDownToClose
    >
      <BottomSheetScrollView showsVerticalScrollIndicator={false}>
        <SportCard currentMarker={currentMarker} />
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

export default BottomSheetComponent;
