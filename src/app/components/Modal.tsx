'use client';
import React, { FC, useLayoutEffect } from 'react';
import ReactModal from 'react-modal';
import { CloseIcon } from '../images/svg/CloseIcon';

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  useLayoutEffect(() => {
    ReactModal.setAppElement('#modal-root');
  });

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <CloseIcon
        onClick={closeModal}
        className="absolute top-[15px] right-[15px] cursor-pointer"
      />
      <div>{children}</div>
    </ReactModal>
  );
};
