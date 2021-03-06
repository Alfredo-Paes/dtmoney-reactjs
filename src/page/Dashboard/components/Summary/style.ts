import styled from "styled-components";
import { themeColors } from "../../../../styles/themeColors";
import { ISummaryStyleProps } from "../../types";

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const SummaryStyled = styled.div<ISummaryStyleProps>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    
    div {
        background: ${themeColors.shape};
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: ${themeColors.textTitle};

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: ${(props) => props.totalBalance ? colors.red : colors.green};
            color: #FFF;
        }
    }
    
`