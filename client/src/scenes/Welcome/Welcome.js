import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { HeroImg, WelcomeSty } from './styles';
import heroImg from './heroImg.jpg';

function Welcome() {
    return (
        <WelcomeSty>
            <HeroImg src={heroImg} />
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </Switch>
        </WelcomeSty>
    );
}

export default Welcome;
