import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logout } from '../../../store/session';

import ButtonLink from '../ButtonLink';

function Navigation() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const userId = useSelector(({ session }) => session.id);

    return (
        <>
            {userId ? (
                <div className='nav-right'>
                    <ButtonLink to={`/profile/${userId}`}>
                        <FaUser />
                    </ButtonLink>
                    <ButtonLink onClick={() => dispatch(logout())}>
                        Logout
                    </ButtonLink>
                </div>
            ) : (
                <div className='nav-right'>
                    {pathname === '/signup' ? (
                        <ButtonLink to='/login'>Login</ButtonLink>
                    ) : (
                        <ButtonLink to='/signup'>Sign up</ButtonLink>
                    )}
                </div>
            )}
        </>
    );
}

export default Navigation;
