import imgSrc from '../assets/lemonBright.png'
import HeroBanner from './HeroBanner';

function Reservations()
{
    return(
        <>
           <HeroBanner description="Book your table now with us!"
                        imgSrc={imgSrc}
                        alt="Restaurant with tables and plants decorating"/>
            <section>
                <p>Content of my reservation</p>
            </section>
        </>
    )
}

export default Reservations;