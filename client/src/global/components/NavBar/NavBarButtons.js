import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext/Context';
import NavBarLink from './NavBarLink';

function NavBarButtons() {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);

    const handleLogout = async () => {
        const res = await fetch('/api/logout');
        if (res.status === 200) {
            setUser('');
            history.push('/welcome');
        }
    };

    return (
        <>
            {user ? (
                <div className='nav-right'>
                    <NavBarLink to={`/profile/${user.id}`}>
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
