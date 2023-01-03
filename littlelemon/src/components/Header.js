import Nav from './Nav';
import logoSrc from '../assets/logoBright.png';

function Header(){
    return (
        <header>
            <img src={logoSrc} alt="Little lemon header logo"/>
            <Nav />
        </header>
    );
}

export default Header;