import Navbar from '../Components/Navbar/Navbar';
import Aboutus from '../Containers/Aboutus/Aboutus';
import ContactUs from '../Containers/ContactUs/ContactUs';
import Home from '../Containers/Home/Home';
import Projects from '../Containers/Projects/Projects';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Resume from '../Containers/Resume/Resume';
import Skills from '../Containers/Skills/Skills';
import classes from './Portfolio.module.css';


const Portfolio = () => {
    return (
        <Router>
                <Navbar />
                <div className={classes.main}>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/about" component={Aboutus}></Route>
                        <Route exact path="/resume" component={Resume}></Route>
                        <Route exact path="/skills" component={Skills}></Route>
                        <Route exact path="/projects" component={Projects}></Route>
                        <Route exact path="/contact" component={ContactUs}></Route>
                    </Switch> 
                </div>  
        </Router>
    );
}
export default Portfolio;