import styled from 'styled-components';

export const ContainerView = styled.div`
   width: 100%;
   margin-left: 3rem;
   margin-right: 3rem;
`;

export const PatientsTable = styled.table`
   width: 100%;
   border-collapse: separate;
   border-spacing: 0 0.5rem;

   th {
      color: ${(props) => props.theme.color['secondary-color']};
      font-family: ${(props) => props.theme.fontFamily.title};
      font-size: 1.125rem;
      font-weight: 800;
      text-align: center;
      padding: 1rem;
   }

   td {
      text-align: center;
      padding: 0.5rem;
      background-color: ${(props) => props.theme.color['ligth']};
      font-size: ${(props) => props.theme.fontSizes.regular};

      &:first-child {
         border-top-left-radius: 6px;
         border-bottom-left-radius: 6px;
         color: ${(props) => props.theme.color['secondary-color']};
         font-weight: 900;
      }

      &:last-child {
         border-top-right-radius: 6px;
         border-bottom-right-radius: 6px;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 0.5rem;
      }
   }
`;

const button = styled.button`
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

export const EditButton = styled(button)``;

export const DeleteButton = styled(button)`
   color: ${(props) => props.theme.color.danger};
`;

export const EmptyTable = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100vh;

   h2,
   svg {
      font-family: ${(props) => props.theme.fontFamily.title};
      font-size: ${(props) => props.theme.fontSizes.title};
      color: ${(props) => props.theme.color.danger};
      opacity: 0.8;
   }
`;

export const DialogModal = styled.div`
   .dialog-container {
      position: relative;
   }
   .dialog-painel {
      position: fixed;
      top: 0;
   }
`;
