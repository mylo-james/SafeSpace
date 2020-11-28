import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import Signup from './components/Signup';
import heroImg from './heroImg.jpg';

const HeroImg = styled.img`
    position: absolute;
    top: 80px;
    width: 100vw;
    height: calc(100vh - 80px);
    object-fit: cover;
    z-index: -1;
    opacity: 0;
    animation: fadeIn 1s 0.5s linear forwards;
`;
function Welcome() {
    const { pathname } = useLocation();

    if (!['/welcome/login', '/welcome/signup'].includes(pathname)) {
        return <Redirect to='/welcome/login' />;
    }

    return (
        <>
            <HeroImg src={heroImg} />
            <Switch>
                <Route path='/welcome/login' component={Login} />
                <Route path='/welcome/signup' component={Signup} />
            </Switch>
        </>
    );
}

export default Welcome;
