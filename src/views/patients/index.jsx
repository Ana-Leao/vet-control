import Modal from 'react-modal';
import { PawPrint, Pencil, TrashSimple, X } from 'phosphor-react';
import { useState } from 'react';
import {
   Avatar,
   ButtonCloseModal,
   ButtonSave,
   ButtonXClose,
   ContainerView,
   DeleteButton,
   EditButton,
   EmptyTable,
   FooterModal,
   FormEditPatient,
   InputContainer,
   ModalHeader,
   ModalTitle,
   PatientsTable,
} from './styles';
import catAvatar from '../../assets/images/avatar/cat-avatar.png';
import dogAvatar from '../../assets/images/avatar/dog-avatar.png';

export function Patients() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   function onRequestClose() {
      setIsModalOpen(false);
   }

   const patients = [
      {
         id: 1,
         name: 'Demo',
         specie: 'Felino',
         age: 5,
         weight: 5.9,
         breed: 'S.R.D',
         tutor: 'Ana Paula Queiroz Leão',
      },
      {
         id: 2,
         name: 'Demo',
         specie: 'Felino',
         age: 5,
         weight: 5.9,
         breed: 'S.R.D',
         tutor: 'Ana Paula',
      },
      {
         id: 3,
         name: 'Demo',
         specie: 'Felino',
         age: 5,
         weight: 5.9,
         breed: 'S.R.D',
         tutor: 'Ana Paula',
      },
      {
         id: 4,
         name: 'Demo',
         specie: 'Felino',
         age: 5,
         weight: 5.9,
         breed: 'S.R.D',
         tutor: 'Ana Paula',
      },
   ];

   return (
      <>
         <ContainerView>
            {patients.length ? (
               <PatientsTable>
                  <thead>
                     <tr>
                        <th>
                           <b>Nome</b>
                        </th>
                        <th>
                           <b>Idade</b>
                        </th>
                        <th>
                           <b>Espécie</b>
                        </th>
                        <th>
                           <b>Raça</b>
                        </th>
                        <th>
                           <b>Peso</b>
                        </th>
                        <th>
                           <b>Tutor</b>
                        </th>
                        <th>
                           <b>Opções</b>
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {patients.map((patient) => (
                        <tr key={patient.id}>
                           <td>
                              <span>{patient.name}</span>
                           </td>
                           <td>
                              <span>{patient.age} anos</span>
                           </td>
                           <td>
                              <span>{patient.specie}</span>
                           </td>
                           <td>
                              <span>{patient.breed}</span>
                           </td>
                           <td>
                              <span>{patient.weight}kg</span>
                           </td>
                           <td>
                              <span>{patient.tutor}</span>
                           </td>
                           <td>
                              <EditButton onClick={() => setIsModalOpen(true)}>
                                 <Pencil size={22} weight='fill' />
                              </EditButton>
                              <DeleteButton>
                                 <TrashSimple size={22} weight='fill' />
                              </DeleteButton>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </PatientsTable>
            ) : (
               <>
                  <EmptyTable>
                     <h2>Nenhum paciente cadastrado...</h2>
                     <PawPrint size={300} weight='fill' />
                  </EmptyTable>
               </>
            )}

            <Modal
               //className='teste'
               isOpen={isModalOpen}
               //onAfterOpen={afterOpenModal}
               onRequestClose={onRequestClose}
               //contentLabel='Example Modal'
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
         </ContainerView>
      </>
   );
}
