import styled from 'styled-components';

export const NavBarSty = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
    height: 75px;
    padding: 0 20px;

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
    }
`;
