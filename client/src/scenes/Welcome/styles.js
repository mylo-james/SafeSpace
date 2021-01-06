import styled from 'styled-components';
//import * as theme from '../../global/style/themes';

export const WelcomeSty = styled.div`
    position: relative;
    height: calc(100vh - 50px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeroImg = styled.img`
    position: absolute;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0;
    animation: fadeIn 1s 0.5s linear forwards;
`;
