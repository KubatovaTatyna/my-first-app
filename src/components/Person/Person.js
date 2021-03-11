import classes from "./Person.module.css"
const Person = ({name , age , children}) => {
    return ( <div className={classes.Person}>
        <h2 className={classes.name}>{ name }</h2>
        <h4 className={classes.age}> { age } years old</h4>
        <h5 className={classes.hobby}>{ children }</h5>
    </div> )
}
 
export default Person;