import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

type ModalContextType = {
  modalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within an AuthProvider');
  }
  return context;
}

const ModalProvider = (props: { children: ReactNode }): ReactElement => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <ModalContext.Provider
      {...props}
      value={{ modalVisible, showModal, hideModal }}
    />
  );
};

export { ModalProvider, useModal };
