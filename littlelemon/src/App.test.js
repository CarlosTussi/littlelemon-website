import { fireEvent, render, screen,  } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

import { unmountComponentAtNode } from "react-dom";
import { ErrorMessage } from 'formik';
import { act } from 'react-dom/test-utils';

test('Basic rendering testing', () => {
  
  render(<App />, {wrapper: BrowserRouter}); //How to render App with Routing
  render( 
    <BrowserRouter>
          <BookingPage>
            <BookingForm />
          </BookingPage>
      </BrowserRouter>);

  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();

});


  /* NEED TO BE CREATED OUTSIDE TEST */
  //We can populate container to check it renders whatever we are expecting
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });


  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

test('Creating temporary screen elements for testing react', () => {

    //To use it
    // render(<MyComponent id="123" />, container);  //Renderin "<MyComponent>" inside "container"
})


test("Testing updateTimes() and initializeTimes()", ()=> {


  render( 
        <BrowserRouter>
          <BookingPage>
            <BookingForm />                         
          </BookingPage>
          </BrowserRouter>
          );

    /*"the fetchAPI function will return a non-empty array of available booking times."*/
     //Check that we have least one option in the dropdown menu
     //Time Regular expression
    //('/[0-1]?[0-9]|2[0-3]:[0:5][0-9]/');   
    
  
    const initialSelection = screen.getAllByText(/\d\d:\d\d/);  //Matching a time pattern xx:xx   
    expect(initialSelection).not.toHaveLength(0);

    /* You will need to update the test to include a pre-selected date as part of the dispatch data. */
    //Check that a date was pre-selected correctly
    const dataInput = screen.getByLabelText("Choose date");
    fireEvent.change(dataInput, {target: {value: "2023-07-25"}})

    const updateSelection = screen.getAllByText(/\d\d:\d\d/);
    expect(updateSelection).not.toHaveLength(0);


    /* JUST FO REFERENCE */


    //1) Check if the value on the time slot input equals the initialSlots value
    //Old test (reference)
    // initialSlots.forEach(element => {
    //     const option = screen.getByText(element);
    //     expect(option).toBeInTheDocument(); 
    // });

    //2) Force the change of a date
    //Old test (reference)
    // const dataInput = screen.getByLabelText("Choose date");
    // fireEvent.change(dataInput, {target: {value: "2023-07-25"}})

    //3) Check if the time slots have been updated
    //Old Test (reference)
    // updatedSlots.forEach(element => {
    //   const option = screen.getByText(element);
    //   expect(option).toBeInTheDocument();
    // })
    
    /* EXTRA TESTS JUST FOR REFERENCE */
    //Force a click on the button
    // const submitButton = screen.getByRole("button");
    // fireEvent.click(submitButton);

    //Verify if the functions got executed.
    // expect(dataInput).toBeInTheDocument();
    //For future reference on how to check the value
    // expect(dataInput).toHaveDisplayValue("2023-01-04")


});


test('Form FAIL validation for all of the inputs', () => {
  render( 
    <BrowserRouter>
      <BookingPage>
        <BookingForm />                         
      </BookingPage>
      </BrowserRouter>
      );


    //Name
    ////Didn't input anything
    const nameInput = screen.getByLabelText("Name");
    fireEvent.touchEnd(nameInput); 
    const errorNameMessage = screen.getByText("Please type your name");
    expect(errorNameMessage).toBeInTheDocument();

    //Date
    ////Chose a date in the past
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, "2023-07-05"); //Invalid date (past)
    const errorDateMessage = screen.getByText("Please select a valid date (DD/MM/YYY)");
    expect(errorDateMessage).toBeInTheDocument();

    //Time
    ////Invalid input
    const timeInput = screen.getByLabelText("Choose time");
    fireEvent.touchEnd(timeInput); //Didn't select anything
    const errorTimeMessage = screen.getByText("Please select a time slot");
    expect(errorTimeMessage).toBeInTheDocument();

    ////When selected "Select a time slot" and moved out of the input field, should be an error
    fireEvent.change(timeInput, "Select a time slot"); //When selected the default option
    fireEvent.touchEnd(timeInput); 
    expect(errorTimeMessage).toBeInTheDocument();

    //Guests
    ////Inavlid entries (less or equal than 0 or more than 10)
    const guestsInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestsInput, "1");
    const errorGuestsNegative = screen.getByText("Min 1 guest and max 10 guests");
    expect(errorGuestsNegative).toBeInTheDocument();

    //Test button disabled
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitButton).toHaveAttribute('disabled');

    //Populating the form before sending
    const date = screen.getByLabelText("Choose date");
    const time = screen.getByLabelText("Choose time");
    const guests = screen.getByLabelText("Number of guests");
    const name = screen.getByLabelText("Name");

    fireEvent.change(date, "2024-12-12");
    fireEvent.change(time, "17:00");
    fireEvent.change(guests, "3");
    fireEvent.change(name, "Carlos");

    expect(submitButton).not.toHaveAttribute('disabled="');



})