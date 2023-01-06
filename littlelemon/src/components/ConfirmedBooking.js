import HeroBanner from './HeroBanner';
import imgSrc from '../assets/restaurant.jpeg'
import { useLocation, } from 'react-router-dom';
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
          <h5>Name:</h5>
          <h6>{data.bookingName}</h6>
          <h5>Date:</h5>
          <h6>{data.date}</h6>
          <h5>Time:</h5>
          <h6>{data.time}</h6>
          <h5>Guests:</h5>
          <h6>{data.guests}</h6>
          <h5>Special Ocasion</h5>
          <h6>{data.occasion.length > 0 ? data.occasion : "No"}</h6>
        </section>                       
        </>
       
    );
}

export default ConfirmedBooking;    