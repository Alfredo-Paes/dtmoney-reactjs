import styled from "styled-components";
import { themeColors } from "../../styles/themeColors";

export const NewTransactionModalStyle = styled.form`

    /* input {
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
    } */

    button[type="submit"] {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        border: 0;
        margin-top: 1rem;
        font-size: 1rem;
        transform: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
`