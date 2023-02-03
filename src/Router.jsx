import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './views/dashboard';
import { Patients } from './views/patients';

export function Router() {
   return (
      <Routes>
         <Route path='/' element={<Dashboard />} />
         <Route path='/patients' element={<Patients />} />
      </Routes>
   );
}
