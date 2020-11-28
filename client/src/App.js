import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './global/components/NavBar';
import UserContextProvider from './global/Contexts/UserContext/Provider';
import Home from './scenes/Home/Home';
import NotFound from './scenes/NotFound/NotFound';
import ThemeContextProvider from './global/Contexts/ThemeContext/Provider';
import AuthRoute from './global/components/Routes/AuthRoute';
import Welcome from './scenes/Welcome/Welcome';
import ProtectedRoute from './global/components/Routes/ProtectedRoute';
import './reset.css';
import styled from 'styled-components';

const Main = styled.main`
    min-height: calc(100vh - 80px);
`;

function App() {
    const [loaded, setLoad] = useState(false);

    return (
        <BrowserRouter>
            <UserContextProvider setLoad={setLoad}>
                <ThemeContextProvider>
                    {loaded && (
                        <>
                            <NavBar />
                            <Main>
                                <Switch>
                                    <AuthRoute
                                        path='/welcome'
                                        component={Welcome}
                                    />
                                    <ProtectedRoute
                                        path='/'
                                        exact
                                        component={Home}
                                    />
                                    <Route path='*' component={NotFound} />
                                </Switch>
                            </Main>
                        </>
                    )}
                </ThemeContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default App;
