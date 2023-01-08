import React, { useState } from "react";

const PopUpContext = React.createContext();

function PopUpProvider({children}){

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isSubmissionConfirmed, setIsSubmissionConfirmed] = useState(false);
    const [data, setData] = useState({
        bookingName: "",
        date: "",
        time: "",
        occasion: "",
        guests: "",

    })
    return(
        <PopUpContext.Provider value={{
            isPopUpOpen,
            setIsPopUpOpen,
            data,
            setData,
            isSubmissionConfirmed,
            setIsSubmissionConfirmed
        }}>
            {children}
        </PopUpContext.Provider>
    );
}

export const usePopUpContext = () => React.useContext(PopUpContext);
export default PopUpProvider;

