import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function Welcome() {
    const { pathname } = useLocation();

    console.log(pathname, '/welcome/login');

    if (!['/welcome/login', '/welcome/signup'].includes(pathname)) {
        return <Redirect to="/welcome/login" />;
    }

    return (
        <Switch>
            <Route path="/welcome/login" component={Login} />
            <Route path="/welcome/signup" component={Signup} />
        </Switch>
    );
}

export default Welcome;
