import React, { useContext, useState } from "react";


const SideMenuContext = React.createContext();

function SideMenuProvider({children})
{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <SideMenuContext.Provider value={{
            isOpen,
            setIsOpen,
        }}>
            {children}
        </SideMenuContext.Provider>
    )
}


export default SideMenuProvider;
export const useSideMenuContext = () => React.useContext(SideMenuContext);