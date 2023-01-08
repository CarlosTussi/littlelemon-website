
import { usePopUpContext } from "../context/PopUpProvider";

function PopUp(props)
{
    const handleConfirmation = () =>{
        setIsPopUpOpen(false);
        setIsSubmissionConfirmed(true);
    
    }

    const {setIsPopUpOpen, setIsSubmissionConfirmed} = usePopUpContext();
    return(
        <>
        <div className="transparentBackground"></div>
        <div className="confirmationBox">
            <h5>Please confirm your booking details</h5>
            <div className="confimationField"><p>Name:</p><p>{props.data.bookingName}</p></div>
            <div className="confimationField"><p>Date:</p><p>{props.data.date}</p></div>
            <div className="confimationField"><p>Time:</p><p>{props.data.time}</p></div>
            <div className="confimationField"><p>Guests:</p><p>{props.data.guests}</p></div>
            <div className="confimationField"><p>Occasion:</p><p>{props.data.occasion}</p></div>
            
            <div className="confirmEditButton">
                <button onClick={()=> setIsPopUpOpen(false)}>Edit Details</button>
                <button onClick={handleConfirmation}>Confirm</button>
            </div>           
        </div>
        </>
    );
}

export default PopUp;