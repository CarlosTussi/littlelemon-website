import React, { useState } from "react";

const PopUpContext = React.createContext();

function PopUpProvider({children}){

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isSubmissionConfirmed, setIsSubmissionConfirmed] = useState(false);
    
    return(
        <PopUpContext.Provider value={{
            isPopUpOpen,
            setIsPopUpOpen,
            isSubmissionConfirmed,
            setIsSubmissionConfirmed
        }}>
            {children}
        </PopUpContext.Provider>
    );
}

export const usePopUpContext = () => React.useContext(PopUpContext);
export default PopUpProvider;

