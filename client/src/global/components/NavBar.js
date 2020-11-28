import { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';
import ThemeContext from '../Contexts/ThemeContext/Context';
import UserContext from '../Contexts/UserContext/Context';
import NavBarLink from './NavBarLink';

const StyNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
    height: 80px;
    padding: 0 20px;
    box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.primary};

    .auth-buttons > button {
        margin: 0 20px;
    }

    .logo-wrapper {
        width: 40px;
        height: 40px;
    }

    .brand {
        display: flex;
        align-items: center;
        width: 50%;
    }

    h1 {
        margin-left: 20px;
        color: ${({ theme }) => theme.light};
    }
`;
function NavBar() {
    const { theme } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);

    const handleLogout = async () => {
        const res = await fetch('/api/logout');
        if (res.status === 200) {
            setUser('');
        }
    };

    const buttons = user ? (
        <button onClick={handleLogout}>Logout</button>
    ) : (
        <div className='auth-buttons'>
            <NavBarLink to='/welcome/login'>Login</NavBarLink>
            <NavBarLink to='/welcome/signup'>Sign up</NavBarLink>
        </div>
    );

    return (
        <StyNavBar theme={theme}>
            <div className='brand'>
                <div className='logo-wrapper'>
                    <Logo />
                </div>
                <h1>SafeSpace</h1>
            </div>
            {buttons}
        </StyNavBar>
    );
}

export default NavBar;
