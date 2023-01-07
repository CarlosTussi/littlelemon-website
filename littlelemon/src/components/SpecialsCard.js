import {ShoppingCart} from 'react-feather';
function SpecialsCard(props)
{
    return(
    <article className="specialsCard">
        <img src={props.img} alt={props.alt}/>
        <div className="cardContent">
            <div className="cardTitlePrice">
                <h5>{props.title}</h5>
                <h6>{props.price}</h6>
            </div>            
            <p>{props.description}</p>
            <button>Order Now<span style={{padding: "0 1em 0 1em"}}></span><ShoppingCart /></button>
        </div>
       
        
    </article>    
    );
}

export default SpecialsCard;