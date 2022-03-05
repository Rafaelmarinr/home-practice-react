
import './Featured.css'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Bathroom2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/livingroom.jpg'
const Featured = () => {
    return ( 
        <div className='featured'>
            <h1 className="featured-text">Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <div className="container">
                <img src={House1} alt="" className='span-3 image-grid-row-2'/>
                <img src={Bed1} alt="" />
                <img src={Bed2} alt="" />
                <img src={Kitchen} alt="" />
                <img src={Bathroom} alt="" />
            <div className="span-3 img-details">
                <div className="top">
                    <h2>123 Acem St. Dellas, TX</h2>
                    <p>House for Sale</p>
                    <p className="price">$2,677,000</p>
                </div>
                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className="bold">Bedrooms:</p><p>5</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Bathrooms:</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Square Feet:</p><p>8,138</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='span-2 right-img-details'>
                <p>A beautiful modern day home in the city with a full-size pool. 
                    Spacious and luxurious home located in Texas. 
                    Including media room, workout facility, and built-in sauna.</p>
                <button className="btn">View Listing</button>
            </div>
            </div>
            {/*Section section*/}
            <div className="container">
                <img src={Bed3} alt="" className='order-2' />
                <img src={Bed4} alt="" className='order-3'/>

                <img src={House2} alt=""  className='span-3 image-grid-row-2 order-1'/>
                
                <img src={Bathroom2} alt="" className='order-4'/>
                <img src={LivingRoom} alt="" className='order-5'/>
                <div className='span-2 right-img-details order-7'>
                <p>A beautiful modern day home in the city with a full-size pool. 
                    Spacious and luxurious home located in Texas. 
                    Including media room, workout facility, and built-in sauna.</p>
                <button className="btn">View Listing</button>
            </div>

            

            <div className="span-3 img-details order-6">
                <div className="top">
                    <h2>123 Acem St. Dellas, TX</h2>
                    <p>House for Sale</p>
                    <p className="price">$2,677,000</p>
                </div>
                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className="bold">Bedrooms:</p><p>5</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Bathrooms:</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Square Feet:</p><p>8,138</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
            </div>
           
            </div>
        </div>
     );
}
 
export default Featured;