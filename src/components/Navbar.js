import { Button } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    const [expandNavbar, setExpandNavbar] = useState(false);

    // const jumpToReleventDiv = (id) => {
    //     const releventDiv = document.getElementById(id);
    //     // behavior: "smooth" parameter for smooth movement
    //     releventDiv.scrollIntoView({behavior: "smooth"});
    //   }
    return (
        <div className='nav-bar' id={expandNavbar ? "open": "closed"} >
            <div className='toggle-btn'>
                <button id='toggle-btn-container'
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}
                >
                    <ReorderIcon/>
                </button>
            </div>
            <div className='nav-items-container'>
                <div className='nav-items'> 
                    {/* <button onClick={() => {
                        jumpToReleventDiv("about")
                    }}> */}
                    {/* <Link to="/About"> */}
                    <a href="/#about">
                        About
                    </a>
                    {/* </Link> */}
                    {/* </button> */}
                </div>
                <div className='nav-items'> 
                <a href='/#service'>
                    Services
                </a>
                </div>
                <div className='nav-items'>
                <a href='/#project'>
                     Projects
                 </a>
                </div>
                <div className='nav-items'>
                <a href='/#experience'>
                     Experience
                </a>
                </div>
                <div className='nav-items'>
                <a href='/#contact'>
                     Contact
                </a>
                </div>
            </div>
        </div>
    )
}
export default Navbar