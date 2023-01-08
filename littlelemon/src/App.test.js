import { fireEvent, prettyDOM, render, screen, waitFor,  } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import { unmountComponentAtNode } from "react-dom";
import PopUpProvider from './context/PopUpProvider';

test('Basic rendering testing', () => {
  
  render(<App />, {wrapper: BrowserRouter}); //How to render App with Routing
  render( 
    <BrowserRouter>
        <PopUpProvider>
          <BookingPage>
            <BookingForm />
          </BookingPage>
        </PopUpProvider>
      </BrowserRouter>);

  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();

});

test("Testing updateTimes() and initializeTimes()", ()=> {


  render(       
      <BrowserRouter>
        <PopUpProvider>
          <BookingPage>
            <BookingForm />                         
          </BookingPage>
        </PopUpProvider>
      </BrowserRouter>
          );
     
    const initialSelection = screen.getAllByText(/\d\d:\d\d/);  //Matching a time pattern xx:xx   
    expect(initialSelection).not.toHaveLength(0);

    /* You will need to update the test to include a pre-selected date as part of the dispatch data. */
    //Check that a date was pre-selected correctly
    const dataInput = screen.getByLabelText("Choose date*");
    fireEvent.change(dataInput, {target: {value: "2023-07-25"}})

    const updateSelection = screen.getAllByText(/\d\d:\d\d/);
    expect(updateSelection).not.toHaveLength(0);
});


test('Form FAIL validation for all of the inputs', async () => {
  render( 
    <BrowserRouter>
      <PopUpProvider>
        <BookingPage>
          <BookingForm/>                         
        </BookingPage>
      </ PopUpProvider>
    </BrowserRouter>
      
      );
    //Name
    ////Didn't input anything
    const nameInput = screen.getByLabelText("Name*");
    fireEvent.blur(nameInput);
    
    await waitFor(() => {
      const errorNameMessage = screen.getByText("Please type your name");
      expect(errorNameMessage).toHaveStyle("display:block")
    })

    //Date
    //Input the wrong date
    const dateInput = screen.getByLabelText("Choose date*");
    fireEvent.change(dateInput, {target:{value: "2020-07-05"}}); //Invalid date (past)
    fireEvent.blur(dateInput);

    await waitFor(() => {
      const errorDateMessage = screen.getByText("Please select a valid date");
      expect(errorDateMessage).toHaveStyle("display:block");
    })

    //Time
    //Input wrong time (no time slot selected)
    const timeInput = screen.getByLabelText("Choose time*");
    fireEvent.blur(timeInput);

    await waitFor(() => {
      const errorTimeSlotMessage = screen.getByText("Please select a time slot");
      expect(errorTimeSlotMessage).toHaveStyle("display:block");
    })

    //Guests
    //NEGATIVE NUMBERS OF GUESTS
    const guestsInput = screen.getByLabelText("Number of guests*");
    fireEvent.change(guestsInput, {target:{value: "0"}});
    fireEvent.blur(guestsInput);

    await waitFor(() => {
      const errorGuests = screen.getByText("Min 1 guest and max 10 guests");
      expect(errorGuests).toHaveStyle("display:block");
    })
  
    /* RE-SETTING */
    //So the field has a correct value. Will force the error message to disappear
    fireEvent.change(guestsInput, {target:{value: "1"}});
    fireEvent.blur(guestsInput);
    await waitFor(() => {
      const errorGuests = screen.getByText("Min 1 guest and max 10 guests");
      expect(errorGuests).toHaveStyle("display:none");
    })

    //NEGATIVE NUMBERS OF GUESTS 
    fireEvent.change(guestsInput, {target:{value: "-1"}});
    fireEvent.blur(guestsInput);
    await waitFor(() => {
      const errorGuests = screen.getByText("Min 1 guest and max 10 guests");
      expect(errorGuests).toHaveStyle("display:block");
    })

    /* RE-SETTING */
    //So the field has a correct value. Will force the error message to disappear
    fireEvent.change(guestsInput, {target:{value: "1"}});
    fireEvent.blur(guestsInput);
    await waitFor(() => {
      const errorGuests = screen.getByText("Min 1 guest and max 10 guests");
      expect(errorGuests).toHaveStyle("display:none");
    })

    //BIGGER THAN 10
    fireEvent.change(guestsInput, {target:{value: "11"}});
    fireEvent.blur(guestsInput);
    await waitFor(() => {
      const errorGuests = screen.getByText("Min 1 guest and max 10 guests");
      expect(errorGuests).toHaveStyle("display:block");
    })

    //BUTTON DISABLED
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    console.log(prettyDOM());

})


test('Form will have submit button enabled if all inputs are valid', async () =>{

  render( 
    <BrowserRouter>
      <PopUpProvider>
        <BookingPage>
          <BookingForm/>                         
        </BookingPage>
      </ PopUpProvider>
    </BrowserRouter>
      
      );
     

    const date = screen.getByLabelText("Choose date*");
    const guests = screen.getByLabelText("Number of guests*");
    const name = screen.getByLabelText("Name*");

    fireEvent.change(date, {target:{value: "2023-07-05"}});
    // fireEvent.click(screen.getByText("17:00"));  
    fireEvent.change(guests, {target:{value: "3"}});
    fireEvent.change(name, {target:{value: "Carlos"}});

    console.log(prettyDOM());

    await waitFor(() => {
      const submitButton = screen.getByDisplayValue("Make Your reservation");
      expect(submitButton).toBeDisabled();
    })
    



})



/* ****************** */
/* JUST FOR REFERENCE */
/* ****************** */

/* NEED TO BE CREATED OUTSIDE TEST SUIT */
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

// test('Creating temporary screen elements for testing react', () => {

//     //To use it
//     // render(<MyComponent id="123" />, container);  //Renderin "<MyComponent>" inside "container"
// }) 


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