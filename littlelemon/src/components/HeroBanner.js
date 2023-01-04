function HeroBanner(props)
{
    return(
        <section className="heroBanner">
            <div className="heroTitle">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </div>
            <h4>{props.description}</h4>
            <img src={props.imgSrc} alt={props.alt}/>                
        </section>
    );
}

export default HeroBanner;