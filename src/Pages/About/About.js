import React from 'react';
import zaman from '../../Images/last 4.jpg';
import './About.css'
const About = () => {
    return (

        <div className=''>
            <div className='d-flex flex-md-row about-title mx-auto mt-5 d-flex  flex-column '>
            <div>
                <img className='about-img' src={zaman} alt=''/>
                <h4 className='mx-4 name'>Md Hadiuzzaman</h4>
            </div>
            <div className='goal'>
                <h3>Life Goal</h3>
                <p >Become a Software Engineer and build a Startup.To acheive my goal I want to complete the Programming Hero Web Development Course successfully and increase problem solving skill.I am trying to skilled myself as if well established software company willing to hire me.After getting job I will take full preparetion of IELTS and and get ready to go abroad for higher study.</p>
            </div>

        </div>
        </div>

    );
};

export default About;