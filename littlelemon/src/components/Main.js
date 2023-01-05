import {Routes, Route}  from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function Main(){
    return (
        <main>             
                <Routes>                
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/reservations" element={<BookingPage />}/>
                    <Route path="/confirmation" element={<ConfirmedBooking />} />
                </Routes>                                                             
        </main>
    );
}

export default Main;