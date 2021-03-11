import classes from "./DashedButton.module.css"
const DashedButton = ({children}) => {
    return ( 
        <button className={classes.DashedButton}>{ children }</button>
     );
}
 
export default DashedButton;