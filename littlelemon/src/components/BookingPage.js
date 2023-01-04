import imgSrc from '../assets/lasagna.jpeg'
import BookingForm from './BookingForm';
import HeroBanner from './HeroBanner';
import { useReducer, } from "react";


const updateTimes = (state, action) => {
    //to do
    console.log(action);
    console.log(state);
    return ["18:30", "19:00", "21:30", "22:00"];
}

function BookingPage()
{
    

    const initializeTimes = () => {
        //to do
        console.log("Initializing");
        const initialSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",];

        return initialSlots
    }
    const initialSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",];

    const [availableTimes, dispatch] = useReducer(updateTimes, initialSlots, initializeTimes);

   
    return(
        <>
           <HeroBanner description="Reserve you table now and discover our newly designed space in Chicago. You will love it!"
                        imgSrc={imgSrc}
                        alt="Restaurant with tables and plants decorating"
                        />
            <section>
                <BookingForm availableTimes={availableTimes} 
                             dispatch={dispatch}
                    />
            </section>
        </>
    )
}

export default BookingPage;