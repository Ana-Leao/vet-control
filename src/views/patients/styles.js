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

export const ButtonXClose = styled(button)`
   position: absolute;
   top: 15px;
   right: 15px;
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

export const FormEditPatient = styled.form`
   /* display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center; */
`;

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;

   label {
      font-size: ${(props) => props.theme.fontSizes.regular};
      font-weight: 600;
   }

   input {
      width: 100%;
      height: 2rem;
      border-radius: 4px;
      border: 0;
      background: ${(props) => props.theme.color.ligth};
      font-weight: 400;
      font-size: 1rem;
      margin: 0.5rem 0;

      &::placeholder {
         color: ${(props) => props.theme.color['secondary-color']};
      }
   }

   select {
      width: 100%;
      height: 2rem;
      border-radius: 4px;
      border: 0;
      background: ${(props) => props.theme.color.ligth};
      font-weight: 400;
      font-size: 1rem;
      margin: 0.5rem 0;
   }

   select option {
      background: white;
   }
`;

export const ModalHeader = styled.div`
   margin-top: 0.5rem;
   margin-bottom: 1rem;
`;

export const ModalTitle = styled.span`
   font-family: ${(props) => props.theme.fontFamily.title};
   font-size: ${(props) => props.theme.fontSizes.medium};
   color: ${(props) => props.theme.color['secondary-color']};
   font-weight: 800;
`;

export const Avatar = styled.div`
   background-color: ${(props) => props.theme.color['primary-color']};
   width: 100px;
   height: 100px;
   border-radius: 50%;
   overflow: hidden;

   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0.5rem auto;

   img {
      width: 80px;
      transform: translateY(12px);
   }
`;

export const FooterModal = styled.div`
   display: flex;
   justify-content: end;
   gap: 0.8rem;
   margin-top: 1rem;
`;

export const ButtonCloseModal = styled.button`
   cursor: pointer;
   border: 0;
   background: ${(props) => props.theme.color.danger};
   color: ${(props) => props.theme.color.white};
   font-family: ${(props) => props.theme.fontFamily.title};
   font-size: ${(props) => props.theme.fontSizes.regular};
   font-weight: 800;
   border-radius: 4px;
   padding: 0.5rem 1rem;
   transition: all 0.3s;

   &:hover {
      filter: brightness(0.9);
   }
`;

export const ButtonSave = styled.button`
   cursor: pointer;
   border: 0;
   background: ${(props) => props.theme.color.green};
   color: ${(props) => props.theme.color.white};
   font-family: ${(props) => props.theme.fontFamily.title};
   font-size: ${(props) => props.theme.fontSizes.regular};
   font-weight: 800;
   border-radius: 4px;
   padding: 0.5rem 1rem;
   transition: all 0.3s;

   &:hover {
      filter: brightness(0.9);
   }
`;
