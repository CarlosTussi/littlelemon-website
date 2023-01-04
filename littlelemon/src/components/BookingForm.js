import { useState } from "react";

function BookingForm(props)
{

    const [date, setDate] = useState("2023-01-01");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("none");

    

    return(
        <form style={{display: "grid", 
                      maxWidth: "200px", 
                      gap: "20px"}}             
                      >
            <label htmlFor="res-date">Choose date</label>
            <input  type="date" 
                    id="res-date" 
                    value={date}
                    onChange= {(e) => {
                        
                                    setDate(e.target.value);
                                    props.dispatch({type:`${e.target.value}`})
                                
                                        }
                                                                
                }
                    />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time "
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
                onClick={(e) => e.preventDefault()}/>
        </form>
    );
}

export default BookingForm;