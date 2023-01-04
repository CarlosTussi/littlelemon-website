import imgSrc from '../assets/lemonBright.png'
import HeroBanner from './HeroBanner';

function Homepage()
{
    return(
        <section>
            <HeroBanner description="Welcome to LL! Please try it out!" 
                        imgSrc={imgSrc} 
                        alt="Picutre of molten lasagna"/>
            <section>
                <p>Content of the main section of the homepage</p>
            </section>
        </section>
    )
}

export default Homepage;