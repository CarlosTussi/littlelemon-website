import {Routes, Route}  from 'react-router-dom';
import Homepage from './Homepage';
import Reservations from './Reservations';

function Main(){
    return (
        <main>             
                <Routes>                
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/reservations" element={<Reservations />}/>
                </Routes>                                                             
        </main>
    );
}

export default Main;