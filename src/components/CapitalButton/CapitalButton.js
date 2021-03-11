import classes from "./CapitalButton.module.css"
const CapitalButton = ({children}) => {
    return ( 
        <button className={classes.CapitalButton}>{ children }</button>
     );
}
export default CapitalButton;