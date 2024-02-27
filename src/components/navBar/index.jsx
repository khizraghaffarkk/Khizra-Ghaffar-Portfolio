import React, { useState } from "react";
import {FaReact,FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";
import {HiX} from "react-icons/hi";
import "./style.scss";

const data = [
    {
        label:'HOME',
        to:'/'
    },
    {
        label:'ABOUT',
        to:'/about'
    },
    {
        label:'SKILLS',
        to:'/skills'
    },
    {
        label:'RESUME',
        to:'/resume'
    },
    {
        label:'PORTFOLIO',
        to:'/portfolio'
    },
    {
        label:'CONTACT',
        to:'/contact'
    }
]
const Navbar = ()=>{
    const [toggleIcon, setToggleIcon]=useState(false);

    const handleToggleIcon = ()=>{
        setToggleIcon(!toggleIcon);
    }
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                    <FaReact size={30}></FaReact>
                    </Link>
                </div>

                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}>
                    {
                        data.map((item,i)=>(
                            <li key={i} className="navbar__container__menu__item">
                                <Link to={item.to} className="navbar__container__menu__item__links">
                                 {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="nav-icons" onClick={handleToggleIcon}>
                    {
                        toggleIcon? <HiX size={30}/>: <FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;