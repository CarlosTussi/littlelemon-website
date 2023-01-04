import imgSrc from '../assets/restaurant.jpeg'
import HeroBanner from './HeroBanner';

function Homepage()
{
    return(
        <section>
            <HeroBanner description="We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist." 
                        imgSrc={imgSrc} 
                        alt="Picutre of molten lasagna"
                        button="Reserve a Table"/>
            <section>
                <p>Content of the main section of the homepage</p>
            </section>
        </section>
    )
}

export default Homepage;