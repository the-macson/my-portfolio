import React from 'react';
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Services from "../components/Services"
// import "../Images/girl.png";

function Home() {
    return (
        <div className='home-page-all-content'>
        <Navbar />
        <div className='home-section'>
           <div className='home-section-main-container'>
            <div className='home-section-content-box'>
                <div className='my-intro'>
                    Hi, I am <strong>Shiwangi Kumari.</strong> <br/>
                    I am a <span className='front-end'>Front End Developer</span> <br/>
                    and a <span className='designer'>Designer.</span>
                </div>
                <div className='hire-me-box'>
                    Hire Me
                </div>
            </div>
            <div className='home-section-image-box'>
                <div className='img-container'>
                    <img src={require('../Images/girl.png')} alt='girl' id='girl-image'/>
                </div>
            </div>
           </div>
        </div>
        <About/>
        <Services/>
        <Projects/>
        <Experience/>
        <Footer />
        </div>
    )
}
export default Home;