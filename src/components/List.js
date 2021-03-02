import { useState } from "react"

function List() {
    let [list, setList] = useState(["Apple"]);
    let [li , setLi] = useState('')
    return (
        <div className="List">
            <ul><li>{list}</li></ul>
            <input 
            type="text" 
            placeholder="Enter Text"
            >
            </input>
            <button>Add</button>
        </div>
    )
}
export default List;