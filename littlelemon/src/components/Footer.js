import footerLogo from '../assets/lemonBright.png'

function Footer(){
    return (
        <footer>
            <img src={footerLogo} alt="Logo showing only a yellow lemon" />
            <section>
                <h4>Doormat Navigation</h4>
                    <ul>
                        <a href="#home"><li>Home</li></a>
                        <a href="#about"><li>About</li></a>
                        <a href="#menu"><li>Menu</li></a>
                        <a href="#reservations"><li>Reservations</li></a>
                        <a href="#order"><li>Order Online</li></a>
                        <a href="#login"><li>Login</li></a>                        
                    </ul>                
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