import Project from "./Project/Project";
import classes from "./Projects.module.css";


const Projects = props => {
    const projectsData = {
        data1: {
            projectTitle: "Cab For You",
            description: "This is a repository for my BCA final semester project on Cab Management System.",
            videoLink: "",
            sourceCode: "",
        },
        data2: {
            projectTitle: "Tic Tac Toe",
            description: "This is basically JavaScript code to enhance logical skills",
            videoLink: "",
            sourceCode: "",
            liveLink: ""
        },
        data3: {
            projectTitle: "Calculator",
            description: "Simple Calculator in Javascript",
            videoLink: "",
            sourceCode: "",
            liveLink: ""
        }
    }
    return (
        <div className={classes.Projects}>
            <h3>My Projects</h3>
            {Object.keys(projectsData).map(item => 
                <Project 
                    title={projectsData[item].projectTitle}
                />
            )
            }
        </div>
    );
}
export default Projects;