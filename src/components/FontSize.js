import { useState } from "react";
function FontSize({ value }) {

    const [size, setSize] = useState(16);

    return (
        <div className="example">
        <span style={{fontSize: size + "px"}}>Exmaple</span>
            <input
                type="number"
                value={size}
                placeholder="Enter Text"
                onInput={(event) => setSize(event.target.value)}>
            </input>
        </div>
    )
}
export default FontSize;