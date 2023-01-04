import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

test('Basic rendering testing', () => {
  
  render(<App />, {wrapper: BrowserRouter}); //How to render App with Routing
  render( <BookingPage>
            <BookingForm />
          </BookingPage>);

  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();

});


test("Testing updateTimes() and initializeTimes()", ()=> {
  
  const initialSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",];
  const updatedSlots = ["18:30", "19:00", "21:30", "22:00"];

  render( <BookingPage>
            <BookingForm />                         
          </BookingPage>);


    //1) Check if the value on the time slot input equals the initialSlots value
    initialSlots.forEach(element => {
        const option = screen.getByText(element);
        expect(option).toBeInTheDocument(); 
    });

    //2) Force the change of a date
    const dataInput = screen.getByLabelText("Choose date");
    fireEvent.change(dataInput, {target: {value: "2023-01-04"}})

    //3) Check if the time slots have been updated
    updatedSlots.forEach(element => {
      const option = screen.getByText(element);
      expect(option).toBeInTheDocument();
    })
    
    
   
    /* EXTRA TESTS JUST FOR REFERENCE */
    //Force a click on the button
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    //Verify if the functions got executed.
    expect(dataInput).toBeInTheDocument();
    //For future reference on how to check the value
    expect(dataInput).toHaveDisplayValue("2023-01-04")


});