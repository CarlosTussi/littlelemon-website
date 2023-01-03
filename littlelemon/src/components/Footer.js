import footerLogo from '../assets/lemonBright.png'
import NavItems from '../NavItems';

function Footer(){
    return (
        <footer>
            <img src={footerLogo} alt="Logo showing only a yellow lemon" />
            <section className="doormatNav">
                <h4>Doormat Navigation</h4>
                    <NavItems />         
            </section>
            <section>
                <h4>Contact</h4>
                <ul>
                    <li>[ICON]Address</li>
                    <li>[ICON]Phone Number</li>
                    <li>[ICON]email</li>
                </ul>
            </section>
            <section>
                <h4>Social</h4>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </section>


        </footer>
    );
}

export default Footer;