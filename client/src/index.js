import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyle from './global/style/GlobalStyle';
import './animations.css';

import configureStore from './store';

const store = configureStore();

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);
