import React from "react";

function TodoList() {

    const [desc, setDesc] = React.useState('');
    const [todos, setTodos] = React.useState([]);

    const inputChanged = (event) => {
        setDesc(event.target.value);
    }

    const addTodo = (event) => {
        setTodos([...todos, desc]);
    }

    return (
        <div>
            <input type="text" onChange={inputChanged} value={desc} />
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                    {todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo} </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;