import HeroBanner from './HeroBanner';
import imgSrc from '../assets/restaurant.jpeg'

function ConfirmedBooking() {
    
    return(
        <>
        <HeroBanner description="Wre are looking forward to welcoming very soon!"
                        imgSrc={imgSrc}
                        alt="Restaurant with tables and plants decorating"
                        />
                         <p>The booking has been confirmed.</p>
        </>
       
    );
}

export default ConfirmedBooking;    