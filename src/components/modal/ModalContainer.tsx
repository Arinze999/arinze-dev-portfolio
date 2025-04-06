import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import CloseIcon from '../icons/CloseIcon';


const ModalContainer: React.FC = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) return null;

  const { showModal, displayModal, modalContent } = modalContext;

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-50">
      <div className="relative bg-myBg3 rounded-md p-6 w-11/12 md:w-1/4">
        <button
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => displayModal(false)}
          aria-label="Close Modal"
        >
          <CloseIcon color="black" />
        </button>
        {modalContent}
      </div>
    </div>
  );
};

export default ModalContainer;
