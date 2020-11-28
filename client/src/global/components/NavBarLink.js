import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../Contexts/ThemeContext/Context';
import { useContext } from 'react';

const StyNavBarLink = styled.button`
    height: 30px;
    color: ${({ theme }) => theme.light};
    background: none;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    border: solid 2px ${({ theme }) => theme.light};
    border-radius: 20px;
    padding: 5px 20px;
    transition: all 0.15s ease-out 0s;

    :hover {
        background: ${({ theme }) => theme.light};
        color: ${({ theme }) => theme.primary};
    }
`;

function NavBarLink({ to, children }) {
    const history = useHistory();
    const { theme } = useContext(ThemeContext);
    const handleClick = () => {
        history.push(to);
    };
    return (
        <StyNavBarLink theme={theme} onClick={handleClick}>
            {children}
        </StyNavBarLink>
    );
}

export default NavBarLink;
