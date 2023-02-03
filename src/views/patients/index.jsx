import Modal from 'react-modal';
import { PawPrint, Pencil, TrashSimple } from 'phosphor-react';
import { useState } from 'react';
import {
   ContainerView,
   DeleteButton,
   EditButton,
   EmptyTable,
   PatientsTable,
} from './styles';

export function Patients() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const patients = [
      {
         id: 1,
         name: 'Demo',
         type: 'Felino',
         age: 5,
         weight: 5.9,
         breed: 'S.R.D',
         tutor: 'Ana Paula',
      },
      {
         id: 2,
         name: 'Demo',
         type: 'Felino',
         age: 5,
         weight: 5.9,
         breed: 'S.R.D',
         tutor: 'Ana Paula',
      },
      {
         id: 3,
         name: 'Demo',
         type: 'Felino',
         age: 5,
         weight: 5.9,
         breed: 'S.R.D',
         tutor: 'Ana Paula',
      },
      {
         id: 4,
         name: 'Demo',
         type: 'Felino',
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
                           <b>Espécie</b>
                        </th>
                        <th>
                           <b>Idade</b>
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
                              <span>{patient.type}</span>
                           </td>
                           <td>
                              <span>{patient.age} anos</span>
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
         </ContainerView>

         <Modal
            isOpen={isModalOpen}
            //onAfterOpen={afterOpenModal}
            //onRequestClose={closeModal}
            //style={customStyles}
            contentLabel='Example Modal'
         >
            <h1>Editar Informações</h1>
         </Modal>
      </>
   );
}
