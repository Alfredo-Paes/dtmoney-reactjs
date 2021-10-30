import styled from "styled-components";
import { themeColors } from "../../../styles/themeColors";

export const ModalOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
    width: 100%;
    max-width: 576px;
    background: ${themeColors.background};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    h2 {
        color: ${themeColors.textTitle};
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
`

export const ModalClose = styled.button`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.6);
    }
`
