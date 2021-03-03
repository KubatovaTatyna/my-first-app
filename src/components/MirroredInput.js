import { useState } from "react";
function MirroredInput( { value }) {
    const [text, setText] = useState(value ?? "");
    return (
        <div>
        <input type="text"
        value={text}
        onInput={({target}) => setText(target.value)}/>
        -
        <span style={{transform: `scaleX(-1)`,
               display:'inline-block',
               filter:'FlipH'}}>{text}</span>
        </div>
    );
}
export default MirroredInput;