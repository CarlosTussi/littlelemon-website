import { useEffect, useRef, useState } from 'react';
import hamburgerIcon from '../assets/hamburger.svg'
import NavItems from './NavItems';
import {useSideMenuContext} from '../context/SideMenuProvider'
import {X,} from 'react-feather';

function HamburgerNav()
{

    const {isOpen, setIsOpen} = useSideMenuContext();
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
                                <button><X size="2em" onClick={() => setIsOpen(false)}/></button>
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