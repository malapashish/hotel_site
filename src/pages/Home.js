import React from 'react'
import Singlebed from '../images/single.jpg'
import Doublebed from '../images/double.jpg'
import ACRoom from '../images/image6.jpg'
import NonACRoom from '../images/image7.jpg'

const Home = () => {
    return (
        <div className="homeImage">
            <div className="bannerImage">
                    {/* <div className="slider-frame">
                    <div className="slide-images">
                    <div className="img-container">
                    <div className="img-container">
                        <img src={Singlebed} alt="single"></img>
                    </div>
                    <div className="img-container">
                        <img src={Doublebed} alt="double"></img>
                    </div>
                    <div className="img-container">
                        <img src={ACRoom} alt="ac"></img>
                    </div>
                    </div>
                    </div>
                    </div> */}
                    
            </div>
            <h2> AVAILABLE ROOMS</h2>
            <div className="homepageImage">
                <div>
                    <img src={Singlebed} alt="single"></img>
                    <h3>Single Bed Room</h3> 
                </div>
                <div>
                    <img src={Doublebed} alt="double"></img>
                    <h3>Double Bed Room</h3>
                </div>
                <div>
                    <img src={ACRoom} alt="AC"></img>
                    <h3>AC Bed Room</h3>
                </div>
                <div>
                    <img src={NonACRoom} alt="NonAC"></img>
                    <h3>Non-AC Bed Room</h3>
                </div>

            </div>
            <footer>
                <h3>Contact Us</h3>

            </footer>

        </div>
    )
}

export default Home;
