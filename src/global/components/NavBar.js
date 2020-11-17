import styled from 'styled-components';

const StyNavBar = styled.nav`
    width: 100vw;
    height: 100px;
    background-color: green;
`;
function NavBar() {
    return (
        <StyNavBar>
            <div>This is a nav</div>
        </StyNavBar>
    );
}

export default NavBar;
