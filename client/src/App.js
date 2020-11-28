import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './scenes/Home/Home';
import NotFound from './scenes/NotFound/NotFound';
import AuthRoute from './global/components/Routes/AuthRoute';
import Welcome from './scenes/Welcome/Welcome';
import ProtectedRoute from './global/components/Routes/ProtectedRoute';
import './reset.css';
import './animations.css';
import styled from 'styled-components';
import NavBar from './global/components/NavBar/NavBar';
import Profile from './scenes/Profile/Profile';
import ContextProvider from './global/Contexts/ContextProvider';

const Main = styled.main`
    min-height: calc(100vh - 80px);
`;

function App() {
    const [loaded, setLoad] = useState(false);

    return (
        <BrowserRouter>
            <ContextProvider setLoad={setLoad}>
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
                                <ProtectedRoute
                                    path='/profile/:id'
                                    exact
                                    component={Profile}
                                />
                                <Route path='*' component={NotFound} />
                            </Switch>
                        </Main>
                    </>
                )}
            </ContextProvider>
        </BrowserRouter>
    );
}

export default App;
