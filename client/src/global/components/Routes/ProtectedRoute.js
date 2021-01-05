import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ path, exact, component: Component, ...props }) {
    const userId = useSelector(({ users: { currentUserId } }) => currentUserId);

    if (!userId) return <Redirect to='/welcome' />;

    return <Route path={path} render={() => <Component {...props} />} />;
}

export default ProtectedRoute;
