import kulio from '../Hero/kulio.jpg'
import './hero.css'

function Hero(){
return(

    <>

        <div class="hero-container">
                <img src={kulio} alt="Description of the image" class="hero-image"/>
                <div class="hero-text">
                    <p><em>Coolest shoes you will find, cooler than ice!</em></p>
                </div>
        </div>
    </>
)
}
export default Hero