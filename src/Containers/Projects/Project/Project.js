import classes from "./Project.module.css";

const Project = (props) =>{
    return(
        <div className={classes.Project}>
                <video src="" controls></video>
                <div className={classes.Description}>
                    <h3>{props.title}</h3>
                    <p>Description</p>
                    <button>Source Code</button>

                </div>
            </div>
    );
}
export default Project;