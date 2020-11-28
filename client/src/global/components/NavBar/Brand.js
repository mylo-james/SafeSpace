import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

function Brand() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    };
    return (
        <div className='brand' onClick={handleClick}>
            <div className='logo-wrapper'>
                <Logo />
            </div>
            <h1>SafeSpace</h1>
        </div>
    );
}

export default Brand;
