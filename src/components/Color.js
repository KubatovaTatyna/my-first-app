import { useState } from "react";
function Color() {

    const [color, setColor] = useState("");

    return <div className="example-5">
        <p >{color}</p>
        <input type="color"
        
         onInput={(event) => setColor(event.target.value)} />
    </div>

}
export default Color;