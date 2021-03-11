import classes from "./SolidButton.module.css"
const SolidButton = ({children}) => {
    return ( 
        <button className={classes.SolidButton}>{ children }</button>
     );
}
 
export default SolidButton;