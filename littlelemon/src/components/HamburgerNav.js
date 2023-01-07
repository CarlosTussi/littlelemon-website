import { useEffect, useRef, useState } from 'react';
import hamburgerIcon from '../assets/hamburger.svg'
import NavItems from '../NavItems';
import {X,} from 'react-feather';

function HamburgerNav()
{

    const [isOpen, setIsOpen] = useState(false);
    const sideMenuRef = useRef();

     useEffect(()=>{
        if(sideMenuRef.current) //Avoid first render
            if(isOpen)
            {                
                sideMenuRef.current.style.transform = "translateX(0em)";  
            }
            else{                
                sideMenuRef.current.style.transform = "translateX(-20em)";
            }
    },[isOpen])

    return(
        <nav className="hamburgerNav">            

                        <>
                            
                            {isOpen? <div className="transparentBackground" aria-hidden="true"/>: ""}
                            <div className="openHamburgerMenu"
                                 ref={sideMenuRef}
                                style={
                                    isOpen ? {right: "0em"} : {right: "-40em"}
                                }
                                 >
                                <X size="2em" onClick={() => setIsOpen(false) }/>
                                <NavItems/> 
                            </div>                            
                            
                        </>                           

                        <img src={hamburgerIcon} 
                             role="menu button" 
                             alt="Three lines of equal size stacked"
                             onClick={() => setIsOpen(true)}/>
                    
                        
            
            
            
            
        </nav>
    )
}

export default HamburgerNav;