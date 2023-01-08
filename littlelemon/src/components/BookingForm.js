import { useEffect, useState } from "react";
import {useFormik, } from "formik";
import * as Yup from "yup";



function ErrorMessage (props)
{
    return (
    <p style={{    
        display: `${props.isDisplayed? "block" : "none"}`
    }}>
        {props.children}
    </p>
    );
}

//To confiorm with HTML5 date picker
const todayDate = new Date().toJSON().slice(0, 10);
function BookingForm(props)
{
    const formik = useFormik({
        initialValues: {
            date: todayDate,
            time: "",
            guests: 1,
            occasion: "",
            bookingName: "",
        },

        onSubmit: (data) => {  
            //Will trigger the useEffect hook which will submit the data                                 
            setIsSubmitted(true);
        },

        validationSchema: Yup.object({
            bookingName: Yup.string().required(),
            date: Yup.date().min(todayDate).required(), //new Date() will return today's date
            time: Yup.string().matches(/\d\d:\d\d/).required(),
            guests: Yup.number().required().min(1).max(10),
            occasion: Yup.string(),

        })
    })

    const [isSubmitted, setIsSubmitted] = useState(false);
    
    //Retrieve Available Slots with the new date
    const dispatch = props.dispatch;
    useEffect( () =>{        
        dispatch({type:`${formik.values.date}`});

    },[dispatch, formik.values.date])


    //Send date
    const onSubmit = props.onSubmit; //callback function that will run submitAPI
    useEffect( () => {
        //To avoid the initial execution
        if(isSubmitted){          
            onSubmit(formik.values);
        }
    },[isSubmitted, onSubmit, formik.values])


    //Logic to enable/disbable the submit button
    const isFormValid = () =>{       
        if(  formik.errors.hasOwnProperty("bookingName") ||
             formik.errors.hasOwnProperty("time")  ||
             formik.errors.hasOwnProperty("guests") ||
             formik.errors.hasOwnProperty("date")  
        )
            return false;
        //If touched at least once and no error (to avoid enabling the on the initial render)
        else if(Object.keys(formik.touched).length > 0 &&
                props.availableTimes.includes(formik.values.time)
                )   
                return true;       
    }


    //formik.touched.name && formik.errors.hasOwnProperty("name")
    //{...formik.getFieldProps("name")}
    return(
        <>    
            <form onSubmit={formik.handleSubmit} 
                  aria-label="Reservation system form"                      
                        >
                <label htmlFor="bookingName">Name*</label>
                <input type="text"
                    id="bookingName"   
                    name="bookingName"                                
                    required
                    {...formik.getFieldProps("bookingName")}
                />                
                <ErrorMessage isDisplayed={formik.touched.bookingName && formik.errors.hasOwnProperty("bookingName")}>
                    Please type your name
                </ErrorMessage>              
                <label htmlFor="res-date">Choose date*</label>
                <input  type="date" 
                        id="res-date"  
                        name="res-date"   
                        required          
                        {...formik.getFieldProps("date")}                          
                        />
                <ErrorMessage isDisplayed={formik.touched.date && formik.errors.hasOwnProperty("date")}>
                    Please select a valid date
                </ErrorMessage>
                <label htmlFor="res-time">Choose time*</label>
                <select id="res-time"
                        name="res-time"
                        {...formik.getFieldProps("time")}
                        required
                        >                        
                            <option defaultValue="selected">Select a time slot</option>
                            {props.availableTimes.map((timeSlot) => {
                                return <option key={timeSlot}>{timeSlot}</option>
                            })}                                                                
                </select>
                <ErrorMessage isDisplayed={formik.touched.time && 
                                           formik.errors.hasOwnProperty("time") |
                                           formik.touched.time &&
                                           !props.availableTimes.includes(formik.values.time)}>
                    Please select a time slot
                </ErrorMessage>
                <label htmlFor="guests">Number of guests*</label>
                <input type="number"  
                        min="1" max="10" 
                        id="guests" 
                        name="guests"
                        {...formik.getFieldProps("guests")}
                        />
                 <ErrorMessage isDisplayed={formik.touched.guests && formik.errors.hasOwnProperty("guests")}>
                    Min 1 guest and max 10 guests
                </ErrorMessage>
                <label htmlFor="occasion">Special Occasion</label>
                <select id="occasion"
                        name="occasion"                    
                        {...formik.getFieldProps("occasion")}
                            >
                    <option defaultValue="selected">Select a special occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <small>* Required fields</small>
                <input 
                    type="submit" 
                    disabled = {isFormValid()? false : true}
                    value="Make Your reservation" 
                    aria-label="Submit form"
                                    />
            </form>
        </>
    );
}

export default BookingForm;