import { useState } from 'react';
import hamburgerIcon from '../assets/hamburger.svg'
import NavItems from '../NavItems';
import {X,} from 'react-feather';

function HamburgerNav()
{

    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="hamburgerNav">            
            {isOpen ? 
                        <>
                            
                            <div className="transparentBackground" aria-hidden="true"/>
                            <div className="openHamburgerMenu">
                                <X size="2em" onClick={() => setIsOpen(false)}/>
                                <NavItems/> 
                            </div>                            
                            
                        </>                           
                        :
                        <img src={hamburgerIcon} 
                             role="menu button" 
                             alt="Three lines of equal size stacked"
                             onClick={() => setIsOpen(true)}/>
                    
                        
            }
            
            
            
        </nav>
    )
}

export default HamburgerNav;

 {/* <div className="transparentBackground" aria-hidden="true"/>  */}