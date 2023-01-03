import footerLogo from '../assets/lemonBright.png'
import NavItems from '../NavItems';

function Footer(){
    return (
        <footer>
            <img src={footerLogo} alt="Logo showing only a yellow lemon" />
            <section className="doormatNav">
                <h3>Doormat Navigation</h3>
                    <NavItems />         
            </section>
            <section>
                <h3>Contact</h3>
                <ul>
                    <li>[ICON]Address</li>
                    <li>[ICON]Phone Number</li>
                    <li>[ICON]email</li>
                </ul>
            </section>
            <section>
                <h3>Social</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </section>


        </footer>
    );
}

export default Footer;