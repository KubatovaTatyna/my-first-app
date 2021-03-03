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
        <br></br>
        <input type="range"
        min={0} 
        max={360}
        value={rotate}
        onInput={({target}) => setRotate(target.value)}/>
        {rotate} / {360} degs
        </div>
    );
}
export default RotateInput;