import classes from "./DottedButton.module.css"
const DottedButton = ({children}) => {
    return ( 
        <button className={classes.DottedButton}>{ children }</button>
     );
}
 
export default DottedButton;