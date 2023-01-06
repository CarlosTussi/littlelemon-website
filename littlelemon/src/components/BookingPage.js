import imgSrc from '../assets/lasagna.jpeg'
import BookingForm from './BookingForm';
import HeroBanner from './HeroBanner';
import { useEffect, useReducer, } from "react";

import { fetchAPI, submitAPI } from '../api/api';
import { useNavigate, } from 'react-router-dom';

function BookingPage()
{

    const navigate = useNavigate();
    /* NOTE:
        All these functions (submitForm, initializeTimes, updateTimes)
            are called inside <BookingForm> component using useEffect.

        The only exception is updateTimes that is called inside a useEffect
        with empty dependency array so that it initialzes the initial time slots
        upon component rendering.

        I believe this whole logic could have been implemented inside <BookingForm> itself.
    */
    const submitForm = (data) => {

        const response = submitAPI(data);
        
        if (response){ 
            navigate("/confirmation", { state: data });
            console.log(data);
        }
        else
            console.log("Error");
        
    }
    
    //WILL ALWAYS be called inside updateTimes which will always be inside useEffect
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

    //updateTimes WILL ALWAYS be dispatched inside useEffect
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
    },[])//Empty array because only executed when initializing


    return(
        <>
           <HeroBanner description="Reserve you table now and discover our newly designed space in Chicago. You will love it!"
                        imgSrc={imgSrc}
                        alt="Restaurant with tables and plants decorating"
                        />
            <section className="formSection">
                <h4>Reserve a Table</h4>
                <BookingForm availableTimes={availableTimes} 
                             dispatch={dispatch}
                             onSubmit={submitForm}
                    />
            </section>
        </>
    )
}

export default BookingPage;