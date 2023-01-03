import DesktopNav from './DesktopNav';
import logoSrc from '../assets/logoBright.png';
import HamburgerNav from './HamburgerNav';

function Header(){
    return (
        <header>
            <img src={logoSrc} alt="Little lemon header logo"/>
            <DesktopNav />
            <HamburgerNav />
        </header>
    );
}

export default Header;