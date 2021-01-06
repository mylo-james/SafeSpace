import Brand from './Brand';
import { NavBarSty } from './styles';
import NavBarButtons from './Navigation';

function NavBar() {
    return (
        <NavBarSty>
            <Brand />
            <NavBarButtons />
        </NavBarSty>
    );
}

export default NavBar;
