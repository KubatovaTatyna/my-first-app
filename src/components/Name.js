import { useState } from "react"

function Name() {
    let [name, setName] = useState("");
    return (
        <div className="Name">
            <h1>Your name is "{name}"</h1>
            <input 
            type="text" 
            placeholder="Enter Text"
            onInput={(event) => setName(event.target.value.trim())}>
            </input>
        </div>
    )
}
export default Name;