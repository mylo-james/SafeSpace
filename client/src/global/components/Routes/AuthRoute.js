import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ path, exact, component: Component, ...props }) {
    const userId = useSelector(({ users: { currentUserId } }) => currentUserId);

    if (userId) return <Redirect to='/' />;

    return <Route path={path} render={() => <Component {...props} />} />;
}

export default AuthRoute;
