import { useState } from "react";
function RotateInput( { value }) {
    const [rotate, setRotate] = useState(value ?? 0);
    return (
        <div>
        <div className="ColorSliders" 
         style={{ backgroundColor:"black" ,
         width: "100px" , 
         height: "100px" , 
         transform: `rotate(${rotate}deg)`
         }}>
        </div>
        <input type="range"
        value={rotate}
        min="0" 
        max="360"
        onInput={({target}) => setRotate(target.value)}/>
        </div>
    );
}
export default RotateInput;