import styled from "styled-components";
import { themeColors } from "../../../styles/themeColors";

export const InputStyle = styled.input`
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25;

    border: 1px solid #D7D7D7;
    background: ${themeColors.inputBackground};

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: ${themeColors.textBody};
    }

    & + input {
        margin-top: 1rem;
    }
`