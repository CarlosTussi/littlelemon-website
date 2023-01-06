import {Routes, Route}  from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import ComingSoon from './ComingSoon';

function Main(){
    return (
        <main>             
                <Routes>                
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/reservations" element={<BookingPage />}/>
                    <Route path="/confirmation" element={<ConfirmedBooking />}/>
                    <Route path="/comingsoon" element={<ComingSoon />}/>
                </Routes>                                                             
        </main>
    );
}

export default Main;