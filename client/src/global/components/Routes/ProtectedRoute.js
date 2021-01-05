import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import valid from '../../utils/valid'

function ProtectedRoute({ path, exact, component: Component, ...props }) {
    const { currentUserId, byId } = useSelector(({ users }) => users);

    if (!currentUserId) return <Redirect to='/welcome' />;

    if (!valid(byId[currentUserId].survey)) return <Redirect to='/survey' />;

    return <Route path={path} render={() => <Component {...props} />} />;
}

export default ProtectedRoute;
