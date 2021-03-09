import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import profile from '../../assets/HomeProfile.jpg';
import classes from'./Home.module.css';
import Aboutus from '../Aboutus/Aboutus';
import Resume from '../Resume/Resume';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        
            <main className={classes.Main}>
                
                <div className={classes.Profile}>
                    <img src={profile} className={classes.Main} alt="Profile-Images"/>
                </div>
                <div className={classes.TextContainer}>
                    <h2>Himanshu Singh</h2>
                    <p>I'm <span id="role">Full Stack Developer</span></p>
                </div>  

                <Aboutus />
                <Resume />
                <Skills />
                <Projects />
                <ContactUs />

            </main>


    );
}
export default Home;