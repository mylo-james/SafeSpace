import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyNavBarLink = styled.button`
    height: 30px;
    color: blue;
    background: none;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    border: solid 2px blue;
    border-radius: 20px;
    padding: 5px 20px;
    transition: all 0.15s ease-out 0s;

    :hover {
        background: blue;
        color: red;
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

    const handleClick = () => {
        if (to) {
            history.push(to);
        } else {
            onClick();
        }
    };
    return <StyNavBarLink onClick={handleClick}>{children}</StyNavBarLink>;
}

export default NavBarLink;
