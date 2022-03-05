import { AiOutlineSearch } from "react-icons/ai";
import './Hero.css'
const Hero = () => {
    return ( 
       <div className="hero">
           <div className="content">
               <h1>Find the perfect place</h1>
               <p className="search-text">Search the larges selection of luxury high-rise apartments, multi-family home, and luxury homes.</p>
                <form action="" className="search">
                    <div>
                        <input type="text" placeholder="Enter Keyword..." />
                    </div>
                    <div className="radio">
                        <input type="radio" name="radio" id="buy" checked />
                        <label htmlFor="buy">Buy</label>
                        <input type="radio" name="radio" id="rent" />
                        <label htmlFor="rent">Rent</label>
                        <button type="submit"><AiOutlineSearch className="icon"/></button>
                    </div>
                </form>
           </div>
       </div>
     );
}
 
export default Hero;