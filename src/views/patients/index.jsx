import Modal from 'react-modal';
import { PawPrint, Pencil, TrashSimple, X } from 'phosphor-react';
import { useState } from 'react';
import {
   ContainerView,
   DeleteButton,
   EditButton,
   EmptyTable,
   PatientsTable,
} from './styles';

import axios from 'axios';
import { useEffect } from 'react';
import { ModalEditPatient } from '../../components/modalEditPatient';

export function Patients() {
   const [patients, setPatients] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);

   function getAllPatients() {
      axios
         .get('http://localhost:8000/api/all-patients')
         .then((response) => {
            setPatients(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }

   useEffect(() => {
      getAllPatients();
   }, []);

   console.log(patients);
   return (
      <>
         <ContainerView>
            {patients?.length ? (
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

            <ModalEditPatient
               isModalOpen={isModalOpen}
               setIsModalOpen={setIsModalOpen}
            />
         </ContainerView>
      </>
   );
}
