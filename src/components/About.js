import React from "react";
import "../styles/About.css";

function About() {
    return (
        <div id="about" className="about-section">
            <div className="About-section-content">
                <div className="section-heading">ABOUT</div>
                <div className="about-section-main-content">
                    <div className="my-image-container">
                        <img src={require('../Images/shiwangii.jpg')} height="300px" id="my-image"/>
                    </div>
                    <div className="my-info-container">
                        <div className="my-info">I am a 3rd year computer science engineering undergrad with a passion for front-end development. I have a keen interest in contributing to open source projects and have contributed in many open source programs including Hacktoberfest, GirlScript Summer of Code, Socila Summer of Code and much more. Currently, I am working towards becoming a Full Stack Developer with a specialization in MERN stack.</div>
                        <div className="resume-box-container">
                            Resume
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;