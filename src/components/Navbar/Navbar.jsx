import React, { useState } from 'react';
import './Navbar.css'
import {BsFillHouseFill} from 'react-icons/bs'
import {AiOutlineMenu } from 'react-icons/ai'
import {FaRegTimesCircle} from 'react-icons/fa'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick =  () => setClick(!click)
    return ( 
        <div className='navbar'>
            <div className="container">
                <h1><span><BsFillHouseFill/>Real</span></h1>
                <button className="btn">Sing In</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="hamburger">
                    {click ? <FaRegTimesCircle className='icon' onClick={handleClick}/> 
                    : <AiOutlineMenu className='icon' onClick={handleClick}/>}
                    
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;