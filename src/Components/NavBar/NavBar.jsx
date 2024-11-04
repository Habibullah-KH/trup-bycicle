import { FiGrid } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import './NavBar.css'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const [click, setClick]= useState(false);
    return (
        <nav className='flex items-center justify-between gap-20 px-5 relative backdrop-blur-xl bg-white/30'>

<Link to='/'><h2 className="font-bold text-2xl">TRUP</h2></Link>

            <ul className={`duration-500 md:duration-0
                ${click ? 'right-5' : '-right-60'} md:left-0
                absolute md:relative mt-[15rem] md:mt-0 md:flex gap-5 border border-clr-300 md:border-none rounded-xl `}>

            <NavLink className={({isActive}) => `${isActive?'text-error': ''}`} to='/'> <li>E-Bikes</li></NavLink>
            <NavLink className={({isActive}) => `${isActive?'text-error': ''}`} to='/Accessories'> <li>Accessories</li></NavLink>
            <NavLink className={({isActive}) => `${isActive?'text-error': ''}`} to='/AboutUs'> <li>About Us</li></NavLink>
            </ul>

<div className="md:hidden bg-clr" onClick={() => setClick(!click)}>
    {
        click === true ? <FiXCircle /> : <FiGrid />
    }
        
</div>


        </nav>
    );
};

export default NavBar;