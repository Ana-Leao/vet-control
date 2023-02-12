import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:focus{
        outline: 1px solid ${(props) => props.theme.color.green};
        outline-offset: 2px;
    }

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
      max-width: 23.75rem;
      background: ${(props) => props.theme.color.white};
      padding: 2rem;
      position: relative;
      border-radius: 4px;
   }
}
`;

export const buttonDefault = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;

   background: transparent;
   border-radius: 5px;
   border: 0;
   cursor: pointer;
   color: ${(props) => props.theme.color['secondary-color']};
   padding: 0.4rem;
   transition: all 0.3s;

   &:hover {
      background: ${(props) => props.theme.color['primary-color']};
      border-radius: 50%;
   }
`;
