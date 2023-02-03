import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily.body};
    font-size: ${(props) => props.theme.fontSizes.small};
    background-color: ${(props) => props.theme.color.white};
    font-weight: 400;
}
`;

