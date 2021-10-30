import styled from "styled-components";
import { darken, transparentize } from 'polished'
import { themeColors } from "../../../../styles/themeColors";

interface RadioBoxButtonStyleProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

export const RadioBoxButtonStyle = styled.button<RadioBoxButtonStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive ? transparentize(0.9, themeColors[props.activeColor]) : 'transparent'};

    transition: border-color 0.2s;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')}
    };

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: ${themeColors.textTitle};
    }
`