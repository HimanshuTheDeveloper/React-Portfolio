import classes from "./Resume.module.css";



const Resume = () => {
    
    return (
        <div className={classes.Resume}>
            <h3>Resume</h3>
            <div className={classes.Description}>
                <div>
                    <h4>Profile Summary</h4>
                    <h5>Himanshu</h5>
                    <p><em>A Full Stack Web Developer</em></p>      
                    <p><em>himanshu32301@gmail.com</em><br></br></p>
                    <a href="https://github.com/HimanshuTheDeveloper"><p><em>https://github.com/HimanshuTheDeveloper</em></p></a>
                </div>
               <div>
                    <h4>Education</h4>
                    <h5>MASTER OF COMPUTER APPLICATION</h5><span>2020 - Present</span>
                    <h5>BACHELOR OF COMPUTER APPLICATION</h5><span>2017 - 2020</span>
                    <h5>SENIOR SECONDARY (12th Class)</h5><span>2015 - 2016</span>
                    <h5>MATRICULATION (10th Class)</h5><span>2013 - 2014</span>
               </div>

            </div>



        </div>
    );
}
export default Resume;