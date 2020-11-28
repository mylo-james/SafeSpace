import styled from 'styled-components';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../Contexts/ThemeContext/Context';

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

    svg {
        fill: white;
    }
    :hover svg {
        fill: ${({ theme }) => theme.primary};
    }
`;

function NavBarLink({ to, children, onClick }) {
    const history = useHistory();
    const { theme } = useContext(ThemeContext);
    const handleClick = () => {
        if (to) {
            history.push(to);
        } else {
            onClick();
        }
    };
    return (
        <StyNavBarLink theme={theme} onClick={handleClick}>
            {children}
        </StyNavBarLink>
    );
}

export default NavBarLink;
