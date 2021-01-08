import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { back, front, cursor } from './themes';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}

   html {
        font-family: 'Dosis', sans-serif;
       font-size: calc(20px + 6 * ((100vw - 320px) / 680));
   }
   * {
        box-sizing: border-box;

   }

   body {
       position: relative;
       width: 100vw;
       color: ${back};
       cursor: ${cursor};
       background-color: #FAFBF5;
       overflow-x: hidden;
   }


    button, a {
        font-size: 0.8em;
        padding: 5px 30px;
        background: rgba(50,50,50,.2);
        border: solid ${back} 1px;
        border-radius: 5px;
         text-decoration: none;
         color: ${back}
    }

    button:hover, a:hover {
        border: none;
        cursor: pointer;
        color: ${back};
        background: ${front};
    }

 
   ::-webkit-scrollbar {
    width: 12px;
   }
 
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
 
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }

  
`;

const GlobalStyleWrapper = ({ children }) => {
    const [mode, setMode] = useState('light');
    const [cursor, setCursor] = useState('default');

    return (
        <ThemeProvider theme={{ mode, setMode, cursor, setCursor }}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default GlobalStyleWrapper;
