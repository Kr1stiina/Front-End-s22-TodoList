import React from 'react';


function TodoTable(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {props.todos.map((item) =>
                        <tr key={item.id} >
                            <td> {item.date} </td>
                            <td> {item.desc} </td>
                            <td><button onClick={(e) => props.delete(item.id)}>Delete</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default TodoTable;