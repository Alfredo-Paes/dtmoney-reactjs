import { useEffect } from "react";
import ReactDOM from "react-dom";

import { IKeydownHandler, IModalProps } from "./types";
import closeImg from "../../../assets/close.svg";
import { ModalClose, ModalContent, ModalOverlay } from "./style";

const portalRoot = document.getElementById("portal-root");

export function Modal({
  children,
  isOpen,
  onClickClose,
  titleModal,
}: IModalProps) {

  const  keydownHandler = ({ key } : IKeydownHandler) : void => {
    if (key === 'Escape') onClickClose();
    return;
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

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
