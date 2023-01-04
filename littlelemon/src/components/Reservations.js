import imgSrc from '../assets/lasagna.jpeg'
import HeroBanner from './HeroBanner';

function Reservations()
{
    return(
        <>
           <HeroBanner description="Reserve you table now and discover our newly designed space in Chicago. You will love it!"
                        imgSrc={imgSrc}
                        alt="Restaurant with tables and plants decorating"
                        />
            <section>
                <p>Content of my reservation</p>
            </section>
        </>
    )
}

export default Reservations;