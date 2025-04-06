import React, { ReactNode, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

interface ModalTriggerProps {
  children: ReactNode;
  modalContent: ReactNode;
}

const ModalTrigger: React.FC<ModalTriggerProps> = ({
  children,
  modalContent,
}) => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) return null;
  const { displayModal, setModalContent } = modalContext;

  const handleClick = () => {
    setModalContent(modalContent);
    displayModal(true);
  };

  return (
    <button onClick={handleClick} className="focus:outline-none">
      {children}
    </button>
  );
};

export default ModalTrigger;
