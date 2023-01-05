import { useEffect, useMemo, useState } from "react";


function BookingForm(props)
{

    const [date, setDate] = useState("2023-01-01");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("none");

    const [isSubmitted, setIsSubmitted] = useState(false);

    //Retrieve Available Slots with the new date
    const dispatch = props.dispatch;
    useEffect( () =>{
        dispatch({type:`${date}`});
    },[date, dispatch])


  //Will avoid running when the form input remain the same
  const formData = useMemo( () =>{
    return {
        date: date,
        time:time,
        guests: guests,
        occasion: occasion,
    }
  }, [date, time, guests, occasion]);

    //Send date
    const onSubmit = props.onSubmit; //callback function that will run submitAPI
    useEffect( () => {
        //To avoid the initial execution
        if(isSubmitted){
            onSubmit(formData);                  
        }
    },[isSubmitted, onSubmit, formData])

    return(
        <form style={{display: "grid", 
                      maxWidth: "200px", 
                      gap: "20px"}}             
                      >
            <label htmlFor="res-date">Choose date</label>
            <input  type="date" 
                    id="res-date" 
                    value={date}
                    onChange= {(e) => {setDate(e.target.value);}
                                                                
                }
                    />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time"
                    value={time}
                    onChange= {(e) => {setTime(e.target.value)}}>
                        {props.availableTimes.map((timeSlot) => {
                            return <option key={timeSlot}>{timeSlot}</option>
                        })}                
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" 
                    placeholder="1" 
                    min="1" max="10" 
                    id="guests" 
                    value={guests}
                    onChange= {(e) => {setGuests(e.target.value)}}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion"
                        value={occasion}
                        onChange= {(e) => {setOccasion(e.target.value)}}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input 
                type="submit" 
                value="Make Your reservation" 
                onClick={(e) => {e.preventDefault()
                                   setIsSubmitted(true); 
                                }}/>
        </form>
    );
}

export default BookingForm;