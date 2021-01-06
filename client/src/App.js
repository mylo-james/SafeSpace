import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthRoute from './global/components/Routes/AuthRoute';
import ProtectedRoute from './global/components/Routes/ProtectedRoute';

import Welcome from './scenes/Welcome/Welcome';
import Home from './scenes/Home/Home';
import NotFound from './scenes/NotFound/NotFound';
import NavBar from './global/components/NavBar/NavBar';
import Profile from './scenes/Profile/Profile';

import { useDispatch } from 'react-redux';
import { load } from './store/session';

function App() {
    const dispatch = useDispatch();
    const [loaded, setLoad] = useState(false);

    useEffect(() => dispatch(load()).then((res) => setLoad(res)), [dispatch]);

    return (
        <BrowserRouter>
            {loaded && (
                <div className='app'>
                    <Switch>
                        <AuthRoute path={['/login', '/signup']}>
                            <NavBar />
                            <Welcome />
                        </AuthRoute>
                        <ProtectedRoute path='/' exact>
                            <NavBar />
                            <Home />
                        </ProtectedRoute>
                        <ProtectedRoute path='/profile/:userId' exact>
                            <NavBar />
                            <Profile />
                        </ProtectedRoute>
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            )}
        </BrowserRouter>
    );
}

export default App;
