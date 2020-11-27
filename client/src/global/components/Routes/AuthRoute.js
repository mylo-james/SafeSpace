import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext/Context';

function AuthRoute({ path, exact, component: Component, ...props }) {
    const { user } = useContext(UserContext);

    if (user) return <Redirect to="/" />;

    return <Route path={path} render={() => <Component {...props} />} />;
}

export default AuthRoute;
