'use client';
import React, { FC, useLayoutEffect } from 'react';
import ReactModal from 'react-modal';
import { CloseIcon } from '../images/svg/CloseIcon';

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  full?: boolean;
  closeIconColor?: string;
  closeIconSize?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
  full,
  closeIconColor,
  closeIconSize
}) => {
  useLayoutEffect(() => {
    ReactModal.setAppElement('#modal-root');
  });

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={`modal ${full && 'full'}`}
      overlayClassName="modal-overlay"
    >
      <CloseIcon
        onClick={closeModal}
        className="absolute top-[15px] right-[15px] cursor-pointer z-50"
        color={closeIconColor}
        size={closeIconSize}
      />
      <div>{children}</div>
    </ReactModal>
  );
};
