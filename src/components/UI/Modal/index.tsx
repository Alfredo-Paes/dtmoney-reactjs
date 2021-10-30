import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import closeImg from "../../../assets/close.svg";
import { ModalClose, ModalContent, ModalOverlay } from "./style";

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClickClose: () => void;
  titleModal?: string;
}

const portalRoot = document.getElementById("portal-root");

export function Modal({
  children,
  isOpen,
  onClickClose,
  titleModal,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return portalRoot
    ? ReactDOM.createPortal(
        <ModalOverlay>
          <ModalContent>
            <ModalClose type='button' onClick={onClickClose}>
              <img src={closeImg} alt='Fechar' />
            </ModalClose>
            <h2>{titleModal}</h2>
            {children}
          </ModalContent>
        </ModalOverlay>,
        portalRoot
      )
    : null;
}

export default Modal;
