import classes from "./PaddingButton.module.css"
const PaddingButton = ({children}) => {
    return ( 
        <button className={classes.PaddingButton}>{ children }</button>
     );
}
 
export default PaddingButton;