import Brand from './Brand';
import { NavBarSty } from './styles';
import Navigation from './Navigation';

function NavBar() {
    return (
        <NavBarSty>
            <Brand />
            <Navigation />
        </NavBarSty>
    );
}

export default NavBar;
