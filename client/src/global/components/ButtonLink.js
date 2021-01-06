import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as theme from '../style/themes';

export const LinkSty = styled.div`
    height: 30px;
    color: ${theme.primary};
    background: none;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    border: solid 2px ${theme.front};
    border-radius: 20px;
    padding: 5px 20px;
    transition: all 0.15s ease-out 0s;

    :hover {
        background: ${theme.front};
        color: ${theme.back};
    }

    svg {
        fill: white;
    }
    :hover svg {
        fill: ${theme.primary};
    }
`;

function NavBarLink({ to, href, children, onClick }) {
    if (to) {
        return <NavLink to={to}>{children}</NavLink>;
    } else if (href) {
        return <a href={href}>{children}</a>;
    } else {
        return <button onClick={onClick}>{children}</button>;
    }
}

export default NavBarLink;
