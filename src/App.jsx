import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Sidebar } from './components/sidebar';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { theme } from './themes/default';
import { Dashboard } from './views/dashboard';

export function App() {
   return (
      <ThemeProvider theme={theme}>
         <div style={{display:'flex'}}>
            <Sidebar />
            <Router />
         </div>
         <GlobalStyle />
      </ThemeProvider>
   );
}
