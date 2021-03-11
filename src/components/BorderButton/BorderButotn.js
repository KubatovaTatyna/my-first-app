import classes from "./BorderButton.module.css"
const BorderButton = ({children}) => {
    return ( 
        <button className={classes.BorderButton}>{ children }</button>
     );
}
 
export default BorderButton;