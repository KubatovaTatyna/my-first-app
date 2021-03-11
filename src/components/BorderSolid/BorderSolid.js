import classes from "./BorderSolid.module.css"
const BorderSolid = ({children}) => {
    return ( 
        <button className={classes.BorderSolid}>{ children }</button>
     );
}
 
export default BorderSolid;