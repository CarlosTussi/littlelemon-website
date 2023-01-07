import { Link} from 'react-router-dom';
import { useSideMenuContext } from '../context/SideMenuProvider';

function NavItems()
{    
    const {setIsOpen} = useSideMenuContext();

    return(
        <>
             <ul>
                <li><Link to="/" className='navLink' onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/comingsoon" className='navLink' onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/comingsoon" className='navLink' onClick={() => setIsOpen(false)}>Menu</Link></li>
                <li><Link to="/reservations" className='navLink' onClick={() => setIsOpen(false)}>Reservations</Link></li>
                <li><Link to="/comingsoon" className='navLink' onClick={() => setIsOpen(false)}>Order Online</Link></li>
                <li><Link to="/comingsoon" className='navLink' onClick={() => setIsOpen(false)}>Login</Link></li>                    
            </ul>
        </>
    )
}

export default NavItems;