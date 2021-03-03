import { useState } from "react";
function InputLength( { value }) {

    const [input, setList] = useState( value ?? "");

    return <div className="example-5">
        <input type="text"
        value={input}
         onInput={(event) => setList(event.target.value.trim())} />
        {input.length}
    </div>

}

export default InputLength;
