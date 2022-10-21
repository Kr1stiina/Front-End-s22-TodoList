import React, { useState } from 'react';

function TodoList() {

    const [desc, setDesc] = useState('');
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState('');
    const [id, setId] = useState(-1);

    const inputChanged1 = (event) => {
        setDesc(event.target.value);
    }

    const inputChanged2 = (event) => {
        setDate(event.target.value);
    }

    const addTodo = (event) => {
        setId(id + 1);
        setTodos([...todos, { id: id, date: date, desc: desc }]);
    }

    const deleteRow = (id) => {
        setTodos((current) =>
            current.filter((todos) =>
                todos.id !== id)
        );
    };

    return (
        <div>
            <h3> Add ToDo: </h3>
            <h4>
                Date: <input type="date" onChange={inputChanged2} value={date} />
                Description: <input type="text" onChange={inputChanged1} value={desc} />
                <button onClick={addTodo}>Add</button>
            </h4>
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {todos.map((todo) =>
                        <tr key={todo.id}>
                            <td>{todo.date} </td>
                            <td>{todo.desc}</td>
                            <td><button onClick={(e) => deleteRow(todo.id)}> Delete </button> </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;