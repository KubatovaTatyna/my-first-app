import classes from "./Person.module.css";

const Person = ({ name, role, wpm, commits, photo, github, io}) => {
    return (
        <div className={classes.Person}>
            <div className={classes.text}>
                <div className={classes.name}>{name}</div>
                <div className={classes.role}>{role}</div>
                <div className={classes.wpm}>{wpm}WPM</div>
                <div className={classes.commits}>{commits} commits</div>
                <a  href={github} className={classes.github}>{github}</a>
                <br></br>
                <a  href={io} className={classes.io}>{io}</a>
                <div><img src={photo} className={classes.photo}></img></div>
            </div>
            </div>
    );
}
export default Person;