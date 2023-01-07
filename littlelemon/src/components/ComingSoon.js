import HeroBanner from './HeroBanner';
import imgSrc from '../assets/construction.jpeg'

function ComingSoon()
{
    return(
        <>
          <HeroBanner description="More online features coming to you soon!"
                      imgSrc={imgSrc}
                      alt="Modern restaurant with tables and plants"                        
          />
          <section  style={{
                    textAlign: "center",
                    height: "10em",
                    paddingTop: "5em"
            }}>
            <h4>Page still under construction ♡</h4>
          </section>
        </>
    );
}

export default ComingSoon;