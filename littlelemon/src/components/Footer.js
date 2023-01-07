import footerLogo from '../assets/lemonBright.png'
import NavItems from './NavItems';
import {Facebook, Instagram, MapPin, Phone, AtSign} from 'react-feather';

function Footer(){
    return (
        <footer>
            <img src={footerLogo} alt="Logo showing only a yellow lemon" />
            <section className="doormatNav">
                <h3>Doormat Navigation</h3>
                <NavItems />         
            </section>
            <section className="footerContact">
                <h3>Contact</h3>
                <ul>
                    <li><MapPin size="1em" strokeWidth="0.8"/>Chicago, USA</li>
                    <li><Phone size="1em" strokeWidth="0.8"/> +12345678910</li>
                    <li><AtSign size="1em" strokeWidth="0.8"/>contact@littlelemon.com</li>
                </ul>
            </section>
            <section className="footerSocial">
                <h3>Social</h3>
                <ul>
                    <li><a href='http://facebook.com' target="_blank" rel="noreferrer"><Facebook size="3em" strokeWidth="0.8"/></a></li>
                    <li><a href='http://instagram.com' target="_blank" rel="noreferrer"><Instagram size="3em" strokeWidth="0.8"/></a></li>
                </ul>
            </section>


        </footer>
    );
}

export default Footer;