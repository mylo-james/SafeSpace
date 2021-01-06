import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { back, front, accent, cursor } from './themes';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}

    button, a {
        font-size: 0.8em;
        border: 3px ${front} solid;
        padding: 10px;
        background: none;
        color: ${front}
    }

    button:hover, a:hover {
        color: ${accent};
        border: 3px ${accent} solid;
        cursor: pointer;
    }

   html {
       width: 100vw;
       cursor: ${cursor}
   }
   .app a {
   
       text-decoration: none;
     
   }
  
   .app {

       width: 100vw;
      
       box-sizing: border-box;
       font-family: 'Rubik', sans-serif;
       color: ${back};
       font-size: calc(16px + 4 * ((100vw - 320px) / 680));
       overflow-y: scroll;
       overflow-x: hidden;
       scroll-behavior: smooth;
       -webkit-overflow-scrolling: smooth;

   }

   ::-webkit-scrollbar {
    width: 12px;
   }
 
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
 
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }

  .app * {
    box-sizing: border-box;
   }
`;

const GlobalStyleWrapper = ({ children }) => {
    const [mode, setMode] = useState('dark');
    const [cursor, setCursor] = useState('default');

    return (
        <ThemeProvider theme={{ mode, setMode, cursor, setCursor }}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default GlobalStyleWrapper;
