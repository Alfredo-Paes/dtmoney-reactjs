import styled from "styled-components";
import { themeColors } from "../../styles/themeColors";

export const HeaderStyled = styled.header`
    background-color: ${themeColors.blue};
`

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`