import { useState } from "react";

export const TodoInput = (props) => {
    const [valueInput, setValueInput] = useState('');
    return (
        <div id="myDIV" className="header">
            <h2 style={{ margin: "5px" }}></h2>
            <input type="text" id="myInput" placeholder="Title..." onChange={(e) => setValueInput(e.target.value)} />
            <span className="addBtn" onClick={
                // () => props.addTodo(document.getElementById('myInput').value)
                () => props.addTodo(valueInput)
            }>Add</span>
        </div>
    );
}