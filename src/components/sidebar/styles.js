import styled from 'styled-components';

export const SidebarComponent = styled.div`
   background-color: ${(props) => props.theme.color['ligth']};
   width: 18rem;
   height: 100vh;
   position: relative;

   .link-menu {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
      font-weight: 600;
      font-family: ${(props) => props.theme.fontFamily.title};
      font-size: ${(props) => props.theme.fontSizes.medium};
      color: ${(props) => props.theme.color['secondary-color']};
      background-color: transparent;
      border-left: 4px solid transparent;
      padding: 0.5rem;
      margin-bottom: 0.2rem;
      padding-left: 1rem;
      transition: all 0.3s;

      div {
         margin-bottom: -7px;
      }

      &:hover {
         background-color: #fbd088;
         border-left: 4px solid
            ${(props) => props.theme.color['seconday-color']};
      }
   }
`;

const SidebarTopBottom = styled.div`
   background-color: ${(props) => props.theme.color['primary-color']};
   color: ${(props) => props.theme.color['secondary-color']};
   padding: 0.8rem;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

export const TopSidebar = styled(SidebarTopBottom)``;

export const BottomSidebar = styled(SidebarTopBottom)`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
`;

export const LogoContainer = styled.div`
   display: flex;
   justify-content: center;
   margin: 2.5rem 0;
`;


export const LogoImg = styled.img`
   width: 7.5rem;
`;
