import { WelcomeSty } from './styles';
import heroImg from './PrideFlag.jpeg';

function Welcome() {
    return (
        <>
            <WelcomeSty>
                <img alt='pride flag' src={heroImg} />
                <div className='overlay' />
                <div className='banner'>
                    <div className='message'>
                        <h2>Find your SafeSpace</h2>
                        <p>Houses, Apartments, Roommates</p>
                        <p>LGBTQIA+ Friendly</p>
                    </div>
                    <div className='buttons'>
                        <button>Roommates</button>
                        <button>Spaces</button>
                    </div>
                </div>
                {/* <Switch>
                   <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} /> 
                </Switch> */}
            </WelcomeSty>
        </>
    );
}

export default Welcome;
