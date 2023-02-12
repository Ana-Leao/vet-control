import catAvatar from '../../assets/images/avatar/cat-avatar.png';
import dogAvatar from '../../assets/images/avatar/dog-avatar.png';
import Modal from 'react-modal';
import {
   Avatar,
   ButtonCloseModal,
   ButtonSave,
   ButtonXClose,
   FooterModal,
   FormEditPatient,
   InputContainer,
   ModalHeader,
   ModalTitle,
} from './styles';
import { X } from 'phosphor-react';

export function ModalEditPatient({isModalOpen, setIsModalOpen}) {

    function onRequestClose() {
        setIsModalOpen(false);
     }
     
   return (
      <Modal
         isOpen={isModalOpen}
         onRequestClose={onRequestClose}
         ariaHideApp={false}
         shouldCloseOnOverlayClick={true}
         className='modal-content'
         overlayClassName='modal-overlay'
      >
         <ModalHeader>
            <ModalTitle>Atualizar Informações</ModalTitle>
            <ButtonXClose onClick={() => setIsModalOpen(false)}>
               <X size={22} weight='bold' />
            </ButtonXClose>
         </ModalHeader>

         <Avatar>
            <img src={catAvatar} alt='' />
         </Avatar>

         <FormEditPatient>
            <InputContainer>
               <label htmlFor='animalName'>Nome:</label>
               <input type='text' name='animalName' id='animalName' />
            </InputContainer>

            <InputContainer>
               <label htmlFor='animalAge'>Idade:</label>
               <input type='text' name='animalAge' id='animalAge' />
            </InputContainer>

            <InputContainer>
               <label htmlFor='breed'>Raça:</label>
               <input type='text' name='breed' id='breed' />
            </InputContainer>

            <InputContainer>
               <label htmlFor='weight'>Peso:</label>
               <input type='text' name='weight' id='weight' />
            </InputContainer>

            <InputContainer>
               <label htmlFor='specie'>Espécie:</label>
               <select name='specie' id='specie'>
                  <option value='feline'>Felino</option>
                  <option value='canine'>Canino</option>
               </select>
            </InputContainer>

            <FooterModal>
               <ButtonCloseModal type='button' onClick={onRequestClose}>
                  Cancelar
               </ButtonCloseModal>
               <ButtonSave type='submit'>Salvar</ButtonSave>
            </FooterModal>
         </FormEditPatient>
      </Modal>
   );
}
