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
    -webkit-font-smoothing: antialiased;

    .modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .modal-content {
      width: 100%;
      max-width: 380px;
      background: ${(props) => props.theme.color.white};
      padding: 2rem;
      position: relative;
      border-radius: 4px;
   }
}
`;
