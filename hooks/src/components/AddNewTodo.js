import React, {useState} from 'react';

const AddNewTodo = ({addTodo}) => {

    const [todo, setTodos] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        setTodos('');
        addTodo(todo)
    };

    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor='todo'>To do</label>
            <input type='text' id='todo' value={todo} onChange={(e) => {setTodos(e.target.value)}}/>
            <input type='submit' />
        </form>
    )
};

export default AddNewTodo;