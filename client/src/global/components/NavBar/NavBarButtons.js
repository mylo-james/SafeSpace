import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../store/users';

import NavBarLink from './NavBarLink';

function NavBarButtons() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = async () => {
        await dispatch(logout());
        history.push('/');
    };
    const userId = useSelector(({ users: { currentUserId } }) => currentUserId);

    return (
        <>
            {userId ? (
                <div className='nav-right'>
                    <NavBarLink to={`/profile/${userId}`}>
                        <FaUser />
                    </NavBarLink>
                    <NavBarLink onClick={handleLogout}>Logout</NavBarLink>
                </div>
            ) : (
                <div className='nav-right'>
                    <NavBarLink to='/welcome/login'>Login</NavBarLink>
                    <NavBarLink to='/welcome/signup'>Sign up</NavBarLink>
                </div>
            )}
        </>
    );
}

export default NavBarButtons;
