import classes from './Aboutus.module.css';
import React from 'react';
import aboutprofile from '../../assets/profile.jpg';
import { Component } from 'react';


class Aboutus extends Component{
    state = {
        name : "Himanshu",
        dob : "13 October, 1999",
        age : " 21 years Old",
        qualification : "Pursuing MCA",
        language : "Hindi , English",
        city : "Delhi, India",
        email : "himanshu32301@gmail.com",
        github : "https://github.com/himanshuthedeveloper"
    }



    render() {
        return (
            <div className={classes.About}>
                <h3>About Me</h3>
                <div className={classes.Description}>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>- </th>
                            <th>{this.state.name}</th>
                        </tr>
                        <tr>
                            <td>Date of Birth</td>
                            <th>- </th>
                            <td>{this.state.dob}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <th>- </th>
                            <td>{this.state.age}</td>
                        </tr>
                        <tr>
                            <td>Qualification</td>
                            <th>- </th>
                            <td>{this.state.qualification}</td>
                        </tr>
                        <tr>
                            <td>Language </td>
                            <th>- </th>
                            <td>{this.state.language}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <th>-</th>
                            <td>{this.state.city}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <th>- </th>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Github Link</td>
                            <th>- </th>
                            <td>{this.state.github}</td>
                        </tr>
                    </table>

                    <img src={aboutprofile} alt="images"></img>
                </div>
            </div>

        );
    }
}
export default Aboutus;