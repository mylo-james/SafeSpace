import { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext/Context';

function ProtectedRoute({ path, exact, component: Component, ...props }) {
    const { user } = useContext(UserContext);

    if (!user) return <Redirect to="/welcome" />;

    return <Route path={path} render={() => <Component {...props} />} />;
}

export default ProtectedRoute;
