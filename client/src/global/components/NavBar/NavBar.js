import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../Contexts/ThemeContext/Context';
import Brand from './Brand';
import NavBarButtons from './NavBarButtons';

const StyNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
    height: 80px;
    padding: 0 20px;
    box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.primary};

    .nav-right > * {
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

    return (
        <StyNavBar theme={theme}>
            <Brand />
            <NavBarButtons />
        </StyNavBar>
    );
}

export default NavBar;
