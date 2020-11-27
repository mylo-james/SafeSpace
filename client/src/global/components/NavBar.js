import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../Contexts/ThemeContext/Context';
import { def, dark } from '../Contexts/ThemeContext/themes';


const StyNavBar = styled.nav`
    width: 100vw;
    height: 100px;
    background-color: ${({ theme }) => theme.primary};
`;

function NavBar() {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        switch (theme) {
            case def:
                setTheme(dark);
                break;
            default:
                setTheme(def);
        }
    };

    return (
        <StyNavBar theme={theme}>
            <div>This is a nav</div>
            <button onClick={changeTheme}>Change Theme</button>
        </StyNavBar>
    );
}

export default NavBar;
