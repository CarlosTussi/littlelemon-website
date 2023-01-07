import { useNavigate, } from 'react-router-dom';


const navigationPath = (e) => {
    switch(e.target.innerText){
        case 'Reserve a Table':
            return "/reservations"            
        default:
            break;
    }
}

function HeroBanner(props)
{
    const navigate = useNavigate();

    return(
        <section className="heroBanner">
            <div className="heroBannerTitle">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </div> 
            <div className="heroBannerContent">
                <h3>{props.description}</h3>
                {props.button ? <button onClick={(e) => navigate(navigationPath(e))}>{props.button}</button> : ""}
            </div>                       
            <img src={props.imgSrc} alt={props.alt}/>                
        </section>
    );
}

export default HeroBanner;