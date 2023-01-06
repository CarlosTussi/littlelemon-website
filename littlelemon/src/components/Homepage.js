import imgSrc from '../assets/restaurant.jpeg'
import HeroBanner from './HeroBanner';
import WeeklySpecials from './WeeklySpecials';

function Homepage()
{
    return(
        <section aria-label="Hero banner of homepage">
            <HeroBanner description="We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist." 
                        imgSrc={imgSrc} 
                        alt="Picutre of molten lasagna"                        
                        button="Reserve a Table"/>
            <WeeklySpecials />
        </section>
    )
}

export default Homepage;