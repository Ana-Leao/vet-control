import styled from 'styled-components';
import { buttonDefault } from '../../styles/global';

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
   text-align: center;
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

export const ButtonXClose = styled(buttonDefault)`
   position: absolute;
   top: 15px;
   right: 15px;
`;
