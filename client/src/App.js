import { useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { load } from './store/users';

const Main = styled.main`
    min-height: calc(100vh - 80px);
`;

function App() {
    const dispatch = useDispatch();
    const [loaded, setLoad] = useState(false);

    useEffect(() => dispatch(load()).then((res) => setLoad(res)), [dispatch]);

    return (
        <BrowserRouter>
            {loaded && (
                <>
                    <NavBar />
                    <Main>
                        <Switch>
                            <AuthRoute path='/welcome' component={Welcome} />
                            <ProtectedRoute path='/' exact component={Home} />
                            <ProtectedRoute
                                path='/profile/:userId'
                                exact
                                component={Profile}
                            />
                            <Route path='*' component={NotFound} />
                        </Switch>
                    </Main>
                </>
            )}
        </BrowserRouter>
    );
}

export default App;
