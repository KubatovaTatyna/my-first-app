import { useState } from "react";
function Dollar({ value }) {

    const [dollar, setDollar] = useState(value ?? 0);

    return (
        <div className="example">
            $
            <input
                type="number"
                placeholder="Enter Text"
                onInput={(event) => setDollar(event.target.value)}>
            </input>
            =
            <span>{dollar * 85}</span>
            som
        </div>
    )
}
export default Dollar;