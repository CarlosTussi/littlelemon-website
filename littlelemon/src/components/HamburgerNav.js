import hamburgerIcon from '../assets/hamburger.svg'

function HamburgerNav()
{
    return(
        <nav className="hamburgerNav">
            <img src={hamburgerIcon} alt="Three lines of equal size stacked"/>
        </nav>
    )
}

export default HamburgerNav;