import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Modal as RNModal,
  Pressable,
} from 'react-native';

import { colors } from '~/lib/theme/colors';

import { KeyboardAvoidingProvider } from '../KeyboardAvoiding/KeyboardAvoidingProvider';

import { useModal } from './hooks/useModalContext';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  noCloseKeyboard?: boolean;
}

export default function Modal({ children, title, description }: ModalProps) {
  const { modalVisible, hideModal } = useModal();
  return (
    <RNModal animationType="fade" transparent={true} visible={modalVisible}>
      <KeyboardAvoidingProvider
        contentContainerStyle={{ backgroundColor: 'transparent' }}
        style={{ backgroundColor: colors.overlayColor }}
        noCloseKeyboard
      >
        <View style={styles.container}>
          <Pressable style={styles.modalOverlay} onPress={hideModal} />
          <View style={styles.whiteContainer}>
            <>
              <Text style={styles.titleContainer}>{title}</Text>
              <Text style={styles.descriptionContainer}>{description}</Text>
              {children}
            </>
          </View>
        </View>
      </KeyboardAvoidingProvider>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  whiteContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 32,
    margin: 14,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleContainer: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  descriptionContainer: {
    color: colors.grayDescriptionText,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
});
