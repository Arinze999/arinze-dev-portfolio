import React, { createContext, useState } from 'react';

interface IModalProvider {
  children: React.ReactNode;
}

interface IModalContext {
  showModal: boolean;
  displayModal: (show: boolean) => void;
  modalContent: React.ReactNode;
  setModalContent: (content: React.ReactNode) => void;
}

export const ModalContext = createContext<IModalContext | null>(null);

export const ModalProvider: React.FC<IModalProvider> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        displayModal: setShowModal,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
