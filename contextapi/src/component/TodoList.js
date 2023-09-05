import React, {useContext, useState} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';

const TodoList = () => {
    const [ todo, setTodo ] = useState('');
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const theme = (isDarkTheme) ? darkTheme : lightTheme;
    const { todos, dispatch } = useContext(TodoListContext);
    console.log(todos)

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handelFormSubmmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', text: todo});
        // addTodo(todo);
        setTodo('');
    }

    const handelRemoveTodo = (e) => {
        const id = e.target.id;
        dispatch({type: 'REMOVE_TODO', id: id})
        // removeTodo(id);
    }

    return(
        <div style={{background: theme.background, color: theme.text, textAlign: 'center'}} className='ui list'>
            {todos.length ? (
                todos.map((todo) => {
                    return <p onClick={handelRemoveTodo} id={todo.id} className='item' key={todo.id}>{todo.text}</p>
                })
            ) : <div>You have no todos</div>
            }
            <form onSubmit={handelFormSubmmit}>
                <label htmlFor='todo'>Add todos:</label>
                <input value={todo} type='text' id='todo' onChange={handleChange}/>
                <button className='ui button primary' type='submit'>Add todo</button>
            </form>
            <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
        </div>
    )
}

// class TodoList extends React.Component{
//     // static contextType = ThemeContext;

//     render() {
//         return (
//             <ThemeContext.Consumer>{(context) => {
//                 const {isDarkTheme, lightTheme, darkTheme, changeTheme} = context;
//                 const theme = (isDarkTheme) ? darkTheme : lightTheme;
//                 console.log(theme);
        
//                 return(
//                     <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}} className='ui list'>
//                         <p className='item'>Plan a family trip</p>
//                         <p className='item'>Date with a girl</p>
//                         <p className='item'>Go for a walk</p>
//                         <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
//                     </div>
//                 )
//             }}
//             </ThemeContext.Consumer>
//         )
//     }
// }

export default TodoList;