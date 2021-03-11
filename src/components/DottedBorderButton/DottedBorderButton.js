import classes from "./DottedBorderButton.module.css"
const DottedBorderButton = ({children}) => {
    return ( 
        <button className={classes.DottedBorderButton}>{ children }</button>
     );
}
 
export default DottedBorderButton;