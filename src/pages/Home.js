import React from "react"; 
import { Carousel } from 'react-bootstrap';
import image1 from '../Images/image1.jpg'
import Singlebed from '../Images/image2.jpg'
import Doublebed from '../Images/image3.jpg'
import image3 from '../Images/7.jpg'
import image2 from '../Images/4.jpg'
import ACRoom from '../Images/image9.jpg'
import NonACRoom from '../Images/image4.jpg'
import image4 from '../Images/1.jpg'

const Home = () => {
  return (
    <div className="homeImage">
    <div className="bannerImage">
    <Carousel controls= {false} fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={image3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={image2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={image4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>



            
    </div>
    <h4> AVAILABLE ROOMS</h4>
    <div className="homepageImage">
        <div>
            <img src={Singlebed} alt="single"></img>
            <h4>Single Bed Room</h4> 
        </div>
        <div>
            <img src={Doublebed} alt="double"></img>
            <h4>Double Bed Room</h4>
        </div>
        <div>
            <img src={ACRoom} alt="AC"></img>
            <h4>AC Room</h4>
        </div>
        <div>
            <img src={NonACRoom} alt="NonAC"></img>
            <h4>Non-AC Room</h4>
        </div>

    </div>
    <footer>
        <h5>Made with ❤️</h5>

    </footer>

</div>
)
}
export default Home;