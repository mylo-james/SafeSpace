import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function AuthRoute({ children, path, exact }) {
    const userId = useSelector(({ session }) => session.id);

    if (userId) return <Redirect to='/' />;

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
}

export default AuthRoute;
