
import { useNavigate } from "react-router-dom";
import { usePopUpContext } from "../context/PopUpProvider";

function PopUp()
{
    const navigate = useNavigate();
    const handleConfirmation = () =>{
        setIsPopUpOpen(false);

        navigate("/confirmation", {state: "TESTE DATA - navigate call PopUp.js"})
    }

    const {setIsPopUpOpen, data} = usePopUpContext();
    return(
        <>
        <div className="transparentBackground"></div>
        <div className="confirmationBox">
            <h5>Please confirm your booking details</h5>
            <div className="confimationField"><p>Name:</p><p>Carlos</p></div>
            <div className="confimationField"><p>Date:</p><p>2023-01-43</p></div>
            <div className="confimationField"><p>Time:</p><p>18:00</p></div>
            <div className="confimationField"><p>Guests:</p><p>3</p></div>
            <div className="confimationField"><p>Occasion:</p><p>Party</p></div>
            
            <div className="confirmEditButton">
                <button onClick={()=> setIsPopUpOpen(false)}>Edit Details</button>
                <button onClick={handleConfirmation}>Confirm</button>
            </div>           
        </div>
        </>
    );
}

export default PopUp;