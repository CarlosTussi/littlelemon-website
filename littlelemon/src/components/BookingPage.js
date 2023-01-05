import imgSrc from '../assets/lasagna.jpeg'
import BookingForm from './BookingForm';
import HeroBanner from './HeroBanner';
import { useEffect, useReducer, } from "react";

import { fetchAPI, submitAPI } from '../api/api';

function BookingPage()
{
    
    //Will always be called inside updateTimes which will always be inside useEffect
    const initializeTimes = () => {
        const todayDate = new Date();

        try{
            const initialSlots = fetchAPI(todayDate);
            if(initialSlots)  
                return initialSlots;
            else
                throw Error("Could not fetch time slots");
        }catch(e){
            console.log("Error: ", e);
            return [""];
        }

    }

    //updateTimes will always be dispatched inside useEffect
    const updateTimes = (state, action) => {
        //to do    

        //Initial time slots
        if(action.type ==='initialize'){
            const initialSlots = initializeTimes();
            return initialSlots;
        }
        //Time slots according to today's date
        else{
            const selectedDate = new Date(action.type);
        
            try{
                const availableSlots = fetchAPI(selectedDate);
                if(availableSlots)
                    return availableSlots;
                else    
                    throw Error("Could not fetch time slots");
            }catch(e){
                console.log("Error: ", e);
                return [""];
            }                        
        }                
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, [""], initializeTimes);

    useEffect (() => {
        dispatch({type: "initialize"});
    },[])//Empty array because onlly executed when initializing


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