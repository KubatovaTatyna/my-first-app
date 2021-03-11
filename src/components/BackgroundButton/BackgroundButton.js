import classes from "./BackgroundButton.module.css"
const BackgroundButton = ({children}) => {
    return ( 
        <button className={classes.BackgroundButton}>{ children }</button>
     );
}
 
export default BackgroundButton;