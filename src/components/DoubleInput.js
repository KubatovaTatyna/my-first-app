import { useState } from "react"

function DoubleInput() {
    let [text, setText] = useState("");
    return (
        <div className="Text">
            <input 
            type="text" 
            value={text}
            placeholder="Enter Text"
            onInput={(event) => setText(event.target.value.trim())}>
            </input>
            <input 
            type="text" 
            value={text}
            placeholder="Enter Text"
            onInput={(event) => setText(event.target.value.trim())}>
            </input>
        </div>
    )
}
export default DoubleInput;