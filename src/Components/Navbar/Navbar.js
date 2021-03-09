import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { Component } from 'react';
import NavProfile from '../../assets/NavProfile.jpeg';

class Navbar extends Component{
    render() {
        return (
            <nav className={classes.Sidebar}>
                {/* <button className={classes.hamburger}></button> */}
                    {/* <i className="fa fa-close"/> */}
                <div className={classes.profile}>
                    <img src={NavProfile} alt="Navbar-Profile"></img>
                    <p>Himanshu</p>
                    <div>
                        A B C
                    </div>
                </div>
                <div clasName={classes.Link}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>

                </div>

                <div className={classes.footer}>
                    <p>Copyright @2020 himanshuthedeveloper</p>
                </div>


            </nav>

        );
    }
}

export default Navbar;

