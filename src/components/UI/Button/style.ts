import styled from "styled-components";

import { themeColors } from "../../../styles/themeColors";

interface ButtonStyledProps {
    collorButton: string;
}

export const ButtonStyled = styled.button`
    font-size: 1rem;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    &.primary {
        color: ${themeColors.shape};
        background: ${themeColors.blueLight};
    }
    &.success {
        color: ${themeColors.shape};
        background: ${themeColors.green};
    }
    &.danger {
        color: ${themeColors.shape};
        background: ${themeColors.red};
    }
`
