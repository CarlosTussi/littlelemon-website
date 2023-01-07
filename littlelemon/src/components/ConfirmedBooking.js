import HeroBanner from './HeroBanner';
import imgSrc from '../assets/restaurant.jpeg'
import { useLocation, } from 'react-router-dom';
import {CheckCircle,} from 'react-feather';

function ConfirmedBooking(props) {

    const location = useLocation();
    const data = location.state;

    return(
        <>
        <HeroBanner description="Wre are looking forward to welcoming very soon!"
                        imgSrc={imgSrc}
                        alt="Restaurant with tables and plants decorating"
                        />
        <section className="confirmationTable">
            {/* {Object.keys(data).map((item)=> {
            console.log(item);
            return <h5 key={item}>{item}</h5>
         })}     */}

         <h4>Your Booking is Confirmed!</h4>
         <CheckCircle size="4em" color="#495E57"/>
         <table>
            <tr>
                <th colSpan="2">Booking Details</th>
            </tr>
            <tr>
                <td><h5>Name:</h5></td>
                <td><h6>{data.bookingName}</h6></td>
            </tr>
            <tr>
                <td><h5>Date:</h5></td>
                <td><h6>{data.date}</h6></td>
            </tr>
            <tr>
                <td><h5>Time:</h5></td>
                <td><h6>{data.time}</h6></td>
            </tr>
            <tr>
                <td><h5>Guests:</h5></td>
                <td><h6>{data.guests}</h6></td>
            </tr>
            <tr>
                <td><h5>Special Ocasion:</h5></td>
                <td><h6>{data.occasion.length > 0 ? data.occasion : "No"}</h6></td>
            </tr>
         </table>
        </section>                       
        </>
       
    );
}

export default ConfirmedBooking;    