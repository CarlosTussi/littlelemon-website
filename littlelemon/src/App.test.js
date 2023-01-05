import { fireEvent, render, screen,  } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

import { unmountComponentAtNode } from "react-dom";

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