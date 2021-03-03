import { useState } from "react";
function Temp({ value }) {

    const [celc, setCelc] = useState(value ?? 0);

    return (
        <div className="example">
            C
            <input
                type="number"
                placeholder="Enter Text"
                onInput={(event) => setCelc(event.target.value)}>
            </input>
            =
            <span>{celc * 33.8}</span>
            F
        </div>
    )
}
export default Temp;