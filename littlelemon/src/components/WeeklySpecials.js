import SpecialsCard from "./SpecialsCard";
import capreseSrc from '../assets/caprese.jpeg'
import tiramisuSrc from '../assets/tiramisu.jpeg'
import bologneseSrc from '../assets/bolognese.jpeg'

const weeklyCards = [
    {
        title: "Caprese Salad",
        price: "7.90",
        img: `${capreseSrc}`,
        alt: "Salad with buffala mussarella, tomato and basil.",
        description: "Italian salad, made of sliced fresh mozzarella, tomatoes, and sweet basil, seasoned with salt, and olive oil.",
    },
    {
        title: "Pasta Bolognese",
        price: "$12.00",
        img: `${bologneseSrc}`,
        alt: "Spaghetti pasta with meat and tomato sauce",
        description: "Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese.",

    },
    {
        title: "Tiramisu",
        price: "$9.50",
        img: `${tiramisuSrc}`,
        alt: "Tiramisu with powdered coccoa on top",
        description: "Ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.",

    },
]

function WeeklySpecials()
{
    return(
        <section className="weeklySection">        
            <h4>This Week's Specials!</h4>           
            <div className="weeklySpecialsContent">            
            {
                weeklyCards.map((item) =>{
                    return(
                        <SpecialsCard key={item.title}
                                    title= {item.title}
                                    price={item.price}
                                    img={item.img}
                                    alt={item.alt}
                                    description={item.description}
                                    />
                    )
            })  
            }    
            </div>
        </section>
    )
    
}

export default WeeklySpecials;