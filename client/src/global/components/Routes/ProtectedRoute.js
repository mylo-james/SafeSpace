import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import valid from '../../utils/valid';

function ProtectedRoute({ children, exact, path }) {
    const { userId, userSurvey } = useSelector(({ session }) => ({
        userId: session.id,
        userSurvey: session.survey,
    }));

    if (!userId) return <Redirect to='/login' />;

    if (!valid(userSurvey)) return <Redirect to='/survey' />;

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
}

export default ProtectedRoute;
