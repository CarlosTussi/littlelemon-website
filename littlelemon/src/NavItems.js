import { Link} from 'react-router-dom';

function NavItems()
{
    return(
        <>
            <ul>
                <ul>
                    <li><Link to="/" className='navLink'>Home</Link></li>
                    <li><Link to="/comingsoon" className='navLink'>About</Link></li>
                    <li><Link to="/comingsoon" className='navLink'>Menu</Link></li>
                    <li><Link to="/reservations" className='navLink'>Reservations</Link></li>
                    <li><Link to="/comingsoon" className='navLink'>Order Online</Link></li>
                    <li><Link to="/comingsoon" className='navLink'>Login</Link></li>                    
                </ul>
            </ul>
        </>
    )
}

export default NavItems;