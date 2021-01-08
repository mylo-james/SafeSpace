import styled from 'styled-components';
import { front } from '../../global/style/themes';

export const WelcomeSty = styled.div`
    height: calc(100vh - 75px);
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    * {
        opacity: 0;
        animation: fadeIn 1s 0.5s linear forwards;
    }

    img {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: 50% 55%;
        z-index: -1;
    }

    .overlay {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba(50, 50, 100, 0.3);
        z-index: -1;
    }

    .banner {
        max-width: 700px;
        width: 80vw;
        opacity: 0;
        animation: fadeIn 1s 2s linear forwards;
    }

    .message {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        height: 200px;
        font-size: 2em;
        font-family: 'Heebo', sans-serif;
        text-shadow: 1px 2px black;

        p {
            font-size: 1rem;
        }
    }

    .buttons {
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;

        button {
            background-color: ${front};
            font-size: 0.6rem;
            font-family: 'Dosis', sans-serif;
            margin-right: 30px;
            font-weight: 400;
        }

        button:hover {
            background: none;
            border: 1px ${front} solid;
            color: ${front};
            text-shadow: white 0px 0px 2px;
        }
    }
`;
