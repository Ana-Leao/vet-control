import {
   CaretLeft,
   ClipboardText,
   CurrencyDollarSimple,
   Gauge,
   List,
   PawPrint,
} from 'phosphor-react';
import { BottomSidebar, LogoContainer, LogoImg, SidebarComponent, TopSidebar } from './styles';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import React from 'react';

const menuItens = [
   { link: 'Dashboard', path: '/', icon: Gauge },
   { link: 'Pacientes', path: '/patients', icon: PawPrint },
   { link: 'Cadastro', path: '/resgister', icon: ClipboardText },
   { link: 'Financeiro', path: '/financials', icon: CurrencyDollarSimple },
];

export function Sidebar() {
   return (
      <>
         <SidebarComponent>
            <div>
               <TopSidebar>
                  <List size={24} weight='regular' />
               </TopSidebar>
               <BottomSidebar>
                  <CaretLeft size={24} weight='regular' />
               </BottomSidebar>
            </div>

            <LogoContainer>
               <LogoImg src={Logo} alt='Logo Pitoco Petshop' />
            </LogoContainer>

            {menuItens?.map((item) => (
               <Link to={item.path} key={item.link} className='link-menu'>
                  <div>
                     {React.createElement(item.icon, {
                        size: 22,
                        weight: 'fill',
                     })}
                  </div>
                  <span>{item.link}</span>
               </Link>
            ))}
         </SidebarComponent>
      </>
   );
}
