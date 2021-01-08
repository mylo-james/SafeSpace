import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as theme from '../style/themes';

export const LinkSty = styled.div`
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
